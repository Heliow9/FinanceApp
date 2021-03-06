import React from 'react';
import { View as View, StyleSheet, StatusBar, Text, TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'
const statusBarHight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

// import { Container } from './styles';

const Header = ({ name }) => {
    return (
        <View style={styles.container}>
            <MotiView style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}
                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 300
                }}
            >
                <MotiText style={styles.userName}
                from={{
                    translateX:-300,
                }}
                animate={{
                    translateX: 0,

                }}
                transition={{
                    type: "timing",
                    delay: 300,
                    duration: 800
                }}
                >{name}</MotiText>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name='user' size={27} color='white' />
                </TouchableOpacity>
            </MotiView>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#419639',
        paddingTop: statusBarHight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,

    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,

    }

})


export default Header;