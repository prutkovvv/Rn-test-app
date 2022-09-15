export type MainStackParamList = {
  ScreenA: undefined;
  ScreenB: { webViewShown: boolean };
  BottomStack: undefined;
};

export enum MainStackRouteNames {
  ScreenA = 'ScreenA',
  ScreenB = 'ScreenB',
}
