import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AntDesign, } from '@expo/vector-icons'

// import { Container } from './styles';

const Actions = () => {
    return <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.area}>
                <AntDesign name='addfolder' size={26} color="#000000" />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.area}>
                <AntDesign name='tagso' size={26} color="#000000" />
            </View>
            <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.area}>
                <AntDesign name='creditcard' size={26} color="#000000" />
            </View>
            <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.area}>
                <AntDesign name='barcode' size={26} color="#000000" />
            </View>
            <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.area}>
                <AntDesign name='setting' size={26} color="#000000" />
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>

    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingBottom: 18,
        paddingStart: 14
    },
    actionButton: {
        alignItems: "center",
        marginRight: 32
    },
    area: {
        backgroundColor: '#ecf0f1',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60 / 2
    },
    labelButton: {
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Actions;