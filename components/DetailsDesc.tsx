import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { EthPrice, NFTTitle } from './SubInfo';
import {
  Colors, Fonts, Sizes
} from '../constants';

export default function DetailsDesc({ data }: { data: any; }) {
  const [text, setText] = useState<string>(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState<Boolean>(false);

  return (
    <>
      <View style={styles.titleContainer}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={Sizes.extraLarge}
          subTitleSize={Sizes.font} />

        <EthPrice price={data.price} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Description
        </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textContent}>
            {text}
            {!readMore && '...'}
          </Text>
          <Text style={styles.readMore}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}>
            {readMore ? 'Show Less' : 'Read More'}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    marginVertical: Sizes.extraLarge * 1.5
  },
  description: {
    fontSize: Sizes.font,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
  descriptionContainer: {
    marginTop: Sizes.base
  },
  textContent: {
    fontSize: Sizes.small,
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    lineHeight: Sizes.large,
  },
  readMore: {
    fontSize: Sizes.small,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  }
});
