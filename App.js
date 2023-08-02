import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { fire } from './credentials';
import { ref, onValue } from 'firebase/database';
import { LoginForm } from './form';


const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const startCountRef = ref(fire, 'Login/');
  onValue(startCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
    const newPosts = Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    }));
    setData(newPosts);
  }
});
}, []);

const Item = ({item}) => (
  <View style={styles.item} key={item.id}>
    <Text> Name: {item.name}</Text>
    <Text> Password: {item.password} </Text>
    <Text></Text>
  </View>
);


  return(
    <><View contentContainerStyle={styles.container}>
      <Text style={styles.heading}> Fetching through flatlist </Text>
      {data.map(item => (
        <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={(item) => item.id} />))} </View>
          <LoginForm /> </>
       
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afeeee',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,

  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item:{
    backgroundColor: 'lightyellow',
    padding: 30,
    paddingLeft: 30,
    marginVertical: 18,
    marginHorizontal: 30,
    width: '100%',
   
  },

  formContainer: {
    marginTop: 20,
  },
});

export default FetchData;





