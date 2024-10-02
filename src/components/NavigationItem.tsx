import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { useNavigation } from "expo-router";
import { navigationItems } from "@/assets/data/NavigationData";
const NavigationItem = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-evenly space-x-2 fixed bottom-0 left-0 right-0 bg-black z-50 mt-2 pt-2">
      {navigationItems(navigation).map((item) => (
        <TouchableOpacity
          key={item.id}
          className="flex-col items-center"
          onPress={item.onPress}
        >
          <Image
            source={item.logo}
            style={{ width: item.width, height: item.height }}
            resizeMode="contain"
            className="mb-[5px]"
          />
          <Text className="text-white text-xs">{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationItem;
