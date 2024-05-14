import { Stack,router } from "expo-router";
import { Text, View, TextInput,TouchableOpacity,ScrollView } from "react-native";
import { useState, useEffect } from "react";
import TweetBox from "@/components/tweetbox";

export type TData = {
  id: string,
  name: string,
  username: string,
  photoURL: string,
  content: string,
  createdAt: string,
  data: {
    likes: number;
    reposts: number;
    comments: number;
  };
};

export default function Home() {
  const[myTweet, setmyTweet] = useState(""); //hold the value in that components, mytweet variable, setmytweet, function
  const[fetchedData, setFetchedData] = useState([]);

  async function fetchdata() {
    const response = await fetch("https://workshop.elyasasmad.com/posts");
    const data = await response.json();

    setFetchedData(data);
    
    return(data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <View className="bg-zinc-900 flex-1">
      <Stack.Screen
        options={{
          title:"Home",
          headerTitleStyle: {color:"white"},
          headerStyle: {backgroundColor:"black"},
        }}
      />
      <View className="p-3">
        <TextInput 
          multiline //for iOS
          textAlignVertical="top"
          blurOnSubmit
          placeholder="What's Happening...."
          className="bg-zinc-700 h-32 rounded-xl px-2"
          onChangeText={(e) => setmyTweet(e)}
        />
      </View>

      <View className="flex flex-row justify-between mx-2">
        <TouchableOpacity onPress={() => console.log(myTweet)}>
          <View className="bg-blue-600 w-24 rounded-xl p-3 flex flex-1 items-center justify-center">
            <Text className="text-white font-bold">Tweet</Text>
          </View>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => router.push("/about/")}>
          <View className="bg-blue-600 rounded-xl p-3 flex items-center justify-center">
            <Text className="text-white font-bold"> About Screen</Text>
          </View>
        </TouchableOpacity>
      </View>
      

      <ScrollView className="mt-3">
        {fetchedData.map((tweet: TData) => (
          <TweetBox {...tweet} key={tweet.id}/>
        ))}
      </ScrollView>
    </View>
  );
}
