import { 
    ActivityIndicator,
    StyleSheet, 
    TextInput, 
    Platform, 
    ScrollView, 
    Pressable, 
    KeyboardAvoidingView,
    Text, 
    View 
} from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Colors } from '../../constants/Colors';
import { useState } from 'react'
import * as yup from 'yup';
import React from 'react'


const schema = yup.object().shape({  
    name: yup
        .string()
        .min(3, 'Username must be at least 3 characters')        
        .max(64, 'Max 64 characters')
        .required('Name is required'),
    phone: yup
        .string()
        .min(3, 'Min 3 characters')
        .max(32, 'Max 32 characters')
        .required('Phone is required'),
});


interface FormData {
    name: string
    phone: string
}



const AddContactForm = () => {

    const [isLoading, setLoading] = useState(false)    
    
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema as any),
        defaultValues: {            
            name: '',
            phone: ''
        },
    });
    
    const onSubmit = async (form_data: FormData) => {
        setLoading(true)

        console.log(form_data)

        setLoading(false)
    };

  return (
    <KeyboardAvoidingView style={{width: '100%', gap: 20}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={{width: '100%'}} >
            {/* Name */}
            <Text style={styles.inputHeaderText}>Name</Text>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    autoComplete='name'
                    autoCapitalize='none'                    
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}/>
                )}
            />
            {errors.name && (<Text style={styles.error}>{errors.name.message}</Text>)}
            {/* Email */}
            <Text style={styles.inputHeaderText}>Phone</Text>
            <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}                    
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}/>
                )}
            />
            {errors.phone && (<Text style={styles.error}>{errors.phone.message}</Text>)}
           
            {/* Login Button */}
            <Pressable onPress={handleSubmit(onSubmit)} style={styles.formButton} >
                {
                    isLoading ? 
                    <ActivityIndicator size={32} color={Colors.white} /> :
                    <Text style={styles.formButtonText} >Save</Text>
                }
            </Pressable>

        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddContactForm

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.gray1,
        borderRadius: 4,
        height: 50,
        fontSize: 18,
        paddingHorizontal: 10,
        color: Colors.white,
        fontFamily: "LeagueSpartan_400Regular",
        marginBottom: 10
    },
    inputHeaderText: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: "LeagueSpartan_400Regular",
        marginBottom: 10
    },
    error: {
        color: Colors.orange,
        alignSelf: "flex-start",
        fontSize: 14,
        fontFamily: "LeagueSpartan_200ExtraLight"
    },
    formButton: {
        width: '100%',
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 4,
        backgroundColor: Colors.orange
    },
    formButtonText: {
        color: Colors.white,
        fontSize: 22,
        fontFamily: "LeagueSpartan_400Regular",
    }
})