import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [role, setRole] = useState("Teamate");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const data = [
    {name: "steve", age: 26, id: 1},
    {name: "dinh", age: 28, id: 2},
    {name: "noad", age: 29, id: 3},
    {name: "noad", age: 29, id: 4},
    {name: "noad", age: 29, id: 5},
    {name: "noad", age: 29, id: 6},
    {name: "noad", age: 29, id: 7},
    {name: "son", age: 56, id: 8}
  ]

  const clickHandler = () =>{
    if (role == "Teamate"){
      setRole("Leader");
    } else{
      setRole("Teamate");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resume</Text>
      <Text style={styles.body}>Avatar's Steve</Text>
      <Text>Role: {role}</Text>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="Typing ..." onChangeText={(name)=>setName(name)}/>
      <TextInput keyboardType='phone-pad' style={styles.input} placeholder="Typing ..." onChangeText={(phone)=>setPhone(phone)}/>

      <View style={{marginTop: 25}}>
        <Button  title="Upgrade skill" onPress={clickHandler}/>
      </View>

      <FlatList style={{marginTop: 25}}
        numColumns={2}
        data={data}
        renderItem={({item})=><Text  style={styles.item}>Employee: {item.name} - {item.age}</Text>}
        keyExtractor={(item)=>item.id}
      />

      {/* <ScrollView >
        {data.map((e, id)=><Text key={id} style={styles.item}>Employee: {e.name} - {e.age}</Text>)}
      </ScrollView> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'blue',
    color:'white',
    padding: 20,
  },
  body: {
    backgroundColor: 'gray',
    padding: 50,
  },
  buttonContainer:{
    marginTop: 155,
  },
  input:{
    borderWidth: 0.5,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width: 220,
  },
  item:{
    marginTop: 15,
    padding: 25,
    backgroundColor: 'pink',
    marginBottom: 15,
    marginHorizontal: 5
  }
});
