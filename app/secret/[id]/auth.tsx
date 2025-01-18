import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router/build/hooks'
import { AuthForm } from './components/AuthForm';
import { Appbar } from 'react-native-paper';

const AuthScreen = () => {
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
          <Text style={styles.title}>Arquivo protegido por senha</Text>
          <Text style={styles.subtitle}>Digite a senha corretamente para continuar</Text>
          <AuthForm />
        </View>
    </>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});