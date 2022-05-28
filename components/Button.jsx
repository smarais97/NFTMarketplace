import { TouchableOpacity, View, Text, Image } from 'react-native'
import { Colors, Fonts, Shadows, Sizes } from '../constants'

export function CircleButton({ imgUrl, handlePress, ...props }) {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: Colors.white,
                position: 'absolute',
                borderRadius: Sizes.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...Shadows.light,
                ...props
            }} onPress={handlePress}>
            <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )
}


export function RectButton({ minWidth, fontSize, handlePress, ...props }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.primary,
                borderRadius: Sizes.extraLarge,
                minWidth: minWidth,
                fontSize: fontSize,
                padding: Sizes.small,
                ...props
            }} onPress={handlePress}>
            <Text style={{
                fontFamily: Fonts.semiBold,
                fontSize: fontSize,
                color: Colors.white,
                textAlign: 'center',
            }}>
                Place a Bid
            </Text>
        </TouchableOpacity>
    )
}