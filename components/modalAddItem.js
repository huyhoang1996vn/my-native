import { Modal, StyleSheet, View, Text, Pressable, TextInput, Button} from 'react-native';
import { Formik } from 'formik';

export default function modelAddItem(props) {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.setModalVisible(!props.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Formik
                initialValues={{ name: "", age: "" }}
                onSubmit={values =>{
                    console.log(values);
                    props.clickHandler(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="Task ..." 
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Prioty ..." 
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    value={values.age}
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {props.setModalVisible(!props.modalVisible); handleSubmit()}}
                    >
                        <Text style={styles.textStyle}>Add task</Text>
                    </Pressable>
                </View>
                )}
            </Formik>

              
            </View>
          </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input:{
        borderWidth: 0.5,
        borderColor: '#777',
        padding:8,
        margin: 10,
        width: 220,
        alignSelf: 'center',
      },
  });