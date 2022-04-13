import { StyleSheet, Text, FlatList, TouchableOpacity  } from 'react-native';

export default function ListItem(props) {
    return (
            <FlatList style={styles.row}
            numColumns={1}
            data={props.data}
            keyExtractor={(item)=>{return item.id}}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>props.onPress(item.id)} >
                        <Text style={styles.item}>Employee: {item.name} - {item.age}</Text>
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
        backgroundColor: 'pink',
        marginBottom: 15,
        textAlign: "center",
        borderRadius: 10,
        width:'85%',
        alignSelf: 'center',
    },
    row: {
        marginTop: 25,
    }
  
})

