import { useMemo, useState } from "react"
import { StyleSheet } from "react-native"
import { Button, Card, TextInput } from "react-native-paper"

export const AuthForm = () => {
  const [password, onChangePassword] = useState<string>()
  const [isSecureText, setIsSecureText] = useState<boolean>(true)

  const toggleSecureText = () => setIsSecureText((value) => !value)

  const Icon = useMemo(() => {
    if (isSecureText) return <TextInput.Icon icon="eye" onPress={toggleSecureText} />

    return <TextInput.Icon icon="eye-off" onPress={toggleSecureText} />
  }, [isSecureText])

  return (
    <Card style={styles.box}>
      <Card.Content>
        <TextInput
          onChangeText={onChangePassword}
          placeholder="Digite a senha"
          mode="outlined"
          value={password}
          style={styles.input}
          placeholderTextColor={'black'}
          secureTextEntry={isSecureText}
          right={Icon}
          dense
        />
      </Card.Content>
      <Card.Actions>
        <Button style={styles.button} icon="lock-open" mode="contained" onPress={() => alert('Desbloquear')}>
          Desbloquear
        </Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
  box: {
    marginTop: 50,
    width: '90%',
    display: 'flex',
    borderCurve: 'continuous',
    paddingTop: 10,
    paddingBottom: 10 
  },
  button: {
    width: '100%',
    marginTop: 30
  },
  icon: {
    marginTop: 10
  }
});
