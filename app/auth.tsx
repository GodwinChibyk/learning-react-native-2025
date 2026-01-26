import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const AuthScreen = () => {

  const { push }: any = useRouter()
  return (
    <View className='flex-1 justify-center items-center bg-red-600'>
      <Text className='text-2xl font-bold text-white'>AuthScreen</Text>
      <Pressable onPress={() => push('/(tabs)/business')}>
        <Text className='text-2xl font-bold text-white'>Go to home screen</Text>
      </Pressable>
    </View>
  )
}

export default AuthScreen