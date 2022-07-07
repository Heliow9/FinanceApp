import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/balance';
import Header from '../../components/Header/indecx';
import Moviments from '../../components/Moviments';

const list = [
    {
        id: 1,
        label: 'boleto conta luz',
        value: '301,52',
        date: '27/06/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'pix amaral',
        value: '2500.00',
        date: '03/06/2022',
        type: 1 // despesas
    },
    {
        id: 3,
        label: 'salario',
        value: '7.200,52',
        date: '02/06/2022',
        type: 1 // despesas
    },
]


export function Home() {
    return (
        <View style={styles.container}>
            <Header name="Helio Livramento" />
            <Balance saldo="9.250,00" gastos="1.250,00" />
            <Actions />
            <Text style={styles.title}>Ultimas Movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item => String(item.id))}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, value }) => <Moviments data={item} />}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',

    },
    title: {
        fontSize: 18,
        margin: 14,
        fontWeight: 'bold',

    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});
