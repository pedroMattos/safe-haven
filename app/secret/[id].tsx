import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'

const secret = () => {
  const local = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secret Page</Text>
      <Text style={styles.subtitle}>ID: {local.id}</Text>
    </View>
  )
}

export default secret

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: 'white'
  },
});