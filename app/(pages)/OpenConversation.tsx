import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '@/style/AppStyle'
import Header from '@/components/Header'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const OpenConversation = () => {
  return (
    <SafeAreaView style={AppStyle.safeArea} >
        <Header title='Select contact' />
        <Pressable onPress={() => router.navigate("/(pages)/PageAddContact")} style={styles.addContactContainer} >
            <View style={{padding: 10, backgroundColor: Colors.orange, borderRadius: 42}} >
                <Ionicons name='person-add' size={28} color={Colors.white} />
            </View>
            <Text style={AppStyle.textRegularLarge}>New contact</Text>
        </Pressable>
        <View style={styles.contactList} >
            <Text style={AppStyle.textRegularLarge}>Contacts</Text>
            {/* <FlatList/> */}
        </View>
    </SafeAreaView>
  )
}

export default OpenConversation

const styles = StyleSheet.create({
    addContactContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        gap: 20
    },
    contactList: {
        marginTop: 20
    }
})