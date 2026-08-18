import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import algu from './assets/algu.png'

export default function App() {
  return (
    <View>
      <Text style={styles.titulo}>Título</Text>
    </View>
  )
};
const styles = StyleSheet.create({
titulo: { fontSize: 22, color: '#220e0e' },
});

