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
            <Stack.Screen name='(pages)/ChatPage' options={{headerShown: false}} />
            <Stack.Screen name='(pages)/AddContactPage' options={{headerShown: false}} />
            <Stack.Screen name='(pages)/OpenConversationPage' options={{headerShown: false}} />
        </Stack>
        <Toast.Component/>
      </View>
  )
}


export default _layout