import { StyleSheet, Text, FlatList, TouchableOpacity, View  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


// Refer: https://icons.expo.fyi/
export default function ListItem(props) {
    return (
            <FlatList style={styles.row}
            numColumns={1}
            data={props.data}
            keyExtractor={(item)=>{return item.id}}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity  >
                        <View style={styles.item}>
                            <AntDesign name="pluscircleo" onPress={()=>props.navigateDetail(item)} size={16} color="black" />
                            <Text style={styles.itemText}  onPress={()=>props.navigateDetail(item)} >Task: {item.name} - Prioty: {item.age}</Text>
                            <AntDesign name="delete" size={16} color="black" onPress={()=>props.onPress(item.id)} />

                        </View>
                    </TouchableOpacity>
                    )
                }
            }
        />
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

