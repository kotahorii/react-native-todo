import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../slices/userSlice';
import { auth } from '../firebaseConfig';
import { IconButton } from '../components/IconButton';
import { Title } from '../components/Title';
import { RootStackParamList } from '../types/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TagList'>;
};

export const TagListScreen: VFC<Props> = ({ navigation }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch {
      Alert.alert('Logout error');
    }
  };
  return (
    <SafeAreaView style={tw('flex-1 mt-5 items-center')}>
      <Title first="Tag" last="List" />
      <TouchableOpacity
        style={tw('mt-2')}
        onPress={() => navigation.navigate('CreateTag')}
      >
        <MaterialCommunityIcons name="tag-plus" size={40} color="#5f9ea0" />
      </TouchableOpacity>
      <Text>{user.email}</Text>
      <IconButton name="logout" size={20} color="blue" onPress={signOut} />
    </SafeAreaView>
  );
};
