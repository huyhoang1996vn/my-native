import { StyleSheet, Text, View, Button } from 'react-native';


export default function About({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.homeScreen}>About Screen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  homeScreen:{
    textAlign: "center", 
    paddingTop: 20
  }
})