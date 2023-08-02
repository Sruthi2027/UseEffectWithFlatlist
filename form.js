import React, {useState}  from "react";
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import { fire } from './credentials';
import { ref, set } from "firebase/database";

export const LoginForm = ( {navigation } ) => {
  const [name, setname]=useState('');
  const [password, setpassword] = useState('');
  const [fail, setfail] = useState(false);
  const [pass, setpass] = useState(false);

  const name1 = (name) => {
    setname (name);
  };
  
  const password1 = (password) => { 
      setpassword (password);
  };

  const handlepress = () => {
    if ( !name || !password) {
           setfail(true);
        }
    else {
      setpass (true);
      dataAddon();
    }
  };

  const dataAddon = () => {
    set(ref(fire, "Login/" + name), {
    name: name,
    password : password,
  }
  );
    setname("");
    setpassword("");
  };

    const SignupPress = () => {
    navigation.navigate('signup'); 
  };
  return (
    <View style={styles.container}>
      <Text style = {styles. header}>Welcome!</Text> <br/>
      <Text style = {styles. subheader}> Login below to access your account</Text> <br/><br/>
      <TextInput style = {styles.inputbox}
      placeholder="Enter your name"
      value={name}
      onChangeText={name1}/>
    
      <br/><br/>

     <TextInput style = {styles.inputbox}
      placeholder="Enter your password"
      value={password}
      onChangeText={password1}
      secureTextEntry/>

<br/><br/>
            
      {fail && 
      <Text style = {styles.error}> Please fill all required fields! </Text>
     }
     {pass && 
      <Text style = {styles.success}> Login successful! </Text>
     }

     <br/><br/>

      <TouchableOpacity onPress={handlepress}>
        <Text style = {styles.button}>Submit</Text> <br/>
      </TouchableOpacity> 
      <Text> Don't have an account? </Text> 
      <br/><TouchableOpacity onPress={SignupPress}><Text style = {styles.italiclink}> Sign Up!</Text>
        
      </TouchableOpacity>   
     
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },

  header: {
    fontSize: 25,
    padding: 3,
    paddingHorizontal: 150,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subheader:{
    fontSize: 20,
    padding: 3,
    paddingHorizontal: 162,
    fontWeight: 'bold',  
  },

  inputbox: {
    height: 50,
    width: 350,
    backgroundColor: 'white',
    borderRadius: '25px',
    alignItems: 'center',
    textAlign: 'center',

  },
  button: {
    backgroundColor: 'hotpink',
    color : 'white',
    height: 30,
    width: 150,
    borderRadius: '25px',
    alignItems: 'center',
    textAlign: 'center',

  },

  italiclink: {
    fontStyle: 'italic',
  },
  error:{
    color: 'red',
  },
  success:{
    color: 'green',
  },

});
