import {
  View, Text, SafeAreaView, Image, StatusBar, FlatList,
} from 'react-native';
import {
  Colors, Fonts, Shadows, Sizes, assets,
} from '../constants';
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from '../components';
import { Bid } from '../interfaces/data';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/globalTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsHeader = ({ route, navigation }: Props) => {
  const nftData = route.params.data;

  return (
    <View style={{
      width: '100%',
      height: 373
    }}>
      <Image
        source={nftData.image}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%'
        }} />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight}
      />
    </View>);
};

function Details({ route, navigation }: Props) {
  const nftData = route.params.data;
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: Sizes.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
      }}>
        <RectButton minWidth={170} fontSize={Sizes.large} {...Shadows.dark} />
      </View>
      <FlatList
        data={nftData.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Sizes.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader route={route} navigation={navigation} />
            <SubInfo />
            <View style={{
              padding: Sizes.font
            }}>
              <DetailsDesc data={nftData} />

              {nftData.bids.length > 0 && (
                <Text style={{
                  fontSize: Sizes.font,
                  fontFamily: Fonts.semiBold,
                  color: Colors.primary
                }}>
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}

export default Details;
