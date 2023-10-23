import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from './components/Categories';
import SortCategories from './components/SortCategories';
import Destinations from './components/Destinations';
const ios = Platform.OS == "ios";
const topMargin = ios? 'mt-3': 'mt-10';
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
        <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "+topMargin}>
            {/* avatar */}
            <View className="mx-5 flex-row justify-between items-center mb-10">
                <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>
                <TouchableOpacity>
                    <Image source={require("../../assets/images/avatar.png")} style={{height: wp(12), width: wp(12)}} />
                </TouchableOpacity>
            </View>
            {/* Search bar */}
            <View className="mx-5 mb-4">
                <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
                    <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                    <TextInput
                    placeholder='Search destination'
                    placeholderTextColor={'gray'}
                    className="flex-1 text-base mb-1 pl-1 tracking-wider" />
                </View>
            </View>

            {/* Categories */}
            <View className="mb-4">
                <Categories />
            </View>

            {/* Sort categories */}
            <View className="mb-4">
                <SortCategories />
            </View>

            {/* Destinations */}
            <View>
                <Destinations />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}