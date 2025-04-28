import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'


interface FlaotIconProps {
    iconName: string
    style: ViewStyle
    iconSize: number
    onPress?: () => any
}

const FloatIcon = ({iconName, iconSize, style, onPress}: FlaotIconProps) => {
  
    return (
    <Pressable style={style} onPress={onPress} hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
        <Ionicons name={iconName as any} size={iconSize} />
    </Pressable>
  )
}

export default FloatIcon

const styles = StyleSheet.create({})