import React from 'react';
import {
  View, Text, Image, TextInput, StyleSheet
} from 'react-native';
import {
  Colors, Fonts, Sizes, assets,
} from '../constants';

export default function HomeHeader({ onSearch }: { onSearch: (value: string) => void }) {
  return (
    <View style={styles.homeHeaderContainer}>
      <View
        style={styles.headerSectionOne}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.avatarContainer}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={styles.avatar}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.badge}
          />
        </View>
      </View>
      <View style={styles.headerSectionTwo}>
        <Text style={styles.greetingMessage}>
          Hi Victoria!👋
        </Text>
        <Text style={styles.actionMessage}>
          Let&apos;s find a Masterpiece
        </Text>
      </View>
      <View style={styles.headerSectionThree}>
        <View style={styles.searchContainer}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchImage}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeHeaderContainer: {
    backgroundColor: Colors.primary,
    padding: Sizes.font,
  },
  headerSectionOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSectionTwo: {
    marginVertical: Sizes.font,
  },
  headerSectionThree: {
    marginTop: Sizes.font,
  },
  logo: {
    width: 90,
    height: 25,
  },
  avatarContainer: {
    width: 45,
    height: 45,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
  greetingMessage: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.small,
    color: Colors.white,
  },
  actionMessage: {
    fontFamily: Fonts.bold,
    fontSize: Sizes.large,
    color: Colors.white,
    marginTop: Sizes.base / 2,
  },
  searchContainer: {
    width: '100%',
    borderRadius: Sizes.font,
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.font,
    paddingVertical: Sizes.small - 2,
  },
  searchImage: {
    width: 20,
    height: 20,
    marginRight: Sizes.base,
  },
  searchInput: {
    flex: 1,
  }
});