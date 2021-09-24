import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Dolar from './components/Dolar';
import Coins from './components/Coins';
import DolarPage from './components/Pages/DolarPage';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Dolar/>
      <View style={styles.separator}>
        <Text style={styles.text}>OUTRAS MOEDAS</Text>
      </View>
      <Coins />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  separator: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#BFBFBF',
    padding: 2
  },
  text: {
    fontWeight: '700',
    color: '#8B8B8B'
  },
});
