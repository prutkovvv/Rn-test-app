import { Link } from '@react-navigation/native';
import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '@src/styles/common';

export const ScreenA: FC = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Link style={commonStyles.link} to={{ screen: 'ScreenB' }}>
        Go to ScreenB
      </Link>
    </SafeAreaView>
  );
};
