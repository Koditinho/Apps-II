import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button, TouchableOpacity,TextInput } from 'react-native';
import algu from './assets/algu.png'
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  return (
    <View>
<TextInput
value={nome}
onChangeText={setNome}
placeholder="Digite seu nome"
/>
    </View>
  )
};