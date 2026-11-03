import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

// Exemplo de URL base da API
const API = 'https://dummyjson.com';

export default function BuscaProdutos() {
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    // Se o termo tiver menos de 3 caracteres, limpa os resultados e encerra
    if (termo.length < 3) {
      setResultados([]);
      setCarregando(false);
      return;
    }

    setCarregando(true);

    const timer = setTimeout(async () => {
      try {
        const r = await fetch(`${API}/products/search?q=${termo}`);
        const dados = await r.json();
        setResultados(dados.products || []);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        setCarregando(false);
      }
    }, 500); // Aguarda 500ms após parar de digitar

    // Limpa o timer se o usuário digitar novamente antes de 500ms
    return () => clearTimeout(timer);
  }, [termo]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produtos (mín. 3 letras)..."
        value={termo}
        onChangeText={setTermo}
      />

      {carregando && <ActivityIndicator size="small" color="#0000ff" style={{ marginVertical: 10 }} />}

      <FlatList
        data={resultados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textoItem}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textoItem: {
    fontSize: 16,
  },
});