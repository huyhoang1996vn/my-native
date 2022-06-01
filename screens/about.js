import { StyleSheet, Text, View, Button } from 'react-native';


export default function About({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.homeScreen}>About Screen</Text>
          <Button
          title="Go to Detail"
          onPress={() =>
            navigation.navigate('Detail')
          }
        />
      </View>
  );
}

const styles = StyleSheet.create({
  homeScreen:{
    textAlign: "center", 
    paddingTop: 20
  }
})