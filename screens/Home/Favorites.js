import * as React from 'react';
import { View, Text } from 'react-native';

import { Container, Botao, Favorite } from './styles';

function Favorites({ navigation }) {
    return (
      <View style={{ paddingLeft: 20, flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, textAlign: 'left', marginTop: 20 }}>Favorites</Text>
        <Container>
        <Favorite>
        <Botao title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginTop: 10 }}>Ashley G.</Text>
        </Favorite>
        <Favorite>
        <Botao title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginTop: 10 }}>Ashley G.</Text>
        </Favorite>
        <Favorite>
        <Botao title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginTop: 10 }}>Ashley G.</Text>
        </Favorite>
        <Favorite>
        <Botao title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginTop: 10 }}>Ashley G.</Text>
        </Favorite>
        <Favorite>
        <Botao title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Text style={{ marginTop: 10 }}>Ashley G.</Text>
        </Favorite>
        </Container>
      </View>
    );
  }

export default Favorites;