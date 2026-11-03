import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

// Exemplo de URL base da API
const API = 'https://jsonplaceholder.typicode.com';

export default function DetalhePost({ postId }) {
  const [post, setPost] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Evita rodar se não houver um postId válido
    if (!postId) return;

    setPost(null); // limpa enquanto carrega
    setCarregando(true);
    setErro(null);

    fetch(`${API}/posts/${postId}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error('Não foi possível carregar o post.');
        }
        return r.json();
      })
      .then((dados) => {
        setPost(dados);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, [postId]); // roda de novo se postId mudar

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
      <Text style={styles.titulo}>{post?.title}</Text>
      <Text style={styles.conteudo}>{post?.body}</Text>
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conteudo: {
    fontSize: 16,
    color: '#333',
  },
  erro: {
    color: 'red',
    fontSize: 16,
  },
});