import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BANCRIPT" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>)
  }
}
