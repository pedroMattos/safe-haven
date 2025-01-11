import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleList } from '@/moks/ListOfSecrets'
import { Secret, SecretProps } from '@/components/Secret';
import { type Href, useRouter } from 'expo-router';

const app = () => {
  const router = useRouter()

  const pathToSecret = (hasPassword: boolean): '/secret/[id]/auth' | '/secret/[id]' => {
    return hasPassword ? '/secret/[id]/auth' : '/secret/[id]'
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Nenhum arquivo salvo</Text>
        <Text style={styles.tinyText}>Para criar um novo arquivo clique no botão abaixo</Text>

        <FlatList
          data={SimpleList}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push({ pathname: pathToSecret(!!item.password), params: { id: item.id } })}>
              <Secret {...item} />
            </TouchableOpacity>
          )}
        />
        <Button
          title='Adicionar novo item'
        />
      </SafeAreaView>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 12
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
