import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExemploUseEffect() {
  const [contador, setContador] = useState(0);

  // 1. Roda UMA vez, quando o componente aparece na tela
  useEffect(() => {
    console.log('montou!');
  }, []);

  // 2. Roda toda vez que a variável "contador" muda
  useEffect(() => {
    console.log('contador mudou para:', contador);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>
      <Button 
        title="Incrementar" 
        onPress={() => setContador(prev => prev + 1)} 
      />
    </View>
  );
}