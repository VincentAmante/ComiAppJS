import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Button, Icon } from '@ui-kitten/components';
import { AppNavigator } from './Screens/navigation_component';
import 'react-native-get-random-values'

// Id of currently selected comission
global.selectedId = 'amante';
global.idList;

export default () => (
  <>
  <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);