import TodaySchedule from '@/src/components/STodaySchedules';
import TomorrowSchedule from '@/src/components/STomorrowSchedule';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, Button, TouchableOpacity, View} from 'react-native';

export default function Features() {
  return (
    <SafeAreaView style={styles.appContainer} >
      <Image style={styles.logo} source={require('../../../../assets/images/Logo.png')}/>
        <Text style={[styles.title, styles.titleBold]}>Schedules</Text>
        <TodaySchedule/>
        <TomorrowSchedule/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.button} onPress={()=>{console.warn('Add to Calender');}}  >
            <Text style={styles.buttonText}>Schedule Class</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{console.warn('Details');}} style={[styles.button,styles.buttonSpacing]}>
            <Text style={styles.buttonText}>All</Text>
          </TouchableOpacity>
        </View>
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
    marginTop:10,
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
  spaceBetweenSchedules:{
    marginBottom:-20
  },
  title:{
    marginRight:100,
    marginTop:-70,
    marginBottom:0,
    marginLeft:-60,
    fontSize:36,

    fontWeight:'200',
    fontStyle: 'italic',
    alignSelf:'auto'
  },
  titleBold:{
    fontWeight:'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: -50,
    marginBottom:40,
  },
  // button: {
  //   backgroundColor: '#FF5733', // Red-orange background
  //   borderRadius: 15,
  //   paddingVertical: 15,
  //   paddingHorizontal: 15,
  //   marginTop: 0,
  //   justifyContent:'space-between'
  // },
  button: {
    backgroundColor: '#FF5733', // Red-orange background
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 0,
    justifyContent: 'space-between',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  buttonSpacing: {
    marginLeft: 20, // Add space between the buttons
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

