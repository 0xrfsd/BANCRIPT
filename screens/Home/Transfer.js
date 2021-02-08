import * as React from 'react';
import { View, Text } from 'react-native';

import { Container, Click, Payment, Linha } from './styles';

function Favorites({ navigation }) {
    return (
      <View style={{ paddingLeft: 20, flex: 1, justifyContent: 'center' }}>
        <Linha>
        <Text style={{ marginBottom: 15, fontSize: 20, textAlign: 'left', marginTop: 20 }}>Money Transfer</Text>
        <Text style={{ marginRight: 10, marginLeft: 'auto', fontSize: 20, textAlign: 'left', marginTop: 20 }}>All</Text>
        </Linha>
        <Container>
        <Payment>
        <Click title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginBottom: 0, marginLeft: 10, marginTop: 10 }}>Mobile Payment</Text>
        </Payment>
        <Payment>
        <Click title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginBottom: 0, marginLeft: 10, marginTop: 10 }}>Mobile Payment</Text>
        </Payment>
        <Payment>
        <Click title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginBottom: 0, marginLeft: 10, marginTop: 10 }}>Mobile Payment</Text>
        </Payment>
        <Payment>
        <Click title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginBottom: 0, marginLeft: 10, marginTop: 10 }}>Mobile Payment</Text>
        </Payment>
        <Payment>
        <Click title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginBottom: 0, marginLeft: 10, marginTop: 10 }}>Mobile Payment</Text>
        </Payment>
        </Container>
      </View>
    );
  }

export default Favorites;