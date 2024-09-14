import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PlanetCard from './components/PlanetCard';
import { styles } from './src/styles';
import { useState } from 'react';
import { planets } from './src/planets';

export default function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  const handleNext = () => {
    if (currentPlanetIndex < planets.length - 1) {
      setCurrentPlanetIndex (currentPlanetIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPlanetIndex > 0) {
      setCurrentPlanetIndex(currentPlanetIndex -1);
    }
  };

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
            <PlanetCard planet={planets[currentPlanetIndex]}/>
            <View style={styles.navButtonView}>
            <TouchableOpacity
              style={[styles.navButton, { opacity: currentPlanetIndex === 0 ? 0.5 : 1 }]}
              onPress={handlePrevious}
              disabled={currentPlanetIndex === 0}
            >
              <Text style={styles.navButtonText}>Anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, { opacity: currentPlanetIndex === planets.length - 1 ? 0.5 : 1 }]}
              onPress={handleNext}
              disabled={currentPlanetIndex === planets.length - 1}
            >
              <Text style={styles.navButtonText}>Próximo</Text>
              </TouchableOpacity>
            </View>
            </View>

        </ScrollView>
      </LinearGradient>
    </View>
    </SafeAreaView>
  );
}