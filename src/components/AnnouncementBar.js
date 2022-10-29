import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AnnouncementBar = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.announcementHeaderText}>Announcements</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d7eb6'
  },
  announcementHeaderText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginVertical: 12,
    textAlign: 'center'
  }
});

export default AnnouncementBar;