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
                <TouchableOpacity onPress={()=>{console.warn('Details');}} style={styles.button}>
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignContent:'space-evenly',
    marginTop:150,
    flex:-0.3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    marginRight:30,
},
  compBox: {
    backgroundColor: '#1E3A8A', // Dark blue background
    borderRadius: 15,
    paddingRight:80,
    paddingBottom:20,
    paddingTop:20,
    marginRight:-5,
    marginLeft:-5,
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
    top: 10,
    right: 30,
  },
  compText: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 5,
    marginLeft:20,
    textAlign: 'left',    
  },
  compTextBold:{
    fontWeight:'500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,    
  },
  button: {
    backgroundColor: '#FF5733', // Red-orange background
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 0,    
    marginRight:-50
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});



export default HCompetitionResults;