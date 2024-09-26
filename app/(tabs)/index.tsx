import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline'
export default function HomeScreen() {

  const ios = Platform.OS === 'ios';
  return (
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style='light'/>
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white"/>
          <Text className='text-white text-3xl font-bold'>
            Movies
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
