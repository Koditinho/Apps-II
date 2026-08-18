import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import algu from './assets/algu.png'
import { useState } from 'react';

function Saudacao({ nome }) {
return (<View>
  <Text>Olá, {nome}!</Text>
  </View>)
}
// Reutilizando com valores diferentes:
 export default function App() {
return (
  <View>
<Saudacao nome="Ana" />
<Saudacao nome="Beto" />
  </View>  
  )
};
 