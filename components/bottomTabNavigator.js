import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import Task1 from '../screens/Task1';
import Task2 from '../screens/Task2';
import Task3 from '../screens/Task3';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color}) => {
          let iconName, title;
          if (route.name === ROUTES.TASK1) {
            iconName = 'circle';
            title = 'Task1'
          } else if (route.name === ROUTES.TASK2) {
            iconName = 'triangle';
            title = 'Task2'
          } else if (route.name === ROUTES.TASK3) {
            iconName = 'square';
            title = 'Task3'
          } 
          return (
            <View style={{alignItems:'center'}}>
                <Icon name={iconName} size={22} color={color}/>
                <Text style={{paddingTop:5, color: color}}>{title}</Text>
            </View>
          )
          
        },
      })}>
      <Tab.Screen
        name={ROUTES.TASK1}
        component={Task1}
      />
      <Tab.Screen
        name={ROUTES.TASK2}
        component={Task2}
      />
      <Tab.Screen
        name={ROUTES.TASK3}
        component={Task3}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.white,
    height: 92,
  },
});