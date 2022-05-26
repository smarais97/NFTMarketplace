import { TouchableOpacity, View, Text, Image } from 'react-native'
import { Colors, Shadows, Sizes } from '../constants'

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