import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { planets } from './src/planets';

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <LinearGradient
        colors={['#e9d0fd', '#7b53c1', '#ec548f', '#fde3d6', '#ffffff']}
        style={styles.gradientBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <StatusBar style="light" />
          <View style={styles.innerContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Explore o sistema solar!</Text>
            </View>

              <View style={styles.planetView}>

                <View style={styles.planetContainer}>
                  <Text style={styles.planetName}>Terra</Text>
                  <Image
                    style={styles.planetImg}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg' }}
                  />
                    <View style={styles.planetInfo}>
                      <Text>Descrição: O único planeta conhecido por abrigar vida.</Text>
                      <Text>Quantidade de Satelites: 1</Text>
                      <Text>Área de superfície: 510100000 KM²</Text>
                      <Text>Velocidade orbital: 29.78 KM/s</Text>
                      <Text>Período de rotação(dias): 1</Text>
                    </View>
                </View>
              </View>
            </View>

        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    margin: 40,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#fff', // Changed to white for better contrast
    fontWeight: 'bold',
  },
  planetView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  planetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: 350,
    height: 350,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: '#fde3d6'

  },
  planetImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10
  },
  planetName: {
    fontSize: 24,
  },
  planetInfo: {
    alignItems: 'left',
    textAlign: 'left',
    fontSize: 24
  }
});
