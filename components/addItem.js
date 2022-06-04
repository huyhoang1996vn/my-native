import { StyleSheet, TextInput, View, Button} from 'react-native';

export default function Additem(props) {
    return (
        <View style={{marginTop: 25, alignItems: 'center'}}>
            <TextInput 
                style={styles.input} placeholder="Your task ..." onChangeText={(name)=>props.onChangeInput(name, "name")}
                defaultValue={props.user.name} 
            />
            <TextInput 
                keyboardType='phone-pad' style={styles.input} placeholder="Prioty ..." 
                onChangeText={(age)=>props.onChangeInput(age, "age")}
                defaultValue={props.user.age}
            />
        <View style={{marginTop: 25, alignItems: 'center'}}>
            <Button  color="#5167e8"  title="Add" onPress={props.clickHandler}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 0.5,
        borderColor: '#777',
        padding:8,
        margin: 10,
        width: 220,
        alignSelf: 'center',
      },
})