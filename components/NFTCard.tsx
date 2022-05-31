import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors, Sizes, Shadows, assets } from '../constants';
import { Nft } from '../interfaces/data';
import Details from '../screens/Details';
import { CircleButton, RectButton } from './Button';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';

export default function NFTCard({ data }: { data: Nft }) {
    const navigation = useNavigation();
    return (
        <View style={styles.nftCardContainer}>
            <View
                style={styles.circleButtonContainer}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={styles.coverImage} />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>
            <SubInfo />
            <View style={styles.bottomContainer}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={Sizes.large}
                    subTitleSize={Sizes.small} />
                <View style={styles.rectButtonContainer}>
                    <EthPrice price={data.price.toString()} />
                    <RectButton
                        minWidth={120}
                        fontSize={Sizes.font}
                        handlePress={() => navigation.navigate(Details.name as never, { data } as never)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nftCardContainer: {
        backgroundColor: Colors.white,
        borderRadius: Sizes.font,
        marginBottom: Sizes.extraLarge,
        margin: Sizes.base,
        ...Shadows.dark
    },
    circleButtonContainer: {
        width: "100%",
        height: 250
    },
    coverImage: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: Sizes.font,
        borderTopRightRadius: Sizes.font,
    },
    bottomContainer: {
        width: '100%',
        padding: Sizes.font
    },
    rectButtonContainer: {
        marginTop: Sizes.font,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})