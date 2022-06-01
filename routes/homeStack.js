// Refer: https://reactnative.dev/docs/navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Detail from '../screens/detail';
import Home from '../screens/home';

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'coral' } }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail} options={{ headerStyle: { backgroundColor: 'coral' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
