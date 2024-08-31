import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodaySchedule from '../../components/HTodaySchedule';
import LastCompResults from '../../components/HCompetitionResults';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <TodaySchedule />
      <LastCompResults/>
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
});
