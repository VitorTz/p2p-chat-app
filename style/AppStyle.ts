import { StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import { wp } from '@/helpers/util'


export const AppStyle = StyleSheet.create({
    safeArea: {
        flex: 1,
        gap: 10,
        backgroundColor: Colors.background,
        padding: wp(5)
    },
    textRegular: {        
        color: Colors.white,
        fontSize: 16
    },
    textButton: {
        color: Colors.white,
        fontSize: 20
    },
    textRegularLarge: {
        color: Colors.white,
        fontSize: 24
    },
    textHeader: {
        color: Colors.orange,
        fontSize: 26
    },
    errorMsg: {
        color: Colors.red
    }
})