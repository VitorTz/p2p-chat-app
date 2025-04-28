import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '@/style/AppStyle'
import Header from '@/components/Header'
import { router } from 'expo-router'
import AddContactForm from '@/components/form/AddContactForm'

const AddContactPage = () => {
  return (
    <SafeAreaView style={AppStyle.safeArea} >
      <Header title='Add contact'/>
      <AddContactForm/>
    </SafeAreaView>
  )
}

export default AddContactPage

const styles = StyleSheet.create({})