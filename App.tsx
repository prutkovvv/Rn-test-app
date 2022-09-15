import { Router } from "@src/router/index";
import { styles } from "@src/styles/App";
import { StatusBar } from "expo-status-bar";

import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Router />
      </View>
    </SafeAreaProvider>
  );
}
