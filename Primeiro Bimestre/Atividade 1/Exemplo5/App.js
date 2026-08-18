import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import algu from './assets/algu.png'

export default function App() {
  return (
    <View>
    <Image
      source={{ uri: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/01325ea5fd7fd4ecab7e209393bf6188.jpg' }}
      style={{ width: 100, height: 100 }}
/>

// Imagem local
<Image source={algu} />
    </View>
  )
};
