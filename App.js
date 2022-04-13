import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import ListItem from './components/listItems';
import Additem from './components/addItem';


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

  const onChangeInput = (value, field) =>{
    if( field == 'name'){
      setUser({...user, name: value});
    }
    else if ( field == 'age'){
      setUser({...user, age: value});
    }
  }

  const onPress = (id) =>{
    setData((prevState) =>prevState.filter(item=>item.id != id));
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <Text style={{textAlign: "center", paddingTop: 20}}>Manage User</Text>
        <Additem user={user} onChangeInput={onChangeInput} clickHandler={clickHandler}/>
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
});
