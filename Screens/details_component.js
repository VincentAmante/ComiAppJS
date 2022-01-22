import React from 'react';
import { useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, 
  Icon, 
  Layout, 
  Text, 
  TopNavigation, 
  TopNavigationAction, 
  Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {getIdList} from '../assets/Scripts/storageManager';
import {CommissionCard } from '../assets/Components/CommissionCard';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

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
  const AddIcon = (props) => (
    <Icon name ='plus-square-outline' {...props} />
  )

let newArr = [];

export const DetailsScreen = ({ navigation }) => {
  const [forceRender, setForceRender] = useState(0);
  const [theArray, setTheArray] = useState([]);

  const switchForceRender = () => {
    setForceRender(forceRender + 1);
  };

  useEffect(async () => {
    console.log("START OF USE EFFECT");
    setSelectedId(global.selectedId);
    setTheArray([])
    // id List
    let idList = [];
    idList = await getIdList();
    
    if (forceRender < 2){
      setForceRender(forceRender + 1);
    }
    
  setTheArray([...idList]);
    // For creating new values
    // Forces a re-render
    console.log(newArr);

    newArr =[...idList];
    console.log("END OF USE EFFECT");
  }, [forceRender]);
  
  useFocusEffect(
    React.useCallback(() => {
      setForceRender(1)
    }, [])
  );
  

  const [selectedId, setSelectedId] = useState(0);

    const changeId = (newId) => {
      global.selectedId = newId;
      setSelectedId(newId);
    }

    const navigateBack = () => {
    navigation.goBack();
  };

  const navigateCommission = (value) => {
    
    setForceRender(-10)
    global.selectedId = value;
    navigation.navigate('Note')
  }

  const navigateEdit = () => {
    navigation.navigate('Add Note');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Divider/>
      <Layout style={styles.view}>
        <ScrollView>

        {
        theArray.map(element => {
          return <CommissionCard key={element} onPressExtra={() => navigateCommission(element)} id={element}/>
        })}
        </ScrollView>
  
        <Button accessoryLeft={AddIcon} appearance='ghost' status='success' onPress={navigateEdit}>Add New Note</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexGrow:1,
    justifyContent:'center',
  },
  view:{
    flex:1,
    justifyContent:'center',
    padding:20,
  }
})