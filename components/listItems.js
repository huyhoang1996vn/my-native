import { StyleSheet, Text, FlatList, TouchableOpacity, View  } from 'react-native';
import Card from '../shared/card'

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
                        <View>
                           <Card item={item} onPress={props.onPress} navigateDetail={props.navigateDetail}>
                                <Text >Task: {item.name} - Prioty: {item.age}</Text>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    )
                }
            }
        />
    )
}

const styles = StyleSheet.create({
    row: {
        marginTop: 25,
    },
})

