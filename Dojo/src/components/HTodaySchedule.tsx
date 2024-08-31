import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TodaySchedule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODAY SCHEDULE</Text>
      <View style={styles.scheduleBox}>
        <Image  style={styles.icon} source={require('../../assets/images/Medal_First_Place.png')}/>
        <Text style={styles.scheduleText}><Text style={[styles.scheduleText,styles.scheduleTextBold]}>CLASS:</Text> BJJ</Text>
        <Text style={styles.scheduleText}><Text style={[styles.scheduleText,styles.scheduleTextBold]}>TIME:</Text> 18:30h</Text>
        <Text style={styles.scheduleText}><Text style={[styles.scheduleText,styles.scheduleTextBold]}>COACH:</Text> Brian</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.button} onPress={()=>{console.warn('Add to Calender');}}  >
            <Text style={styles.buttonText}>Add to Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{console.warn('Details');}} style={[styles.button,styles.buttonSpacing]}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.largeButton} onPress={()=>{console.warn('Schedule Next Class');}} >
          <Text style={styles.largeButtonText}>Schedule next class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    alignContent:'center',
    flex:0.5,
    margin:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  scheduleBox: {
    backgroundColor: '#1E3A8A', // Dark blue background
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  icon: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -10,
    right: 20,
  },
  scheduleText: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 5,
  },
  scheduleTextBold:{
    fontWeight:'500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF5733', // Red-orange background
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    justifyContent:'space-between'
  },
  buttonSpacing: {
    marginLeft: 20, // Add space between the buttons
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  largeButton: {
    backgroundColor: '#FF5733', // Red-orange background
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  largeButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TodaySchedule;
