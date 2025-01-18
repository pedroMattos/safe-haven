import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks'
import { Appbar } from 'react-native-paper';

const secret = () => {
  const local = useLocalSearchParams();
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={handleBack} />
        <Appbar.Content title="Segredo Protegido" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.title}>Secret Page</Text>
        <Text style={styles.subtitle}>ID: {local.id}</Text>
      </View>
    </>
  )
}

export default secret

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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