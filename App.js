import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';


export default function App() {

  var textInputValue = "Printar ut något" ; // String variable
  const handlePress = () => console.log(textInputValue) // const arrow function
  const handleChangeText = () => console.log(textInputValue) // const arrow function
  return (
    
    <View style={styles.header}>
      <StatusBar style="auto" />

      <Text style={styles.bigText}>Hello World!</Text>
      <Text style={styles.mediumText}>First React Native App</Text>
      <Text style={styles.smallText}>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons</Text>
      
   <View style={styles.container}>
      <Text style={styles.containerHeading}>What would you like to get out of this course?</Text>
      <TextInput style={styles.textInput} placeholder="Initial Text" onChangeText={handleChangeText}>
      </TextInput>
      <Text style={styles.containerHeading}>An emoji describing how you are feeling about the course:</Text>
      <Image 
  style={{width: 100, height: 100}}
  source={require('./assets/shades.png')}
      />

      <Button style={styles.btn} title="Submit" onPress={() => console.log(textInputValue)}/>
   </View>
   
   
   
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: '25px',
  },
  header: {
    backgroundColor: "#B6CDE4",
    width: "100%",
    justifyContent: 'center',
    marginTop: '100 px',
    
  },
  bigText: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginTop: '10px'
  },
  mediumText: {
    fontSize: '20px',
  },
  smallText: {
    fontSize: '11px',
    marginBottom: '12px',
  },
  containerHeading: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
  textInput: {
    backgroundColor: '#F3F2F4',
    height: '100px',
    width: '300px',
    marginBottom:'15px',
  },
  btn: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    color: '#fffff',

  },

});
