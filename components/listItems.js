import { StyleSheet, Text, FlatList, TouchableOpacity, View  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


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
                            <AntDesign name="delete" size={14} color="black" onPress={()=>props.onPress(item.id)} />
                            <Text style={styles.itemText}>Name: {item.name} - Age: {item.age}</Text>
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
        padding: 14,
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
        marginLeft: 12
    }
  
})

