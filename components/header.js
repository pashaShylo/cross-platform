import {Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Wallet = () => {
    const insets = useSafeAreaInsets()

  return (
    <View
      style={{        
        backgroundColor: 'white',
        // paddingTop: insets.top,
        alignItems: 'center'
      }}>
      <Text style={{
        fontSize: 20
      }}>Лабораторна робота №1</Text>
      <Text style={{
        fontSize: 20,
        paddingBottom: 5
      }}>Виконав Шило Павло</Text>
    </View>
  );
};

export default Wallet;