import { View, Text, Image } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from 'expo-status-bar';

export default function DestinationScreen(props) {
    const item = props.route.params;
  return (
    <View className="bg-white flex-1">
        {/* Destination Image */}
        <Image source={item.image} style={{width: wp(100), height: hp(55)}} />
        <StatusBar style='light' />

        {/* Back button */}
    </View>
  )
}