import { StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Header({ navigation, route, options }) {
    return (
        <View style={styles.header}>
            <Ionicons name="md-reorder-three-sharp" size={24} color="black" />
            <Text>TODO App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: 'coral',
        width:'100%',
        color:'black',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: "row",

    }
})