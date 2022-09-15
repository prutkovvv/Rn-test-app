import { WebView } from "react-native-webview";
import { ScreenA } from "@src/scenes/ScreenA";
export type MainStackParamList = {
  ScreenA: undefined;
  ScreenB: { webViewShown: boolean };
  BottomStack: undefined;
};
