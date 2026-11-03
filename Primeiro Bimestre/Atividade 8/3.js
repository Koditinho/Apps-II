import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

// Exemplo de URL de API (substitua pela sua URL real)
const URL_API = 'https://jsonplaceholder.typicode.com/users';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await fetch(URL_API);
        if (!resposta.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, []);

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centralizado}>
        <Text style={styles.erro}>Erro: {erro}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Substitua <Lista> pelo seu componente de listagem, por exemplo, FlatList */}
      {usuarios.map((usuario) => (
        <Text key={usuario.id}>{usuario.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  erro: {
    color: 'red',
    fontSize: 16,
  },
});