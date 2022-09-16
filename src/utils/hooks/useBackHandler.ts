import { Alert, BackHandler, NativeEventSubscription } from 'react-native';
import { useEffect } from 'react';

export const useBackHandler = () => {
  useEffect(() => {
    let subscription: NativeEventSubscription;
    // Seems like react-navigation add's their custom backHandler, after our's listener and rewrites it
    // after app reloads. That is why we need setTimeout here to prevent backHandler to overwrite their handler.
    const timeoutId = setTimeout(() => {
      subscription = BackHandler.addEventListener('hardwareBackPress', backHandler);
    }, 0);
    return () => {
      subscription && subscription.remove();
      clearTimeout(timeoutId);
    };
  }, []);

  const backHandler = () => {
    Alert.alert('Back btn is blocked');
    return true;
  };
};
