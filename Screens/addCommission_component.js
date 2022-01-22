import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Divider, 
  Icon, 
  Layout,
  TopNavigation, 
  TopNavigationAction,
  Button, 
  Input,
  BottomNavigation,
} from '@ui-kitten/components';
import { setData, getData, getIdList, storeArray, getArray} from '../assets/Scripts/storageManager';
import { v4 as uuidv4 } from 'uuid';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

  const AddIcon = (props) => (
    <Icon name ='plus-square-outline' {...props} />
  );
  const NoteIcon = (props) => (
    <Icon name ='file-outline' {...props} />
  );
  const TitleIcon = (props) => (
    <Icon name ='inbox-outline' {...props} />
  );


export const EditCommissionScreen = ({ navigation }) => {

  const [commissionTitle, setCommissionTitle] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [forceRender, setForceRender] = useState(-2);
  const [selectedId, setSelectedId] = useState(0);

    // Acquires selected commission's details on load
    useEffect(async () => {
      setCommissionTitle(await getData(global.selectedId + '_comissionTitle'));
      setDetails(await getData(global.selectedId + '_details'));

      if (forceRender < 2){
        setForceRender(forceRender + 1);
      }

    }, [forceRender]);

    // Adds new Commissions
    const createNew = async () => {
      let idList = [];
      // To make asynced array modifiable
      let newArr = [];

      idList = await getIdList();
      console.log(idList);

      // Creates unique id for notes
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
      navigation.navigate('Home')
    }

    const setValues = async () => {
     setData(global.selectedId + '_comissionTitle', commissionTitle);
     setData(global.selectedId + '_details', details);
    }
    
    const navigateBack = () => {
      navigation.navigate('Home')
  };

  // Return
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={styles.view}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={styles.screen}>
        <Input style={styles.input} accessoryRight={TitleIcon} defaultValue={commissionTitle} placeholder="Title" onChangeText={setCommissionTitle}></Input>
        <Input style={styles.input}accessoryRight={NoteIcon} defaultValue={details} multiline={true} style={styles.note} placeholder="Note" onChangeText={setDetails}></Input>
        <Button appearance='outline' status='success' accessoryLeft={AddIcon} onPress={createNew}>Create New</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view:{
    flex:1,
    flexGrow:1,
  },
  screen:{
    flex: 1, 
    flexGrow:1,
    justifyContent:'center', 
    alignItems: 'center', 
    padding: 20,
  },
  input:{
    marginVertical:20,
  },
  note:{
    minHeight:350,
  }
})