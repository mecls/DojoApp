import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Class } from '../app/types';

type ClassItemProps={
    data: Class;
};

const SmallCompDetails = ({ data }: ClassItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.date}</Text>
      <View style={styles.scheduleBox}>
        <Text style={styles.scheduleText}><Text style={[styles.scheduleText,styles.scheduleTextBold]}>CLASS:</Text>{data?.classType}</Text>
        <Text style={styles.scheduleText}><Text style={[styles.scheduleText,styles.scheduleTextBold]}>TIME:</Text>{data?.time}</Text>
        <Text style={styles.scheduleText}><Text style={[styles.scheduleText,styles.scheduleTextBold]}>COACH:</Text>{data?.professor}</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>{console.warn('Details');}} style={[styles.button]}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    alignContent:'center',
    flex:1,
    margin:10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 5,
    marginTop:-10,
    marginLeft:-20,
  },
  scheduleBox: {
    backgroundColor: '#1E3A8A', // Dark blue background
    borderRadius: 15,
    padding:20,
    paddingRight:180,
    paddingBottom:30,
    marginLeft:-20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  scheduleText: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 5,
  },
  scheduleTextBold:{
    fontWeight:'500',
  },
  buttonContainer: {
   flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent:'center',
    marginHorizontal:-140,
    marginTop:-60
  },
  button: {
    backgroundColor: '#FF5733', // Red-orange background
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 0,
    justifyContent:'flex-end'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default SmallCompDetails;
