import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {
  const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
    <TouchableOpacity 
      style={{backgroundColor: themeColors.text}}
      onPress={()=> navigation.navigate('Cart')} 
      className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full" style={{backgroundColor: themeColors.text}}>
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        
        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg ">$20</Text>
    
    </TouchableOpacity>
  
</View>
  )
}