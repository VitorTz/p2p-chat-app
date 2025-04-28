import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '@/style/AppStyle'
import Header from '@/components/Header'
import FloatIcon from '@/components/FloatIcon'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'


const Home = () => {
  return (
    <SafeAreaView style={AppStyle.safeArea} >
        <Header title='Conversas' showReturnButton={false} />
        <FloatIcon 
            onPress={() => router.navigate("/(pages)/OpenConversation")}
            iconName='chatbubble-outline' 
            iconSize={32} 
            style={styles.icon}
        />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    icon: {
        backgroundColor: Colors.orange, 
        padding: 20, 
        borderRadius: 42,
        position: 'absolute',
        bottom: 40,
        right: 20
    }   
})