import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
    const item = params;
/*     console.log('restaurant screen', item);
 */  return (
    <View>
    <ScrollView>
      <View className="relative">
        <Image className="h-72 w-full" source={item.image}/> 
        <TouchableOpacity 
        onPress={()=> navigation.goBack()}
        className="absolute top-14 left-4 bg-[#fffaad] p-2 rounded-full shadow-md">
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.background(1)}/>
          
        </TouchableOpacity>
      </View>


    </ScrollView>
    </View>
  )
}