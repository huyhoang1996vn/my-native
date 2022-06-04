import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {images} from '../styles/globalStyle'

export default function Detail({ navigation, route }) {
  console.log("=== navigation ", navigation);
  console.log("=== image[2] ", images[2]);
  console.log("=== route.params ", route.params);


  return (
      <View>
          <Text style={styles.homeScreen}>Your task</Text>
          <Text style={styles.homeScreen}>Task: {route.params.name}, Prioty:{route.params.age} </Text>
          <View style={styles.image}>
            <Image
              source={images[route.params.age]}
          />
          </View>
          <Button
          title="Go to Home"
          onPress={() =>
            navigation.navigate('Home')
          }/>
      </View>
  );
}

const styles = StyleSheet.create({
  homeScreen:{
    textAlign: "center", 
    paddingTop: 20
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})