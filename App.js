import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import ListItem from './components/listItems';


export default function App() {
  const [user, setUser] = useState({name: "", age:"", id: 0});
  const [data, setData] =  useState([
    {name: "steve", age: 26, id: 1},
    {name: "dinh", age: 28, id: 2},
    {name: "noad", age: 29, id: 3},
  ]);

  const clickHandler = () =>{
    let last_id = Math.max(...data.map(o => o.id));
    let new_user = {...user, id: last_id + 1};
    setData([...data, new_user]);
    setUser({name: "", age:"", id: 0});
  }

  const onPress = (id) =>{
    setData((prevState) =>prevState.filter(item=>item.id != id));
  }

  return (
    <View style={styles.container}>
      <Header/>

      <View>
        <Text style={styles.header}>List User</Text>
        <TextInput 
          style={styles.input} placeholder="Typing ..." onChangeText={(name)=>setUser({...user, name})}
          defaultValue={user.name} />
        <TextInput 
          keyboardType='phone-pad' style={styles.input} placeholder="Typing ..." 
          onChangeText={(age)=>setUser({...user, age})}
          defaultValue={user.age}
          />

        <View style={{marginTop: 25, alignItems: 'center'}}>
          <Button  title="Submit" onPress={clickHandler}/>
        </View>
        <ListItem data={data} onPress={onPress}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: "center",
    color:'black',
    padding: 20,
  },
  input:{
    borderWidth: 0.5,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width: 220,
    alignSelf: 'center',
  },
  item:{
    marginTop: 15,
    padding: 25,
    backgroundColor: 'pink',
    marginBottom: 15,
    marginHorizontal: 5
  }
});
