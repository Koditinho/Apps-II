import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    // Função de limpeza executada quando o componente é desmontado
    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{segundos}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});