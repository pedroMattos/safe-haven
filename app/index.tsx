import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { SimpleList } from '@/moks/ListOfSecrets'
import { Secret } from '@/components/Secret';

const app = () => {
  const colorScheme = useColorScheme();

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
            <Secret {...item} />
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
