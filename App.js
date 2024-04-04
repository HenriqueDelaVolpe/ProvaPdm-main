import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Pressable, StyleSheet, Image, Text, View, TextInput, ImageBackground} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const[numero,setNumero]=useState('');
  const [senha, setSenha] = useState('');

  
 
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.containerLogo}> 
        <Image source={require('./src/img/topo.png')}/>
      </View>

      <View style={styles.container2}>
          <ImageBackground style={styles.imageBg1} source={require('./src/img/user.png')}>
            <TextInput placeholder="Fullname" style={styles.textInput} onChangeText={text=>setNome(text)} />
          </ImageBackground>
          <br></br>
          <ImageBackground style={styles.imageBg2} source={require('./src/img/email.png')}>
            <TextInput placeholder="Email" style={styles.textInput} onChangeText={text=>setEmail(text)} />
          </ImageBackground>
          <br></br>
          <ImageBackground style={styles.imageBg3} source={require('./src/img/telefone.png')}>
            <TextInput placeholder="Phone Number" style={styles.textInput} onChangeText={text=>setNumero(text)} />
          </ImageBackground>
          <br></br>
          <ImageBackground style={styles.imageBg4} source={require('./src/img/chave.png')}>
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} onChangeText={text=>setSenha(text)} />
          </ImageBackground>
          <br></br>
          <Pressable style={styles.button}>
            <Text style={{ color:'white',textAlign:'center'}}> REGISTER </Text>
          </Pressable>
          <br></br>
          <Pressable style={styles.btnRegister}>
           <Text style={styles.registerText}> Already a member? Login </Text>
          </Pressable>
      </View>
    </View>
  );
}
<Image source={require('./src/img/user.png')} />
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  containerLogo:{
    width: '100%',
    height: 'auto',
    justifyContent:'center',
  },

  container2: {
    width: '100%',
    height: '90%',
    paddingLeft: '30%',
    justifyContent:'center',
    backgroundColor: '#fff',
  },

  imageBg1: {
    width: 20,
    height: 20,
    margin: 2,
    float: 'left',
  },

  imageBg2: {
    width: 20,
    height: 20,
    margin: 2,
    float: 'left',
  },

  imageBg3: {
    width: 20,
    height: 20,
    margin: 2,
    float: 'left',
  },

  imageBg4: {
    width: 20,
    height: 20,
    margin: 2,
    float: 'left',
  },

  textInput:{
    width: 180,
    height: 100,
    paddingLeft: 20,
    borderWidth: 2,
    textAlign: 'left',
    justifyContent: 'center',
    borderRadius: 9,
   },

  button: {
    width: '60%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#ff6600',
  },

  registerText: {
    color:'#fc6203',
  }
});