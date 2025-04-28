import { View, StatusBar } from 'react-native'
import { Colors } from '../constants/Colors'
import Toast from '@/components/Toast'
import { Stack } from 'expo-router'
import React from 'react'


const _layout = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}} >
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.background} />
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}} />
            <Stack.Screen name='(pages)/Chat' options={{headerShown: false}} />
            <Stack.Screen name='(pages)/PageAddContact' options={{headerShown: false}} />
            <Stack.Screen name='(pages)/OpenConversation' options={{headerShown: false}} />
        </Stack>
        <Toast.Component/>
      </View>
  )
}


export default _layout