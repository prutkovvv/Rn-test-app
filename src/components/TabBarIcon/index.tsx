import { FC, memo } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Props } from './types';

export const TabBarIcon: FC<Props> = memo(({ color, focused, size, name, focusedIconName }) => {
  return <Ionicons name={focused ? focusedIconName || name : name} size={size} color={color} />;
});
