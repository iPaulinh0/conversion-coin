import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { TextInputMask } from 'react-native-masked-text'
import axios from 'axios'

export default function Dolar() {

    const [coinValue, setCoinValue] = useState({});
    const [loading, setLoading] = useState(false)
    
    // const moneyRef = useRef(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios('https://economia.awesomeapi.com.br/last/USD-BRL')
            setCoinValue(res.data)
            setLoading(true)
        }
        fetchData();
    }, []) 

    
    if(loading === false) {
        return(
            <View style={styles.waitingAPI}>
                <ActivityIndicator size='large'/>
                <Text>Carregando dados da API</Text>
            </View>
        )
    }else{
        
        const showCoin = [coinValue.USDBRL.ask] // Pega o valor da API e salva num array
        const convertedShowCoin = parseFloat(showCoin).toFixed(2) // Transforma o valor em Float e corrige para exibir apenas 2 casas depois da virgula
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
                <View style={styles.headerCard}>
                    <View style={styles.coinInfo}>
                        <Image source={require('./flags/united-states.png')} style={styles.flag}/>
                        <Text style={styles.countryCoin}>{coinValue.USDBRL.code}</Text>
                        <Text style={styles.to}>to</Text>
                        <Image source={require('./flags/brasil.png')} style={styles.flag}/>
                        <Text style={styles.countryCoin}>{coinValue.USDBRL.codein}</Text>
                    </View>
                </View>

                <View style={styles.cardContent}>
                    <Text style={styles.currentQuote}>Cotação Atual</Text>
                    <View style={styles.values}>
                        <Text style={styles.coin1}>US$ 1.00</Text>
                        <Text style={styles.coin2}>R$ {convertedShowCoin}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )}
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    card: {
        backgroundColor: '#EEEEEE',
        width: '85%',
        height: '50%',
        borderRadius: 25,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 10,
        marginBottom: -65,
        marginTop: -60
    },

    cardContent: {
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    currentQuote: {
        fontSize: 23,
        fontWeight: '500',
    },

    values: {
        display: 'flex',
        flexDirection: 'row',
    }, 
    
    coin1: {
        fontSize: 23,
        fontWeight: '700',
        marginRight: 20,
        marginBottom: 30
    },
    
    coin2: {
        fontSize: 23,
        fontWeight: '700'
    },

    operator: {
        display: 'flex',
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 23,
        marginRight: 25
    },

    calcView: {
        justifyContent: 'center'
    },
    inputs: {
        flexDirection: 'row'
    },
    realValue: {
        fontSize: 18,
        marginRight: 10
    },
    dolarValue: {
        fontSize: 18,
        marginRight: 10
    },
    calcButton: {
        backgroundColor: '#6400B3',
        width: 140,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    textButton: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600'
    },
    // Estilos do Header Card
    headerCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25, 
        width: '100%',
        height: '35%',
    },
    
    coinInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },  

    countryCoin: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },

    flag: {
        width: 30,
        height: 30,
        marginLeft: 20
    },

    to: {
        marginLeft: 20,
    },

    changeIconContainer: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    changeIcon: {
        width: 20,
        height: 20,
        marginLeft: 100
    },
    waitingAPI: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  