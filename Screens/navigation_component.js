import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './home_component';
import { DetailsScreen } from './details_component';
import { CommissionScreen } from './comission_component';
import { EditCommissionScreen } from './addCommission_component';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
    <Screen name='Commission' component={CommissionScreen}/>
    <Screen name='Add Commission' component={EditCommissionScreen}/>
  </Navigator>
);


export const AppNavigator = () => (
  <NavigationContainer headerMode='none'>
      <HomeNavigator/>
  </NavigationContainer>
);
