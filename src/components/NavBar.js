import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NavBar = () => {
  return (

    <View style={styles.containter}>

      <Pressable style={[styles.pressableItem, styles.pressableHome]}>
        <Icon
          name='home'
          style={styles.navIcon}
        />
      </Pressable>

      <Pressable style={[styles.pressableItem, styles.pressableChart]}>
        <Icon
          name='bar-chart'
          style={styles.navIcon}
        />
      </Pressable>

      <Pressable style={[styles.pressableItem, styles.pressableHistory]}>
        <Icon
          name='history'
          style={styles.navIcon}
        />
      </Pressable>
      
      <Pressable style={[styles.pressableItem, styles.pressableUser]}>
        <Icon
          name='user-circle'
          style={styles.navIcon}
        />
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  containter: {
    backgroundColor: '#2499FB',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  pressableItem: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  pressableHome: {
    
  },
  pressableChart: {
    // backgroundColor: 'green'
  },
  pressableHistory: {

  },
  pressableUser: {

  },
  navIcon: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 45,
    textAlignVertical: 'center'
  }
});

export default NavBar;