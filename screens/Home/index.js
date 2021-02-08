import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { Container, Botao, Favorite } from './styles';

import Balance from './Balance';
import Favorites from './Favorites';
import Payment from './Payments';
import Transfer from './Transfer';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ backgroundColor: 'cdcdcd', flex: 1, justifyContent: 'center' }}>
       <Balance />
       <Payment />
       <Transfer />
      </View>
    );
  }

export default DetailsScreen;