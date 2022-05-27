import { View, Text, Image } from 'react-native'
import React from 'react'
import { Sizes, Fonts, Colors, Shadows, assets } from '../constants'

export const NFTTitle = ({
    title,
    subTitle,
    titleSize,
    subTitleSize,
}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: Fonts.semiBold,
                    fontSize: titleSize,
                    color: Colors.primary
                }}>
                {title}
            </Text>
            <Text
                style={{
                    fontFamily: Fonts.regular,
                    fontSize: subTitleSize,
                    color: Colors.primary
                }}>
                {subTitle}
            </Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 2
                }}
            />
            <Text style={{
                fontFamily: Fonts.medium,
                fontSize: Sizes.font,
                color: Colors.primary,
            }}>
                {price}
            </Text>
        </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -Sizes.font,
            }} />
    )
}

export const People = () => {
    return (
        <View style={{
            flexDirection: 'row'
        }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp imgUrl={imgUrl} index={index} key={`people-${index}`} />
            ))}
        </View>
    )
}

export const EndDate = () => {
    return (
        <View
            style={{
                paddingHorizontal: Sizes.font,
                paddingVertical: Sizes.base,
                backgroundColor: Colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                ...Shadows.light,
                elevation: 1,
                maxWidth: '50%',
            }}>
            <Text style={{
                fontFamily: Fonts.regular,
                fontSize: Sizes.small,
                color: Colors.primary
            }}>
                Ending In
            </Text>
            <Text style={{
                fontFamily: Fonts.semiBold,
                fontSize: Sizes.medium,
                color: Colors.primary
            }}>
                12h 30m
            </Text>
        </View>
    )
}


export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: Sizes.font,
            marginTop: -Sizes.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <People />
            <EndDate />
        </View>
    )
}