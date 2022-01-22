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
import { setData, getData, removeValue, getIdList, storeArray } from '../assets/Scripts/storageManager';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const DeleteIcon = (props) => (
  <Icon name='trash-outline' {...props} />
  );

const EditIcon = (props) => (
  <Icon name='edit-outline' {...props} />
  );
  

export const CommissionScreen = ({ navigation }) => {

  const [commissionTitle, setCommissionTitle] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [forceRender, setForceRender] = useState(0);

  // Acquires selected commission's details on load
    useEffect(async () => {
      setCommissionTitle(await getData(global.selectedId + '_comissionTitle'));
      setDetails(await getData(global.selectedId + '_details'));

      if (forceRender < 2){
        setForceRender(forceRender + 1);
      }
    }, [forceRender]);

    const [sample, setSample] = useState("Sample");
    const handleButton = async () => {
      let idList = [];
      // To make asynced array modifiable
      let newArr = [];

      idList = await getIdList();
      newArr = [...idList];

      console.log("Attempting to delete");
     removeValue(global.selectedId + '_comissionTitle');
     removeValue(global.selectedId + '_comissioner');

     setForceRender(0);
     for (let i = 0; i < newArr.length; i++){
       if (newArr[i] === global.selectedId){
         newArr.splice(i, 1);
         console.log("removed: " + global.selectedId);
         global.selectedId = ' ';
       }
     }

     console.log(newArr);
     navigateBack();
     storeArray(newArr);
    }
    
    const navigateBack = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={styles.screen}>
        <Text category='h1'>{commissionTitle}</Text>
        <Card style={styles.note}>
          <Text>{details}</Text>
        </Card>
        <Layout style={styles.buttons}>
        <Button style={styles.button} status='danger'accessoryLeft={DeleteIcon} onPress={handleButton}>Delete</Button>
        </Layout>
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
  },
  note:{
    minWidth:300,
    minHeight:350,
    padding:10,
    borderRadius:20,
    marginVertical:20,
  },
  buttons:{
    flexDirection:'row',
    alignContent:'space-between'
  },
  button:{
    marginHorizontal:10,
  }
})