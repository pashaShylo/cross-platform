import {StyleSheet, Text, View, TextInput, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import _ from 'lodash'

const Task2 = () => {
  const [firstInput, setFirstInput] = useState()
  const [res, setRes] = useState([])

  const calculate = () => {
    const arr = []
    for(let i = 0; i < firstInput; i++){
      let arr2 = []
      for(let j = 0; j < firstInput; j++){
        arr2.push(parseInt(Math.random() * (10 - (-10)) + (-10)))
      }
      arr.push(arr2)
      arr2 = []
    }
    setRes(arr)
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.bgColor,
      }}>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} placeholder='Input number' onChangeText={text => setFirstInput(parseInt(text))}/>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={calculate}>
          <Text style={styles.text}>Click</Text>
        </Pressable>
        <Text style={styles.res}>{res.map((elem)=>{
          return <View style={styles.text}>{elem.map((elem1)=>{
            if(elem1 % 2 === 0 && elem1 > 0){
              return <View style={{backgroundColor: 'green', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}><Text style={styles.elem}>{elem1}</Text></View>
            }else {
              return <View style={{backgroundColor: 'red',width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}><Text style={styles.elem}>{elem1}</Text></View>
            }  
          })}</View>
        })}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 130
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  },
  elem: {
    letterSpacing: 1,
    fontSize: 20
  }
});

export default Task2;