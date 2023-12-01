import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyTabs from './components/pages/MyTabs';
import { Button, View, Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
    </View>
  );
}

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerShown: true,
      })}>
      <Drawer.Screen name="AM 3.0.1" component={MyTabs} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
