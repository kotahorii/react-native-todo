import React, { VFC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TagListScreen } from '../screens/TagListScreen';
import { RootStackParamList } from '../types/types';
import { CreateTagScreen } from '../screens/CreateTagScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: VFC = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen name="TagList" component={TagListScreen} />
    </Stack.Group>
    <Stack.Group
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}
    >
      <Stack.Screen name="CreateTag" component={CreateTagScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
