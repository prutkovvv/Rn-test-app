import { FC } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Props } from './types';

export const TabBarIcon: FC<Props> = ({ color, focused, size }) => {
  return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
};
