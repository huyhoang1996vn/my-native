import { StyleSheet, Text, View, Button } from 'react-native';


export default function Detail({ navigation, route }) {
  console.log("=== navigation ", navigation);
  console.log("=== route ", route);
  console.log("=== route.params ", route.params);


  return (
      <View style={styles.container}>
          <Text style={styles.homeScreen}>Your task</Text>
          <Text style={styles.homeScreen}>Task: {route.params.name}, Prioty:{route.params.age} </Text>
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
  }
})