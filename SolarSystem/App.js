import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PlanetCard from './components/PlanetCard';
import { styles } from './src/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.viewSafe}>
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
            <PlanetCard/>
            </View>

        </ScrollView>
      </LinearGradient>
    </View>
    </SafeAreaView>
  );
}