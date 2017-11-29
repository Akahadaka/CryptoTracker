import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Header style={styles.header}/>
      </View>
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
