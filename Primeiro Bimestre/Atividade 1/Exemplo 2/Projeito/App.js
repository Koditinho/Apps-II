import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<View style={{ padding: 20 }}>
<Text style={{ fontSize: 24 }}>
Bem-vindo!
</Text>
</View>
  );
}

const s = StyleSheet.create({
card: {
backgroundColor: '#61dafb',
padding: 16,
borderRadius: 8,
fontSize: 14,
},
});
