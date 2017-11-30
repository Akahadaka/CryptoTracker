import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import {
  Header,
  CryptoContainer
} from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.headerContainer}>
          <Header style={styles.header}/>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
