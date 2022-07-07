import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MotiView, MotiText, AnimatePresence } from 'moti'
// import { Container } from './styles';

const Moviments = ({ data }) => {
    const [showValue, setShowValue] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)} >
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {showValue ? (
                    <AnimatePresence exitBeforeEnter>

                        <MotiText style={data.type === 1 ? styles.value : styles.expenses}
                            from={{
                                translateX: 100,
                            }}
                            animate={{
                                translateX: 0,
                            }}
                            transition={{
                                type: 'timing',
                                duration: 600
                            }}
                        >{data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}</MotiText>
                    </AnimatePresence>
                ) :
                    <AnimatePresence exitBeforeEnter>
                        (<View style={styles.skeleton} />)
                    </AnimatePresence>
                }
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#dadada'

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    }
    ,
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,

    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8

    }

})//

export default Moviments;