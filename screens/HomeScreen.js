import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { featured } from "../constants";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-[fffedd]">
      <StatusBar barStyle="dark-content" />

      <View className="flex-row items-center justify-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-[#dddddd] ">
          <Icon.Search height="25" width="25" stroke="#ffcc70" />
          <TextInput placeholder="Rechercher" className="flex-1 ml-2 text-[#343434]" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-[#dddddd]">
            <Icon.MapPin height="20" width="20" stroke="#ffcc70" />
            <Text className="text-[#343434]">Monastir</Text>
          </View>
        </View>
        <View
        
          className="p-3 ml-2 rounded-full bg-[#ffcc70]"
        >
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>
      {/** main area*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/** categories */}
        <Categories />
        {/** featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return <FeaturedRow 
            key={index}
            title={item.title}
            restaurants={item.restaurants}
            description={item.description} 
            />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
