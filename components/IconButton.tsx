import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  name: any;
  color: string;
  size: number;
  onPress: (e: GestureResponderEvent) => void;
};

export const IconButton: VFC<Props> = ({ name, color, size, onPress }) => (
  <TouchableOpacity style={tw('items-center')} onPress={onPress}>
    <AntDesign name={name} size={size} color={color} />
  </TouchableOpacity>
);
