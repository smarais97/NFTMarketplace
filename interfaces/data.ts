import { ImageSourcePropType } from "react-native";
import { Dayjs } from 'dayjs';

export interface Bid {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    date: Dayjs;
}

export interface Nft {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: ImageSourcePropType;
    bids: Bid[];
}