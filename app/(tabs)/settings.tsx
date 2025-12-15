import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const settingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>settingsScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default settingsScreen