import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web';

const app = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: Colors[colorScheme ?? 'light'].text, ...styles.text }}>Nenhum arquivo salvo</Text>
      <Text style={{ color: Colors[colorScheme ?? 'light'].text, ...styles.tinyText }}>Para criar um novo arquivo clique no botão abaixo</Text>
      <Button
        title='Adicionar novo item'
      />
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tinyText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 10,
    marginBottom: 40
  },
})
