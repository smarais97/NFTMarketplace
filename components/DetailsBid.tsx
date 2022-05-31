import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { EthPrice } from './SubInfo';
import {
  Colors, Fonts, Sizes
} from '../constants';
import { Bid } from '../interfaces/data';
import dayjs from 'dayjs';

export default function DetailsBid({ bid }: { bid: Bid }) {
  return (
    <View style={styles.bidContainer}>
      <Image source={bid.image} resizeMode="contain" style={{
        width: 48,
        height: 48,
      }} />
      <View>
        <Text style={styles.bidPlacedBy}>
          Bid Placed by {bid.name}
        </Text>
        <Text style={styles.bidDate}>
          {dayjs(bid.date).toString()}
        </Text>
      </View>
      <EthPrice price={bid.price.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  bidContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Sizes.base,
    paddingHorizontal: Sizes.base * 2,
  },
  bidPlacedBy: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.small,
    color: Colors.primary,
  },
  bidDate: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.small - 2,
    color: Colors.secondary,
    marginTop: 3,
  }
})
