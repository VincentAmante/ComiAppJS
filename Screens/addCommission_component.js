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
  Button, 
  Input,
  Datepicker} from '@ui-kitten/components';
import { setData, getData, getIdList, storeArray, getArray} from '../assets/Scripts/storageManager';
import { v4 as uuidv4 } from 'uuid';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const SampleIcon = (props) => (
  <Icon name='smiling-face-outline' {...props} />
  );

export const EditCommissionScreen = ({ navigation }) => {

  const [commissionTitle, setCommissionTitle] = useState(" ");
  const [commissioner, setCommissioner] = useState(" ");
  const [dueDate, setDueDate] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [selectedId, setSelectedId] = useState(" ");

    const [sample, setSample] = useState("Sample");
    const createNew = async () => {
      let idList = [];
      // To make asynced array modifiable
      let newArr = [];

      idList = await getIdList();
      console.log(idList);

      // Creates unique id for commission
      const newId = uuidv4();
      global.selectedId = newId;
      setSelectedId(newId);

      // Adds asynced array to new Array
      newArr = [...idList];
      newArr.push(newId);

      // Stores new array to 
      storeArray(newArr);
      console.log(newArr);
      setValues();
      return;
    }

    const setValues = async () => {
     setData(global.selectedId + '_comissionTitle', commissionTitle);
     setData(global.selectedId + '_comissioner', commissioner);
     setData(global.selectedId + '_dueDate', global.selectedId + '_dueDate');
     setData(global.selectedId + '_details', details);
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
            <Input onChangeText={setCommissionTitle}></Input>
            <Input onChangeText={setCommissioner}></Input>
        </Card>
        <Card style={styles.card}>
            <Datepicker></Datepicker>
        </Card>
        <Card>
          <Text category='h2'>Details</Text>
          <Divider/>
          <Input onChangeText={setDetails}></Input>
        </Card>
        <Button accessoryLeft={SampleIcon} onPress={createNew}>Create New</Button>
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