import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

export const AuthForm = () => {
  const [password, onChangePassword] = useState<string>()

  return (
    <View style={styles.box}>
      <TextInput
        onChangeText={onChangePassword}
        placeholder="Digite a senha"
        value={password}
        style={styles.input}
        placeholderTextColor={'black'}
        secureTextEntry
      />
      <Button title="Desbloquear" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'black',
    borderRadius: 5
  },
  box: {
    marginTop: 50,
    height: 200,
    width: '90%',
    backgroundColor: '#d9d9d9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    boxShadow: '14px 9px 19px -3px rgba(0,0,0,0.05)'
  },
});
