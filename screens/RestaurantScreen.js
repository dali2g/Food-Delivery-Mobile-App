import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const item = params;
  return (
    <View>
      <CartIcon/>
      <ScrollView>
        <View className="relative">
          <Image className="h-72 w-full" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-[#fffaad] p-2 rounded-full shadow-md"
          >
            <Icon.ArrowLeft
              strokeWidth={3}
              stroke={themeColors.background(1)}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row mt-2 items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.rating}</Text>
                <Text className="text-gray-700"> ({item.reviews} review)</Text>
                <Text className="font-semibold text-gray-700">{item.type}</Text>
              </Text>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby · {item.address}
                </Text>
              </View>
            </View>
          </View>
          <Text className="mt-5 px-5">{item.description}</Text>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

          {
            item.dishes.map((dish,index ) => <DishRow item={{...dish}} key={index}/>)
          }

        </View>
      </ScrollView>
    </View>
  );
}
