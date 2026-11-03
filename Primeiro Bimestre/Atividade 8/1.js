import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>
      <Button title="+1" onPress={() => setContador(prev => prev + 1)} />
      <Button title="-1" onPress={() => setContador(prev => prev - 1)} />
      <Button title="Zerar" onPress={() => setContador(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});