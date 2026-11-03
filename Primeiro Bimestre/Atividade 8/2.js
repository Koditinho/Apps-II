import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function Saudacao() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.texto}>
        {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
  },
});