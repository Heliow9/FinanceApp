import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import financeLogo from '../../assets/financeLogo.png'
const statusBarHight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
import { getDatabase, ref, onValue, set } from 'firebase/database';



// import { Container } from './styles';

export function Login() {
    function handleCad() {
        const db = getDatabase();
        const reference = ref(db, 'users/' + 32);
        set(reference, {
            highscore: 10,
        });
    }
    return <SafeAreaView style={styles.container} >
        <View style={styles.content}>
            <Image source={financeLogo} style={styles.imageLogo} />
            <Text style={styles.title}>Finance APP</Text>
            <View>
                <View style={styles.inputGroup}>
                    <Feather name='user' size={28} style={styles.inputIcon} />
                    <TextInput placeholder='Email Address' style={styles.textInput} />
                </View>
                <View style={styles.inputGroup}>
                    <MaterialCommunityIcons name='account-key-outline' size={34} style={styles.inputIcon} />
                    <TextInput placeholder='Password' style={styles.textInput} />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleCad}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.contentRegister}>
                <Text style={styles.register}>Cadastrar</Text>
                <TouchableOpacity>
                    <Text style={styles.registerClick}>clique aqui</Text>
                </TouchableOpacity>

            </View>
        </View>
        <StatusBar style="dark" />
    </SafeAreaView>

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
        flexDirection: 'row'
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
