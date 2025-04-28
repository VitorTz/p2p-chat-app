import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '@/style/AppStyle'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'


interface HeaderProps {
    title: string
    showReturnButton?: boolean
    returnButtonOnPress?: () => any
}

const Header = ({
  title, 
  showReturnButton = true, 
  returnButtonOnPress = () => router.back()
}: HeaderProps) => {

  return (
    <View style={styles.container} >
      <Text style={AppStyle.textRegularLarge}>{title}</Text>
      {
        showReturnButton &&
        <Pressable onPress={returnButtonOnPress} hitSlop={{left: 20, right: 20, top: 20, bottom: 20}} >
          <Ionicons name='return-down-back-outline' size={32} color={Colors.white} />
        </Pressable>
      }
    </View>
  )

}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    }
})