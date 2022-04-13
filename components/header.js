import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text>Portfolio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: 'coral',
        width:'100%',
        color:'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
})