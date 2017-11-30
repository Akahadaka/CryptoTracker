import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { images } from './../Utils/CoinIcons'

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: image[symbol] }}
      />
      <Text>{symbol}</Text>
      <Text>{price_usd} <Text style={styles.bold}>$</Text></Text>
      <Text>Change past 24 hours: {percent_change_24h}</Text>
      <Text>Change past 7 days: {percent_change_7d}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: 'bold'
  }
});


export default CoinCard;
