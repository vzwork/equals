import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AnnouncementBar from "../../components/AnnouncementBar";

import NavBar from "../../components/NavBar";

const Homepage = () => {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>EQuALS</Text>
        </View>

        <AnnouncementBar />

        <View style={styles.examContainer}>
          <Text style={styles.examHeaderText}>Choose Your Exam Topic:</Text>
          <Button title="View All Exam Topics" />
        </View>

      </View>

      <NavBar style={styles.navbar}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  contentContainer: {
    // margin: 20
  },
  headerContainer: {
    marginVertical: 20
  },
  examContainer: {
    margin: 20 
  },
  navbar: {
  },
  headerText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: '#173C6F',
    // marginBottom: 20
  },
  examHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20
  }
});

export default Homepage;