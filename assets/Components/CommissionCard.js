import React from "react";
import { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, 
  Icon, 
  Layout, 
  Text, 
  Card,
  Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { getData } from '../Scripts/storageManager';
import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

export const CommissionCard = (props) => {
  const [id, setId] = useState(0);
  const [commissionTitle, setCommissionTitle] = useState();
  const [commissioner, setCommissioner] = useState();
  const [forceRender, setForceRender] =  useState(0);
  const componentMounted = useRef(true);
  const handleOnPress = () => {
    if (props.onPressExtra != null) { props.onPressExtra()};
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
    <Card>
      <Text category='h1'>{commissionTitle}</Text>
      <Divider></Divider>
      <Text category='h2'>{commissioner}</Text>
    </Card>
  )
}