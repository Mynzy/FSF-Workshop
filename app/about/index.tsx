import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function AboutPage(){
  return(
    <View>
      <Stack.Screen
        options={{
          title:"About",
          headerTitleStyle: {color:"white"},
          headerStyle: {backgroundColor:"black"},
        }}
      />
      <Text className=''>Hello from about page</Text>
    </View>
  );
}