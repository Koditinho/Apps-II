import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.bubble, styles.sentBubble]}>
        <Text>Usuário</Text>
        <Text>Teste</Text>
        <Text style={styles.time}>12:00</Text>
      </View>
      <View style={[styles.bubble, styles.receivedBubble]}>
        <Text>Usuário</Text>
        <Text>Teste</Text>
        <Text style={styles.time}>12:00</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  bubble: {
    width: '70%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  receivedBubble: {
    backgroundColor: '#ebebeb',
    alignSelf: 'flex-start',
  },
  sentBubble: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  time: {
    alignSelf: 'flex-end',
  },
});