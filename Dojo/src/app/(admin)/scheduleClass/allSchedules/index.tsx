import SmallCompDetails from '@/src/components/SmallCompForDetails';

import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, Button, TouchableOpacity, View} from 'react-native';
import { FlatList } from 'react-native';
import classes from '@/assets/data/classes';


export default function AllSchedules() {
  return (
    <SafeAreaView style={styles.appContainer} >
        <Text style={[styles.title, styles.titleBold]}>All Schedules</Text>
        <FlatList
        data={classes}
        renderItem={({item})=> <SmallCompDetails d_class={item}/>}
        />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo:{
    padding:0,
    marginTop:15,
    marginBottom:80,
    marginHorizontal:50,
    alignSelf:'center'
  },
  moreText:{
    marginTop:10,
    marginBottom:-50,
    fontSize:20,
    fontWeight: 'bold'
  },
  title:{
    marginRight:100,
    marginTop:-70,
    marginBottom:30,
    marginLeft:10,
    fontSize:36,

    fontWeight:'200',
    fontStyle: 'italic',
    alignSelf:'auto'
  },
  titleBold:{
    fontWeight:'bold'
  }
});

