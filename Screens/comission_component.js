import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Divider, 
  Icon, 
  Layout, 
  Text, 
  TopNavigation, 
  TopNavigationAction, 
  Card,
  Button } from '@ui-kitten/components';
import { setData, getData } from '../assets/Scripts/storageManager';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const SampleIcon = (props) => (
  <Icon name='smiling-face-outline' {...props} />
  );

export const CommissionScreen = ({ navigation }) => {

  const [commissionTitle, setCommissionTitle] = useState(" ");
  const [commissioner, setCommissioner] = useState(" ");
  const [dueDate, setDueDate] = useState(" ");
  const [details, setDetails] = useState(" ");

  // Acquires selected commission's details on load
    useEffect(async () => {
      setCommissionTitle(await getData(global.selectedId + '_comissionTitle'));
      setCommissioner(await getData(global.selectedId + '_comissioner'));
      setDueDate(await getData(global.selectedId + '_dueDate'));
      setDetails(await getData(global.selectedId + '_details'));
    });

    const [sample, setSample] = useState("Sample");
    const handleButton = async () => {
     setData(global.selectedId + '_comissionTitle', global.selectedId + '_comissionTitle');
     setData(global.selectedId + '_comissioner', global.selectedId + '_comissioner');
     setData(global.selectedId + '_dueDate', global.selectedId + '_dueDate');
     setData(global.selectedId + '_details', global.selectedId + '_details');
    }
    
    const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={styles.screen}>
        <Card>
          <Text category='h1'>{commissionTitle}</Text>
          <Text category='s1'>{commissioner}</Text>
          <Text category='s1'>Comission ID</Text>
        </Card>
        <Card style={styles.card}>
          <Text>Due in..</Text>
          <Text category='h1'>{dueDate}</Text>
          <Text category='s1'>Days</Text>
        </Card>
        <Card>
          <Text category='h2'>Details</Text>
          <Divider/>
          <Text>{details}</Text>
        </Card>
        <Button accessoryLeft={SampleIcon} onPress={handleButton}>Set States</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  card:{
    margin:20,
    borderColor:'#fff',
    borderRadius:10,
  }
})