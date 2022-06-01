import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/header';
import ListItem from '../components/listItems';
import Additem from '../components/addItem';


export default function Home({ navigation }) {
  const [user, setUser] = useState({name: "", age:"", id: 0});
  const [data, setData] =  useState([
    {name: "code", age: 1, id: 1},
    {name: "play soccer", age: 2, id: 2},
    {name: "work out", age: 3, id: 3},
  ]);

  const navigateDetail = (user) =>{
    return navigation.navigate('Detail', user); 
  }

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
    <TouchableWithoutFeedback onPress={()=>{
      console.log("dismisss");
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* <Header/> */}
        <View>
          <Text style={{textAlign: "center", paddingTop: 20, fontFamily: 'merriweather'}}>Manage task</Text>
          <Additem user={user} onChangeInput={onChangeInput} clickHandler={clickHandler}/>
          <ListItem data={data} onPress={onPress} navigateDetail={navigateDetail}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
