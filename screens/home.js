import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import ListItem from '../components/listItems';
import Additem from '../components/addItem';
import ModalAddItem from '../components/modalAddItem';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({name: "", age:"", id: 0});
  const [data, setData] =  useState([
    {name: "code", age: 1, id: 1},
    {name: "play soccer", age: 2, id: 2},
    {name: "work out", age: 3, id: 3},
  ]);

  const navigateDetail = (user) =>{
    return navigation.navigate('Detail', user); 
  }

  const clickHandler = (userArg=null) =>{
    let last_id = Math.max(...data.map(o => o.id));
    let new_user = {...user, id: last_id + 1};
    if (userArg){
      new_user = {...userArg, id: last_id + 1};
    }
    console.log("=== new_user ", new_user);
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
          <ModalAddItem 
            setUser={setUser}
            setModalVisible={setModalVisible} 
            modalVisible={modalVisible} 
            onChangeInput={onChangeInput} 
            clickHandler={clickHandler}
          />
          <MaterialIcons style={styles.iconAdd} name="add-box" size={34} color="black" onPress={() => setModalVisible(true)}/>
          <Text style={{textAlign: "center", paddingTop: 20, fontFamily: 'merriweather'}}>Manage task</Text>
          {/* <Additem user={user} onChangeInput={onChangeInput} clickHandler={clickHandler}/>*/}
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
  iconAdd:{
    textAlign: "center",
  }
});
