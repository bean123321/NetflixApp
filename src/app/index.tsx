import React from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
const NetflixLogo = require('@/assets/images/NetflixLogo.png'); 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Logo and Privacy/Sign In */}
      <View className="flex-row justify-between px-4 pt-10">
        <View className='mt-3'>
          <Image
            source={NetflixLogo}
            style={{ width: 86, height: 22 }} // Set desired size
          />
        </View>
        <View className="flex-row">
          <Text className="text-white mr-4 mt-3">Privacy</Text>
          <Text className="text-white mt-3">Sign In</Text>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-custom-xl font-medium text-center">
          Unlimited movies, TV shows, and more.
        </Text>
        <Text className="text-white text-lg mt-4 font-medium">Watch anywhere. Cancel anytime.</Text>
        <Text className="text-white text-base mt-1 font-medium">Tap the link below to sign up.</Text>
      </View>

      {/* Get Started Button */}
      <View className="items-center pb-8">
        <TouchableOpacity className="bg-red-600 w-[90%] py-3">
          <Text className="text-white text-lg text-center font-medium">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
