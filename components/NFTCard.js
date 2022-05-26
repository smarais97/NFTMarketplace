import { useNavigation } from '@react-navigation/native'
import { View, Image, Text } from 'react-native'
import { Colors, Sizes, Shadows, assets } from '../constants';
import { CircleButton } from './Button';

export default function NFTCard({ data }) {
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
            <Text>NFTCard</Text>
        </View>
    )
}