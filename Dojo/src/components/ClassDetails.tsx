import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Class } from '../app/types';

// Assuming you have the classes array defined in a separate file
import classes from '../../assets/data/classes'; // Adjust the path if necessary

type ClassItemProps = {
  d_classId: Class;
};

const ClassDetailsComponent = ({ d_classId }: ClassItemProps) => {
  const classDetails = classes.find((classItem) => classItem.id === d_classId.id);

  if (!classDetails) {
    return <Text>Class not found</Text>; // Handle case when class is not found
  }
  return(

        <View style={styles.container}>
            <Text style={styles.title}>Date: <Text>{d_classId?.date}</Text></Text>
            <Text style={styles.title}>Class: <Text>{d_classId?.classType}</Text></Text>
            <Text style={styles.title}>Time: <Text>{d_classId?.time}</Text></Text>
            <Text style={styles.title}>Coach: <Text>{d_classId?.professor}</Text></Text>
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
    marginTop:10,
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



export default ClassDetailsComponent;