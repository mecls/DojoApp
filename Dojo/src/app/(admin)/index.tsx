import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import TodaySchedule from '../../components/HTodaySchedule';
import LastCompResults from '../../components/HCompetitionResults';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}  >
      <Image style={styles.logo} source={require('../../../assets/images/Logo.png')}/>
      <TodaySchedule />
      <LastCompResults/>
      <Link href={'/(admin)/features/'}  style={styles.moreText}>More +</Link>
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
    marginTop:-70,
    marginBottom:10,
    marginHorizontal:50,
    alignSelf:'center'
  },
  moreText:{
    marginTop:10,
    marginBottom:-50,
    fontSize:20,
    fontWeight: 'bold'
  }
});
