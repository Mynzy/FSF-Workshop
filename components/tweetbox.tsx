import { Text, View, Image } from "react-native";
import type { TData } from "@/app/tweets";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function TweetBox(props: TData){
  return (
    <View className="bg-zinc-950 w-full p-3 mb-1 border border-solid border-zinc-800 rounded-xl">
      <View className=" flex flex-row">
        <Image
          source={{uri: props.photoURL}}
          style={{width: 50, height: 50, borderRadius:50}}
        />
        <View className=" flex flex-col px-4">
          <Text className="text-white">{props.name}</Text>
          <Text className="text-white">{props.username}</Text>
        </View>
      </View>
      <Text className="text-white">{props.content}</Text>
      <View className="flex flex-row justify-between">
        <FontAwesome name="heart" size={24} color="red"/>
        <Entypo name="forward" size={24} color="white"/>        
      </View>
    </View>
  )
}