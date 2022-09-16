import AsyncStorage from '@react-native-async-storage/async-storage';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { PERSISTENCE_KEY } from '@src/constants/persist';

import { MainStack } from './MainStack';

export const Router = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<InitialState | undefined>(undefined);

  useEffect(() => {
    const restoreState = async () => {
      try {
        if (Platform.OS !== 'web') {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          state && setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };
    !isReady && restoreState();
  }, [isReady]);

  const handleChangeState = (state?: InitialState) => {
    return state && AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  };

  return isReady ? (
    <NavigationContainer initialState={initialState} onStateChange={handleChangeState}>
      <MainStack />
    </NavigationContainer>
  ) : (
    <ActivityIndicator size={52} />
  );
};
