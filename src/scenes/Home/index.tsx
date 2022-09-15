import { Link } from '@react-navigation/native';
import { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '@src/styles/common';
import { MainStackRouteNames } from '@src/router/MainStack/types';

import { styles } from './styles';

export const Home: FC = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.linkWrapper}>
        <Link style={commonStyles.link} to={{ screen: MainStackRouteNames.ScreenA }}>
          Go to ScreenA
        </Link>
        <Link style={commonStyles.link} to={{ screen: MainStackRouteNames.ScreenB }}>
          Go to ScreenB
        </Link>
      </View>
    </SafeAreaView>
  );
};
