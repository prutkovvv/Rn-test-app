import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenA } from '@src/scenes/ScreenA';
import { ScreenB } from '@src/scenes/ScreenB';

import { BottomTabs } from '../BottomTabs';

import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#fff' },
        headerTitleAlign: 'center',
      }}
      initialRouteName="BottomStack">
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen
        options={({ route }) => {
          return {
            headerShown: Boolean(!route.params?.webViewShown),
          };
        }}
        listeners={({ navigation }) => ({
          focus: () => {
            navigation.setParams({ webViewShown: false });
          },
        })}
        name="ScreenB"
        component={ScreenB}
      />
      <Stack.Screen options={{ headerShown: false }} name="BottomStack" component={BottomTabs} />
    </Stack.Navigator>
  );
};
