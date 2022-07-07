import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import financeLogo from '../../assets/financeLogo.png'
const statusBarHight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





// import { Container } from './styles';

export function Register({ navigation }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [erro, setErro] = useState()




    function handlerRegister() {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               navigation.navigate('Home')
            }).catch((error) => {
                const erroCode = error.code;
                if (erroCode === 'auth/email-already-in-use') {
                    setErro('Email already in use')
                }
            })
          


    }
    return <KeyboardAvoidingView style={styles.container} behavior={'padding'}  >
        <View style={styles.content}>
            <Image source={financeLogo} style={styles.imageLogo} />
            <Text style={styles.title}>Finance Register</Text>
            <View>
                <View style={styles.inputGroup}>
                    <Feather name='user' size={28} style={styles.inputIcon} />
                    <TextInput placeholder='Email Address' style={styles.textInput} onChangeText={(name) => setName(name)} />
                </View>
                <View style={styles.inputGroup}>
                    <AntDesign name='mail' size={28} style={styles.inputIcon} />
                    <TextInput placeholder='Email Address' style={styles.textInput} onChangeText={(email) => setEmail(email)} />
                </View>
                <View style={styles.inputGroup}>
                    <MaterialCommunityIcons name='account-key-outline' size={34} style={styles.inputIcon} />
                    <TextInput placeholder='Password' style={styles.textInput} onChangeText={(password) => setPassword(password)} />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlerRegister}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.contentRegister}>
                <Text>{erro}</Text>
                <Text style={styles.register}>Ja possui conta? </Text>
                <TouchableOpacity onPress={handlerRegister}>
                    <Text style={styles.registerClick} onPress={() => navigation.navigate('Login')}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>
        <StatusBar style="dark" />
    </KeyboardAvoidingView>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        color: '#f05033'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    imageLogo: {
        width: 240,
        height: 240
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
        width: 350,
        maxHeight: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,

    },
    inputIcon: {
        marginRight: 13,
        color: '#419639',

    },
    textInput: {
        width: 340,
        borderBottomColor: '#419639',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingHorizontal: 22,
        paddingVertical: 6

    },
    button: {
        backgroundColor: '#419639',
        width: 280,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 26,
        borderRadius: 6
    },
    textButton: {
        fontSize: 19,
        color: '#fff',
    },
    contentRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    register: {
        marginTop: 10,
        marginRight: 8
    },

    registerClick: {
        marginTop: 10,
        color: 'green',


    }

})
