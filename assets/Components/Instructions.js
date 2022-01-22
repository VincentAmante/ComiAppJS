import React, {useState} from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Instructions = (props) => {
    const [modalVisible, setModalVisible] = useState(true);

    return(
    <>
    <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
            {/** Modal Contents */}
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Welcome!</Text>
                    </View>
                    <View style={styles.paragraph}>    
                        <Text style={styles.text}>
                           This app helps you store notes!
                        </Text>
                        <Text style={styles.text}>
                            To use it, simply follow the instructions below:
                        </Text>
                        <Text style={styles.textIndented}>Add a new note</Text>
                        <Text style={styles.textIndented}>Write down the title</Text>
                        <Text style={styles.textIndented}>Write down the note</Text>
                        <Text style={styles.textIndented}>Press add and see your note in the list!</Text>
                        <Text style={styles.textIndented}>You can remove it too if you'd like</Text>
                    </View>

                    <Text style={styles.goodbye}>Thank you and enjoy the app!</Text>
                    <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeText}>Close Message</Text></TouchableOpacity>
                </View>
            </View>
    </Modal>
    </>)
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:"#00000088",
    },
    boxContainer:{
        flex:1,
        margin:30,
        marginTop:90,
        marginBottom:50,
        padding:30,
        borderRadius:30,
        
        backgroundColor:'#fff',
        opacity:1,

        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 12
    },
    header:{
        borderBottomColor:'#222B45',
        borderBottomWidth:3,
    },
    paragraph:{
        paddingVertical :20
    },

    title:{
        fontSize:24,
        color:'#000',
        alignSelf:'center',
        textAlign:'center'
    },
    text: {
        fontSize:16,
        color:'#000',
        textAlign:'justify',
        marginBottom:2,
    },
    textIndented:{
        fontSize:16,
        color:'#000',
        marginLeft:10,
        
    },

    goodbye:{
        textAlign:'center',
        fontSize:18,
        marginTop:10,
        color:"#000",
    },

    
    closeButton:{
        padding:10,
        alignSelf:'center',
    },
    closeText:{
        fontSize:16,
        fontFamily:'Jost',
    }
})
export default Instructions;