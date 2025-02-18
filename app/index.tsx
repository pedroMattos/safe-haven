import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleList } from '@/moks/ListOfSecrets'
import { Secret } from '@/components/Secret';
import { useRouter } from 'expo-router';
import { FAB, PaperProvider } from 'react-native-paper';
import { CloudCount } from '@/components/ui/CloudCount';

const app = () => {
  const router = useRouter()

  const pathToSecret = (hasPassword: boolean): '/secret/[id]/auth' | '/secret/[id]' => {
    return hasPassword ? '/secret/[id]/auth' : '/secret/[id]'
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <SafeAreaView>
          {!SimpleList.length && <View>
            <Text style={styles.text}>Nenhum arquivo salvo</Text>
            <Text style={styles.tinyText}>Para criar um novo arquivo clique no botão abaixo</Text>
          </View>}

          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Seus Arquivos</Text>
            <CloudCount count={2} />
          </View>
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
        </SafeAreaView>

        <FAB
          style={styles.fab}
          icon="plus"
          animated
        />
      </View>
    </PaperProvider>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 20
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
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tinyText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 10,
    marginBottom: 40
  },
  fab: {
    position: 'absolute',
    right: 0,
    margin: 16,
    bottom: 0
  }
})
