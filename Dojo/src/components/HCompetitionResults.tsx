import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HCompetitionResults = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>LAST COMPETITION RANKING'S</Text>
            <View style={styles.compBox}>
            <Image  style={styles.icon} source={require('../../assets/images/Leaderboard.png')}/>
            <Text style={styles.compText}><Text style={[styles.compText,styles.compTextBold]}>GOLD'S:</Text>5</Text>
            <Text style={styles.compText}><Text style={[styles.compText,styles.compTextBold]}>SILVER'S:</Text>3</Text>
            <Text style={styles.compText}><Text style={[styles.compText,styles.compTextBold]}>BRONZE'S:</Text>7</Text>
       
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>{console.warn('Details');}} style={[styles.button,styles.buttonSpacing]}>
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    padding: 11,
    alignContent:'center',
    margin:32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  compBox: {
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
  compText: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 5,
  },
  compTextBold:{
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
    fontSize: 14,
    fontWeight: 'bold',
  }
});



export default HCompetitionResults;