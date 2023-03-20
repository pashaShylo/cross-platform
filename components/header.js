import {Text, View} from 'react-native';
import React from 'react';

const Header = ({labNum}) => {
  return (
    <View
      style={{        
        backgroundColor: 'white',
        // paddingTop: insets.top,
        alignItems: 'center'
      }}>
      <Text style={{
        fontSize: 20
      }}>Лабораторна робота №{labNum}</Text>
      <Text style={{
        fontSize: 20,
        paddingBottom: 5
      }}>Виконав Шило Павло</Text>
    </View>
  );
};

export default Header;