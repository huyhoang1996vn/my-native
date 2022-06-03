
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default function Card(props){
    return (
        <View style={styles.item}>
            <AntDesign name="pluscircleo" onPress={()=>props.navigateDetail(props.item)} size={16} color="black" />
            <View style={styles.itemText}  onPress={()=>props.navigateDetail(props.item)} >
                {props.children}
            </View>
            <AntDesign name="delete" size={16} color="black" onPress={()=>props.onPress(props.item.id)} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        backgroundColor: '#fff',
        borderColor: "gray", 
        borderWidth: 1,
        borderStyle: "dotted", 
        marginBottom: 15,
        textAlign: "center",
        borderRadius: 10,
        width:'85%',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    row: {
        marginTop: 25,
    },
    itemText: {
        marginLeft: 12,
        marginRight: 12
    }
  
})
