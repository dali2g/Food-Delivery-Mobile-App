import { View, Text, Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather"
export default function CartScreen() {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation()

  return (
    <View className="bg-white flex-1 mt-10">
        {/**back button */}
        <View>
            <TouchableOpacity
            onPress={() =>navigation.goBack()}
            style={{backgroundColor:themeColors.text}}
            className="absolute z-10 rounded-full p-1 shadow top-1 left-2"
            >
                <Icon.ArrowLeft strokeWidth={3} stroke="white"/>
            </TouchableOpacity>
            <View>
                    <Text className="text-center font-bold text-xl">Your Cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
            </View>
        </View>
        {/**delivery time */}
        <View style={{backgroundColor:themeColors.text}}
        className="flex-row px-4 items-center">
            <Image source={require('../assets/images/bikeGuy.png')}
            className="w-20 h-20 rounded-full" />
            <Text className="flex-1  pl-4">Deliver in 20-30 Minutes</Text>
            <TouchableOpacity>
                <Text className="font-bold" style={{color:themeColors.text}}>Change</Text>
            </TouchableOpacity>
        </View>
        {/**dishes */}
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingTop:50
        }}
        className="bg-white pt-5"
        >
                {
                    restaurant.dishes.map((dish,index) =>{
                        return(
                            <View key={index} 
                            className="flex-row items-center space-x-3 px-4 py-2 bg-white rounded-full">
                                <Text className="font-bold" style={{color:themeColors.text}}>
                                        2 x
                                </Text>
                                <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">${dish.price}</Text>
                                <TouchableOpacity
                                className="p-1 rounded-full"
                                style={{backgroundColor:themeColors.text}}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>

                                </TouchableOpacity>
                            </View>
                        )
                    })
                }

        </ScrollView>
        {/**totals */}
        <View className="p-6 px-8 rounded-t-3xl space-y-4" style={{backgroundColor:themeColors.text}}>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">$20</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">$2</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-extrabold">Order Total</Text>
                    <Text className="text-gray-700 font-extrabold">$22</Text>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('OrderPreparing')}
                    style={{backgroundColor:'#000000'}}
                    className="rounded-full p-3 "
                    >
                            <Text className="text-white text-center font-bold text-lg">
                                Place Order
                            </Text>
                    </TouchableOpacity>
                </View>
        </View>
    </View>
  )
}