import { Link, NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import { MainStackParamList } from '@src/router/MainStack/types';
import { commonStyles } from '@src/styles/common';

import { styles } from './styles';

export const ScreenB: FC = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList>>();

  const handleOpenWebView = () => {
    navigation.setParams({ webViewShown: true });
  };

  const handleCloseWebView = () => {
    navigation.setParams({ webViewShown: false });
  };

  return route.params?.webViewShown ? (
    <SafeAreaView style={styles.flex}>
      <TouchableOpacity style={styles.backLink} onPress={handleCloseWebView}>
        <Text style={styles.backLinkText}>Back to app</Text>
      </TouchableOpacity>
      <WebView source={{ uri: 'https://expo.dev' }} />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.linkWrapper}>
        <Link style={commonStyles.link} to={{ screen: 'Home' }}>
          Go to Home
        </Link>
        <Button title="Open WebView" onPress={handleOpenWebView} />
      </View>
    </SafeAreaView>
  );
};
