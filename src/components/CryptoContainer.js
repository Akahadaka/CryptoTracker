import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Spinner } from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentDidlMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin, index) =>
      <Text>Card</Text>
    );
    return crypto.data.map((coin, index) =>
      <CoinCard
        key={index}
        coin_name={coin.coin_name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    );
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <Text>Loading...</Text>
      );

      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation="fade"
          />
        </View>
      );

    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 5
  }
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
