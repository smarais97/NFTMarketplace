import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { EthPrice, NFTTitle } from './SubInfo';
import {
  Colors, Fonts, Sizes
} from '../constants';

export default function DetailsDesc({ data }: { data: any; }) {
  const [text, setText] = useState<string>(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState<Boolean>(false);

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={Sizes.extraLarge}
          subTitleSize={Sizes.font} />

        <EthPrice price={data.price} />
      </View>
      <View style={{
        marginVertical: Sizes.extraLarge * 1.5
      }}>
        <Text style={{
          fontSize: Sizes.font,
          fontFamily: Fonts.semiBold,
          color: Colors.primary,
        }}>
          Description
        </Text>
        <View style={{
          marginTop: Sizes.base
        }}>
          <Text style={{
            fontSize: Sizes.small,
            fontFamily: Fonts.regular,
            color: Colors.secondary,
            lineHeight: Sizes.large,
          }}>
            {text}
            {!readMore && '...'}
          </Text>
          <Text style={{
            fontSize: Sizes.small,
            fontFamily: Fonts.semiBold,
            color: Colors.primary,
          }}
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
