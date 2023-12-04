import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'
import { useState } from 'react'

export default function Categories() {
const [activeCategory,setActiveCategory] = useState(null)
  return (
    <View className="mt-4">
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      >
 {
            categories?.map(category=>{
              let isActive = category._id==activeCategory;
              let btnClass = isActive? ' bg-[#ffcc70]': ' bg-gray-200';
              let textClass = isActive? ' font-semibold text-gray-800': ' text-gray-500';
              return(
                <View key={category._id} className="flex justify-center items-center mr-6">
                  <TouchableOpacity 
                    onPress={()=> setActiveCategory(category._id)} 
                    className={"p-2 rounded-full shadow"+ btnClass}>
                    <Image style={{width: 45, height: 45}} source={category.image} 
                    />
                  </TouchableOpacity>
                  <Text className={"text-sm "+textClass}>{category.name}</Text>
                </View> 
              )
            })
          }
        </ScrollView>
    </View>
  )
}