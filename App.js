import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Detail from './screens/detail';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import * as Font from 'expo-font';
// import AppContainer from './routes/drawer'
import HomeStack from './routes/homeStack'

const useFonts = async () =>
  await Font.loadAsync({
    'merriweather': require('./assets/fonts/Merriweather-Light.ttf'),
    'merriweather-italic': require('./assets/fonts/Merriweather-LightItalic.ttf'),
  });

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  } 
  return (
       <HomeStack/>
  );
}
