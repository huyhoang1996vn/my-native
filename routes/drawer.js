import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import Header from '../shared/header';


const Drawer = createDrawerNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#e0dede'},
          drawerStyle: {
            backgroundColor: '#e0dede',
            width: 240,
          },
          // header: ({ navigation, route, options }) => {
          // const title = getHeaderTitle(options, route.name);
        
          // return <Header navigation={navigation} title={title} style={options.headerStyle} />;
          // }
        }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
