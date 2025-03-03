import { useMemo, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Card, TextInput, Icon as PaperIcon } from "react-native-paper"

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
      <View style={styles.titleIcon}>
        <PaperIcon source="lock" size={48} color="rgb(107 114 128)" />
      </View>
      <Text style={styles.title}>Arquivo protegido</Text>
      <Text style={styles.subtitle}>Digite sua senha para continuar</Text>
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
    borderRadius: 4,
    marginTop: 20
  },
  box: {
    width: '90%',
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 4
  },
  button: {
    width: '100%',
    marginTop: 30,
    borderRadius: 2
  },
  icon: {
    marginTop: 10
  },
  titleIcon: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    color: 'rgb(107 114 128)'
  },
});
