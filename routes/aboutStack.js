// Refer: https://reactnative.dev/docs/navigation
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import About from '../screens/about';

const AboutStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'coral' } }}>
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'About' }}
        />
      </Stack.Navigator>
  );
};

export default AboutStack;
