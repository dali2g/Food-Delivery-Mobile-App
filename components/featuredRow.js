import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from './restaurantCard'

export default function FeaturedRow({ title, restaurants, description }) {
  return (
    <View className="px-5">
      <View className="flex-col justify-start items-start px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
      <TouchableOpacity>
        <Text style={{ color: themeColors.text }} className="font-bold">
          See All
        </Text>
      </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
        ></ScrollView>
        {
            restaurants.map((item, index) =>{
                return (
                    <RestaurantCard 
                    key={index}
                    title={item.title}
                    restaurants={item.restaurants}
                    description={item.description}
                    image={item.image}
                    rating={item.rating}
                    address={item.address}
                    reviews={item.reviews}
                    type={item.type}
                    />
                )
            })
        }
    </View>
  );
}
