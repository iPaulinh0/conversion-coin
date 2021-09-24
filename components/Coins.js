import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function Coins() {

    const [coinValue, setCoinValue] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        const fetchData = async () => {
            const res = await axios('https://economia.awesomeapi.com.br/last/EUR-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CAD-BRL,CHF-BRL,CNY-BRL,ARS-BRL,TRY-BRL')
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

        // Requisita o valor na API, trasnforma em array, converte o valor em float e formata para 2 casas decimais

        const euroShowCoin = [coinValue.EURBRL.ask]
        const convertedEuroCoin = parseFloat(euroShowCoin).toFixed(2)

        const libraShowCoin = [coinValue.GBPBRL.ask]
        const convertedLibraCoin = parseFloat(libraShowCoin).toFixed(2)

        const japaneseShowCoin = [coinValue.JPYBRL.ask]
        const convertedJapaneseCoin = parseFloat(japaneseShowCoin).toFixed(2)

        const australianShowCoin = [coinValue.AUDBRL.ask]
        const convertedAustralianCoin = parseFloat(australianShowCoin).toFixed(2)

        const canadianShowCoin = [coinValue.CADBRL.ask]
        const convertedCanadianCoin = parseFloat(canadianShowCoin).toFixed(2)

        const switzerlandShowCoin = [coinValue.CHFBRL.ask]
        const convertedSwitzerlandCoin = parseFloat(switzerlandShowCoin).toFixed(2)

        const chineseShowCoin = [coinValue.CNYBRL.ask]
        const convertedChineseCoin = parseFloat(chineseShowCoin).toFixed(2)

        const argentinaShowCoin = [coinValue.ARSBRL.ask]
        const convertedArgentinaCoin = parseFloat(argentinaShowCoin).toFixed(2)

        const turkeyShowCoin = [coinValue.TRYBRL.ask]
        const convertedTurkeyCoin = parseFloat(turkeyShowCoin).toFixed(2)

        return(
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/european-union.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.EURBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.BRflag}/>
                    <Text style={styles.countryCoin}>{coinValue.EURBRL.codein} =</Text>
                    <Text style={styles.coin1}>€ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedEuroCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/united-kingdom.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.GBPBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag1}/>
                    <Text style={styles.countryCoin}>{coinValue.GBPBRL.codein} =</Text>
                    <Text style={styles.coin1}>£ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedLibraCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/japan.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.JPYBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.BRflag}/>
                    <Text style={styles.countryCoin}>{coinValue.JPYBRL.codein} =</Text>
                    <Text style={styles.coin1}>¥ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedJapaneseCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/australia.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.AUDBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag2}/>
                    <Text style={styles.countryCoin}>{coinValue.AUDBRL.codein} =</Text>
                    <Text style={styles.coin1}>$ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedAustralianCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/canada.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.CADBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag3}/>
                    <Text style={styles.countryCoin}>{coinValue.CADBRL.codein} =</Text>
                    <Text style={styles.coin1}>$ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedCanadianCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/switzerland.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.CHFBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag4}/>
                    <Text style={styles.countryCoin}>{coinValue.CHFBRL.codein} =</Text>
                    <Text style={styles.coin1}>$ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedSwitzerlandCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/china.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.CNYBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag5}/>
                    <Text style={styles.countryCoin}>{coinValue.CNYBRL.codein} =</Text>
                    <Text style={styles.coin1}>¥ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedChineseCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/argentina.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.ARSBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag6}/>
                    <Text style={styles.countryCoin}>{coinValue.ARSBRL.codein} =</Text>
                    <Text style={styles.coin1}>$ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedArgentinaCoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineContent}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('./flags/turkey.png')} style={styles.flag}/>
                    <Text style={styles.countryCoin}>{coinValue.TRYBRL.code}</Text>
                    <Text style={styles.to}>to</Text>
                    <Image source={require('./flags/brasil.png')} style={styles.scruffyFlag7}/>
                    <Text style={styles.countryCoin}>{coinValue.TRYBRL.codein} =</Text>
                    <Text style={styles.coin1}>¥ 1.00</Text>
                    <Text style={styles.coin2}>R$ {convertedTurkeyCoin}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 18
    },
    countryCoin: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    flag: {
        width: 30,
        height: 30,

    },
    BRflag: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    scruffyFlag1: {
        width: 30,
        height: 30,
        marginLeft: 7,
    },
    scruffyFlag2: {
        width: 30,
        height: 30,
        marginLeft: 6,
    },
    scruffyFlag3: {
        width: 30,
        height: 30,
        marginLeft: 6,
    },
    scruffyFlag4: {
        width: 30,
        height: 30,
        marginLeft: 8,
    },
    scruffyFlag5: {
        width: 30,
        height: 30,
        marginLeft: 6,
    },
    scruffyFlag6: {
        width: 30,
        height: 30,
        marginLeft: 7,
    },
    scruffyFlag7: {
        width: 30,
        height: 30,
        marginLeft: 9,
    },


    to: {
        marginLeft: 5,

    },
    coin1: {
        fontSize: 16,
        fontWeight: '700',
        marginRight: 15,
    },

    coin2: {
        fontSize: 16,
        fontWeight: '700'
    },
    button: {
        flexDirection: 'row'
    },

    waitingAPI: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})