import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import MapView from "react-native-maps"
import { Marker } from 'react-native-maps'
import * as Icon from "react-native-feather";
export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation()

  return (
    <View className="flex-1">
        {/**map view */}
        <MapView
        initialRegion={{
            latitude:restaurant.lat,
            longitute:restaurant.lng,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        className="flex-1"
        mapType="standard"
        >
            <Marker 
            coordinate={{
                latitude:restaurant.lat,
                longitute:restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.text}
            >

            </Marker>

        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Estimated Arrival
                    </Text>
                    <Text className="text-3xl font-extrabold text-gray-700">
                            20-30 Minutes
                    </Text>
                    <Text className="mt-2 text-gray-700 font-semibold">
                        Your order is on the way !
                    </Text>
                </View>
                <Image className="w-24 h-24 rounded-full" source={require('../assets/images/bikeGuy2.gif')}/>

            </View>
            <View
            style={{backgroundColor:themeColors.text}}
            className="p-2 flex-row justify-between items-center rounded-full my-5 mt-5">

                    <View className="p-1 rounded-full"
                    style={{backgroundColor:'rgba(255,255,255,0.4)'}}
                    >
                        <Image className="h-16 w-16 rounded-full" source={require("../assets/images/deliveryGuy.png")}/>
                    </View>
                    <View className="flex-1 ml-3 text-white">
                        <Text className="text-lg font-bold text-white">
                        MedAli Meksi
                        </Text>
                        <Text>
                            Your Rider
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Icon.Phone strokeWidth={1}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>navigation.navigate('Home')} className="bg-white p-2 rounded-full">
                        <Icon.X fill='red' strokeWidth={4}/>
                        </TouchableOpacity>
                    </View>

            </View>

        </View>
    </View>
  )
}