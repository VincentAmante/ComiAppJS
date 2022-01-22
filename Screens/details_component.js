import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, 
  Icon, 
  Layout, 
  Text, 
  TopNavigation, 
  TopNavigationAction, 
  Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { setData, getData, getIdList, storeArray, getArray} from '../assets/Scripts/storageManager';
import {CommissionCard } from '../assets/Components/CommissionCard';

const getIDs = async () => {
  let idListData = [];

  // For creating new value
  let idList = [];
  idListData = await getIdList();
  idList = [...idListData];
  return;
}
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const SampleIcon = (props) => (
    <Icon name='smiling-face-outline' {...props} />
    );

const randomValue = 'yo';
let newArr = [0];

export const DetailsScreen = ({ navigation }) => {
  const [theArray, setTheArray] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const switchForceRender = () => {
    setForceRender(forceRender + 1);
  };

  useEffect(async () => {
    setSelectedId(global.selectedId);
    
    let idList = [];
    // For creating new value
    
    idList = await getIdList();
    if (theArray == []){
      setTheArray([...idList, `Entry ${theArray.length}`]);
    }
    if (forceRender == 0 || forceRender == 1){
      setForceRender(forceRender + 1);
    }

    newArr = [...idList];
    console.log(newArr);
  }, [theArray, forceRender]);


  const [selectedId, setSelectedId] = useState(0);

    const changeId = (newId) => {
      global.selectedId = newId;
      setSelectedId(newId);
    }

    const navigateBack = () => {
    navigation.goBack();
  };

  const navigateCommission = () => {
    navigation.navigate('Commission')
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Select Ids</Text>
        <Text>{selectedId}</Text>
        {
        newArr.map(element => {
          console.log("attempting to make new buttons");
          console.log(element);
          return <CommissionCard key={element} onPressExtra={navigateCommission} id={element}/>
        })}
      </Layout>
    </SafeAreaView>
  );
};