import * as React from 'react';
import { View, Text } from 'react-native';

import { Container, Click, Botao, Linha, Payment } from './styles';

function Balance({ navigation }) {
  return (
    <View style={{ paddingTop: 20, paddingLeft: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
    <Text style={{ fontSize: 30, marginBottom: 30 }}>R$835,35</Text>

    <Linha>
    <Botao>
    <Text style={{ fontSize: 12 }}>Send</Text>
    </Botao>
    <Botao>
    <Text style={{ fontSize: 12 }}>Request</Text>
    </Botao>
    <Botao>
    <Text style={{ fontSize: 12 }}>Payments</Text>
    </Botao>
    </Linha>
    </View>
  );
}

export default Balance;