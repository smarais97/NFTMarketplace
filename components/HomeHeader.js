import { View, Text, Image, TextInput } from 'react-native'
import { Colors, Fonts, Sizes, assets } from '../constants';

export default function HomeHeader() {
  return (
    <View style={{
      backgroundColor: Colors.primary,
      padding: Sizes.font,
    }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }} />
        <View style={{
          width: 45,
          height: 45,
        }}>
          <Image
            source={assets.person01}
            resizeMode="contain" style={{
              width: '100%',
              height: '100%'
            }} />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }} />
        </View>
      </View>
      <View style={{
        marginVertical: Sizes.font,
      }}>
        <Text
          style={{
            fontFamily: Fonts.regular,
            fontSize: Sizes.small,
            color: Colors.white,
          }}>
          Hi Victoria!👋
        </Text>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: Sizes.large,
            color: Colors.white,
            marginTop: Sizes.base / 2
          }}>
          Let's find a Masterpiece
        </Text>
      </View>
      <View
        style={{
          marginTop: Sizes.font
        }}>
        <View style={{
          width: '100%',
          borderRadius: Sizes.font,
          backgroundColor: Colors.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: Sizes.font,
          paddingVertical: Sizes.small - 2,
        }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: Sizes.base
            }} />
          <TextInput
            placeholder='Search'
            style={{
              flex: 1,
            }}
            onChangeText={() => {}} />
        </View>
      </View>
    </View>
  )
}