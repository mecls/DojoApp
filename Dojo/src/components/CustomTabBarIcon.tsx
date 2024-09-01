import { Image } from 'react-native';
import { Tabs } from 'expo-router';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Or any other icon library

// Define the props type using the BottomTabNavigationOptions
type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

function CustomTabBarIcon({ focused }: { focused: boolean }) {
  return (
    <Image
      source={
        focused
          ? require('../../../assets/images/icon_weight_lifter.png')
          : require('../../../assets/images/custom-icon-inactive.png')
      }
      style={{ width: 24, height: 24 }}
    />
  );
}
{/* <Tabs.Screen
  name="compResults"
  options={{
    title: 'Competition Results',
    headerShown: false,
    tabBarIcon: ({ color, focused, size }: TabBarIconProps) => (
      <CustomTabBarIcon focused={focused} />
    ),
  }}
/> */}

export default CustomTabBarIcon;