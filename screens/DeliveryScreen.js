import { View, Text, StatusBar, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { emptycart } from '../slices/cartSlice';
import { selectedRestaurant } from '../slices/restaurantSlice';


export default function DeliveryScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectedRestaurant);
    const dispatch = useDispatch();
    const handleCancel = ()=>{
      dispatch(emptycart());
      navigation.navigate('Home')
    }
  return (
    <View className="flex-1" >
        <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }} 
          className="flex-1"
          mapType="standard"
        >
            <Marker 
                coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng
                }} 
                name={restaurant.name}
                description={restaurant.description}
                pinColor={themeColors.text}
            />
        </MapView>
        
      <View className="rounded-t-3xl -mt-12 bg-white relative">
          <TouchableOpacity className="absolute right-4 top-2">
            
          </TouchableOpacity>
          <View className="flex-row justify-between px-5 pt-10">
              <View>
                  <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                  <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
                  <Text className="mt-2 text-gray-700 font-semibold">Your Order is own its way</Text>
              </View>
              <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')} />
          </View>
          
        <View 
          style={{backgroundColor: themeColors.text}} 
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="p-1 rounded-full">
              <Image style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="w-16 h-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
            </View>
            
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">Mohamed Ali Meksi</Text>
                <Text className="text-white font-semibold">Your Rider</Text>
            </View>
            <View  className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={themeColors.text2} stroke={themeColors.text2} strokeWidth="1" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleCancel} className="bg-white p-2 rounded-full">
                <Icon.X stroke={'red'} strokeWidth="5" />
              </TouchableOpacity>
              
            </View>
            
        </View>
      </View>
    </View>
  )
}