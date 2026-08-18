import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import algu from './assets/algu.png'

export default function App() {
  return (
<View style={styles.box}>
<Text>Texto no app</Text>
<Image source={algu} />
</View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    titulo: { fontSize: 22, color: 'tomato' },
  },
})
