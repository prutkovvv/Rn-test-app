import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { Router } from '@src/router/index';
import { styles } from '@src/styles/App';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar />
        <Router />
      </View>
    </SafeAreaProvider>
  );
}
