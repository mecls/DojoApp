import React from 'react';
import { SafeAreaView, StyleSheet, Text, SectionList, FlatListComponent, FlatList} from 'react-native';
import ClassDetailsComponent from '@/src/components/ClassDetails';
import classes from '@/assets/data/classes';

export default function ClassDetails() {
  return (
    <SafeAreaView style={styles.appContainer} >
        <Text style={[styles.title, styles.titleBold]}>Class Details</Text>
        {/* MAKE IT SHOW THE DETAILS BY THE ID */}
        {/* <SectionList
      sections={classes}
      renderItem={({item}) => (
        <ClassDetailsComponent d_class={item}/>
      )}
    /> */}
    <FlatList data={classes} renderItem={({item})=><ClassDetailsComponent d_classId={item}/>}/>
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

