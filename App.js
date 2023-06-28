import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from './Component/Header';
import Todoitems from './Component/Todoitems';
import Addtodo from './Component/Addtodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) =>{
    setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
          
          {/* Header */}
          < Header />

          <View style={styles.content}>
              <Addtodo  submitHandler={submitHandler}/>
                {/* to Form */}
                <View style={styles.list}>
               
                 {/* Flat List*/}
                    <FlatList
                      data={todos}
                      renderItem={({item})=>(
                        <Todoitems item={item} pressHandler={pressHandler}/>
                      )}
                    />

                </View>
          
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20,
  }
});
