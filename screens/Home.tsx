import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { Colors, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { Nft } from '../interfaces/data';

function Home() {
  const [nftData, setNftData] = useState<Nft[]>(NFTData);

  const handleSearch = (value: string) => {
    if (!value.length) {
      return setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={Colors.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
        >
          <View style={{ height: 300, backgroundColor: Colors.primary }} />
          <View style={{ flex: 1, backgroundColor: Colors.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
