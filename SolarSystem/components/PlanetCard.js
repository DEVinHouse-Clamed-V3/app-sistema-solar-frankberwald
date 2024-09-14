import { Text, View, Image, StyleSheet } from 'react-native';
import { planets } from '../src/planets';
import { styles } from '../src/styles';

export default function PlanetCard () {
return (
  <View style={styles.planetView}>
  {planets.map((planets) => (
    <View key={planets.id} style={styles.planetContainer}>
      <Text style={styles.planetName}>{planets.nome}</Text>
      <Image
        style={styles.planetImg}
        source={{ uri: planets.image }}
      />
        <View style={styles.planetInfoView}>
          <Text style={styles.planetInfo}>Descrição: {planets.descricaoBreve}</Text>
          <Text style={styles.planetInfo}>Quantidade de Satelites: {planets.quantidadeSatelites}</Text>
          <Text style={styles.planetInfo}>Área de superfície: {planets.areaSuperficieKm2} KM²</Text>
          <Text style={styles.planetInfo}>Velocidade orbital: {planets.velocidadeOrbitalMediaKmS} KM/s</Text>
          <Text style={styles.planetInfo}>Período de rotação(dias): {planets.periodoRotacaoDias}</Text>
        </View>
    </View>
  ))}
    </View>
);
}