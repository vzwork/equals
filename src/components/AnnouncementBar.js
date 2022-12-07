import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from '../colors/Colors.mjs';

const AnnouncementBar = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.announcementHeaderText}>Announcements</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent.secondary
  },
  announcementHeaderText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.background.primary,
    marginVertical: 12,
    textAlign: 'center'
  }
});

export default AnnouncementBar;