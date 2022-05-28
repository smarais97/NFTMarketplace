import { useNavigation } from '@react-navigation/native'
import { View, Image, Text } from 'react-native'
import { Colors, Sizes, Shadows, assets } from '../constants';
import Details from '../screens/Details';
import { CircleButton, RectButton } from './Button';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';

export default function NFTCard({ data }: { data: any }) {
    const navigation = useNavigation();
    console.log(data);
    return (
        <View style={{
            backgroundColor: Colors.white,
            borderRadius: Sizes.font,
            marginBottom: Sizes.extraLarge,
            margin: Sizes.base,
            ...Shadows.dark
        }}>
            <View
                style={{
                    width: "100%",
                    height: 250
                }}>
                <Image
                    source={data.Image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: Sizes.font,
                        borderTopRightRadius: Sizes.font,
                    }} />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>
            <SubInfo />
            <View style={{
                width: '100%',
                padding: Sizes.font
            }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={Sizes.large}
                    subTitleSize={Sizes.small} />

                <View style={{
                    marginTop: Sizes.font,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <EthPrice price={data.price} />
                    <RectButton
                        minWidth={120}
                        fontSize={Sizes.font}
                        handlePress={() => navigation.navigate(Details.name as never, { data } as never)} />
                </View>
            </View>
        </View>
    )
}