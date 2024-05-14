import { Stack,router } from "expo-router";
import { Text, View, TextInput,TouchableOpacity,ScrollView,Image } from "react-native";
import { useState, useEffect } from "react";
import TweetBox from "@/components/tweetbox";

export default function App() {
  return(
    <View className="bg-zinc-900">
      <Stack.Screen
        options={{
          title:"Login",
          headerTitleStyle: {color:"white"},
          headerStyle: {backgroundColor:"black"},
        }}
      />
      
      <Image
        className="flex flex-col justify-center"
        style={{width: 50, height: 50}}
        src="@/constant/twitter.png"
      />

      <View className="flex flex-col gap-2 justify-center h-screen ">

          <Text className="px-2 text-white">Username :</Text>
          <TextInput
            textAlignVertical="center"
            placeholder="Please enter your username"
            className="bg-zinc-200 h-12 rounded-xl px-2 border mx-4"
          />
          
          <Text className="px-2 text-white">Password :</Text>
          <TextInput
            textAlignVertical="center"
            placeholder="Please enter your password"
            className="bg-zinc-200 h-12 rounded-xl px-2 border mx-4"
            secureTextEntry
          />
  
          <View className="flex flex-row justify-center">
            <TouchableOpacity onPress={() => router.push("/tweets/")}>
              <View className="bg-blue-600 p-3 rounded-xl mt-3 items-center justify-center">
                <Text className="text-white font-bold text-xl">Log In</Text>
              </View>
            </TouchableOpacity>
          </View>


      </View>
    </View>
  );
}
