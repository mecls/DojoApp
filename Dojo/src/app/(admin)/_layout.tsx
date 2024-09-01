import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '../../components/navigation/TabBarIcon';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons'; // Or any other icon library

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="scheduleClass"
        options={{
          title: 'Schedule',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'} // Replace with your preferred icon names
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="compResults"
        options={{
          title: 'Results',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'trophy' : 'trophy-outline'} // Replace with your preferred icon names
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="features"
        options={{
          title: 'More',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
          ),
         
        }}
      />
    </Tabs>
  );
}
