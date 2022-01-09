/*
*File:app.js
*Author: Szűcs Norbert
*Copyright: 2022, Szűcs Norbert
*Group: Szoft II/N
*Date:2022.01.09
*Github:https://github.com/Szucs-Norbert
*Program feladata: Egy pentagon területének kiszámítása. 
*/

import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-web';

export default function App() {
  const[base,setbase] = useState();
  const[area,setarea] = useState();

  function calcArea(){
    let area= (Math.pow(base,2)*Math.sqrt(25+10*Math.sqrt(5)))/4;
      setarea(Math.round(area*100)/100);
      
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pentagon - Szűcs Norbert</Text>
      <Text style={styles.text}>Alap</Text>
      <TextInput       
      style = {styles.input} 
      onChangeText={base => setbase(base)}/>

            
      

<TouchableHighlight
          style={styles.runButton}
          onPress={calcArea}
          >
          <Text style={styles.runText}>Számolás</Text>
</TouchableHighlight>
 

      <Text style={styles.text}>Terület (cm2) </Text>
      <Text style={styles.text}>{area} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:'2%',
    marginRight:'10%', 
    marginLeft:'10%', 
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInput:{
    color: 'white',
    backgroundColor:'white',
  },

  input:{
   
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:'grey',
    width: '20%',
    height: '4%',
    margin: 10,
    marginTop: 8,
    marginBottom: 8,
  },

  text:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
  },

  runButton: {
    backgroundColor: 'red',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    marginBottom:10,
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    fontFamily: 'arial-black',
    fontWeight:'bold',

  }
});


