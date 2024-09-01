import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';

const FeaturesScreen = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require('../../assets/images/FeaturesMan.png')}/>
        <Pressable>
            <View style={styles.moduleBox} >
                <TouchableOpacity style={styles.scheduleBox}>
                <Text style={[styles.scheduleText,styles.scheduleTextBold]}>Interactive Learning</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.scheduleBox, styles.moduleVerticalSpacing]}>
                <Text style={[styles.scheduleText,styles.scheduleTextBold]}>Competition Results</Text> 
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.scheduleBox}>
                <Text style={[styles.scheduleText,styles.scheduleTextBold]}>OTHER STUFF</Text> 
                </TouchableOpacity> */}
            </View>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    alignContent:'center',
    alignItems:'stretch',
    flex:1,
  },
  icon:{
    justifyContent: 'center',
    marginTop:120,
    marginBottom:-220
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  moduleBox:{
    margin:20,
    justifyContent:'space-around',
    alignItems: 'center'
    
  },
  scheduleBox: {
    backgroundColor: '#1E3A8A', // Dark blue background
    borderRadius: 15,
    padding: 30,
    marginTop:250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
    justifyContent: 'space-between'
  },
  scheduleText: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 5,
    
  },
  scheduleTextBold:{
    fontWeight:'bold',
  },
  moduleVerticalSpacing: {
    marginTop: 20, // Add space between the buttons
  }
});

export default FeaturesScreen;
