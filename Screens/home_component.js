import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const navigateCommission = () => {
    navigation.navigate('Commission');
  };
  
  const navigateEdit = () => {
    navigation.navigate('Add Commission');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button onPress={navigateCommission}>OPEN COMMISSION</Button>
        <Button onPress={navigateEdit}>OPEN SCREEN</Button>
      </Layout>
    </SafeAreaView>
  );
};