import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from './details_component';
import { CommissionScreen } from './comission_component';
import { EditCommissionScreen } from './addCommission_component';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={DetailsScreen}/>
    <Screen name='Note' component={CommissionScreen}/>
    <Screen name='Add Note' component={EditCommissionScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer headerMode='none'>
      <HomeNavigator/>
  </NavigationContainer>
);
