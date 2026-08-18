import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button, TouchableOpacity } from 'react-native';
import algu from './assets/algu.png'

export default function App() {
  return (
    <View>
<Button title="Clique" onPress={() => alert('Oi!')} />
<TouchableOpacity onPress={() => alert('Toque!')}>
<Text>Botão personalizado</Text>
</TouchableOpacity>
    </View>
  )
};
