import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Lab1 from '../screens/lab1/Lab1';
import Lab2 from '../screens/lab2/Lab2';
const Drawer = createDrawerNavigator();

function headerTabNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
        <Drawer.Screen
            name='Lab1'
            component={Lab1}
        />
        <Drawer.Screen
            name='Lab2'
            component={Lab2}
        />
    </Drawer.Navigator>
  );
}

export default headerTabNavigator;