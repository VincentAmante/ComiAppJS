import React from "react";
import { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Divider, 
  Icon, 
  Layout, 
  Text, 
  Card,
  Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { getData } from '../Scripts/storageManager';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export const CommissionCard = (props) => {
  const [id, setId] = useState(0);
  const [commissionTitle, setCommissionTitle] = useState();
  const [commissioner, setCommissioner] = useState();
  const [forceRender, setForceRender] =  useState(0);
  const componentMounted = useRef(true);
  const handleOnPress = () => {
    if (props.onPressExtra != null) { props.onPressExtra()};
    global.selectedId = id;
  }

  useEffect(async () => {
    setId(props.id);
    setCommissionTitle(await getData(id + '_comissionTitle'));
    setCommissioner(await getData(id + '_comissioner'));

    if (componentMounted.current){
      if (forceRender <= 2){
        setForceRender(forceRender + 1);
      }
    }
    return () => {
      componentMounted.current = false;
    }
  }, [forceRender]);
  

  return (
    <Card onPress={handleOnPress} style={styles.card}>
      <Text category='h1' style={styles.cardText}>{commissionTitle}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#131C37',
    borderColor:'#4484FF',
    margin:10,
    borderRadius:10,
    paddingHorizontal:5,
  },

  cardText:{
    color:'#fff'
  }
})