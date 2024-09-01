import {  Stack } from 'expo-router';

export default function FeaturesLayout() {
  return  <Stack >
            <Stack.Screen name="index" options={{title: 'Features', headerShown:false}}/>
  </Stack>
};