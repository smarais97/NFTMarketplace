/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
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

function Details({ route, navigation }:{route: any; navigation: any;}) {
  console.log(route);
  return (
    <Text>Details</Text>
  );
}

export default Details;
