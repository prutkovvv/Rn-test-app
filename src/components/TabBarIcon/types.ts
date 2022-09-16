import { Ionicons } from '@expo/vector-icons';

export type IonicName = keyof typeof Ionicons.glyphMap;

export interface IonicProps {
  focused: boolean;
  color: string;
  size: number;
}

export interface Props extends IonicProps {
  name: IonicName;
  focusedIconName?: IonicName;
}
