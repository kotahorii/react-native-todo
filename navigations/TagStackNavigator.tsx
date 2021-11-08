import React, { VFC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TagListScreen } from '../screens/TagListScreen';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: VFC = () => (
  <Stack.Navigator>
    <Stack.Screen name="TagList" component={TagListScreen} />
  </Stack.Navigator>
);
