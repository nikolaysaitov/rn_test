import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CartScreen from './CartScreen';
import FavoritesScreen from './FavoritesScreen';
import ProfileScreen from './ProfileScreen';
import HomeIcon from '../../../icons/HomeIcon';
import SearchIcon from '../../../icons/SearchIcon';
import CartIcon from '../../../icons/CartIcon';
import FavoritesIcon from '../../../icons/FavoritesIcon';
import ProfileIcon from '../../../icons/ProfileIcon';
const Tab = createBottomTabNavigator();

// TabBarIcon component
interface TabBarIconProps {
  iconName: string;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({iconName, color, size}) => {
  const getIcon = (iconComponent: React.FC<{color: string; size: number}>) =>
    React.createElement(iconComponent, {color, size});

  switch (iconName) {
    case 'home':
      return getIcon(HomeIcon);
    case 'search':
      return getIcon(SearchIcon);
    case 'cart':
      return getIcon(CartIcon);
    case 'heart':
      return getIcon(FavoritesIcon);
    case 'person':
      return getIcon(ProfileIcon);
    default:
      return null;
  }
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <TabBarIcon iconName="home" color={color} size={size} />;
          } else if (route.name === 'Search') {
            return <TabBarIcon iconName="search" color={color} size={size} />;
          } else if (route.name === 'Cart') {
            return <TabBarIcon iconName="cart" color={color} size={size} />;
          } else if (route.name === 'Favorites') {
            return <TabBarIcon iconName="heart" color={color} size={size} />;
          } else if (route.name === 'Profile') {
            return <TabBarIcon iconName="person" color={color} size={size} />;
          }
          return null;
        },
        tabBarActiveTintColor: '#E52E38',
        tabBarInactiveTintColor: '#98A3AA',
        tabBarStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
          minHeight: 56,
        },
        headerShown: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
