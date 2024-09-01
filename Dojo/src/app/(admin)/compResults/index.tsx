import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';

export default function Features() {
  return (
    <SafeAreaView style={styles.appContainer} >
      <Image style={styles.logo} source={require('../../../../assets/images/Logo.png')}/>
        <Text style={styles.title}>More +</Text>
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
    marginTop:30,
    marginBottom:20,
    marginHorizontal:50,
    alignSelf:'center'
  },
  title:{
    marginRight:100,
    marginTop:20,
    marginBottom:-80,
    fontSize:24,
    fontWeight:'200',
    fontStyle: 'italic'
  },
  titleBold:{
    fontWeight:'bold'
  }
});
