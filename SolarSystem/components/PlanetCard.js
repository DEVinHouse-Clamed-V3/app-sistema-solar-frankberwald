import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '../src/styles';

export default function PlanetCard ({ planet }) {
return (
  <View style={styles.planetView}>
    <View key={planet.id} style={styles.planetContainer}>
      <Text style={styles.planetName}>{planet.nome}</Text>
      <Image
        style={styles.planetImg}
        source={{ uri: planet.image }}
      />
        <View style={styles.planetInfoView}>
          <Text style={styles.planetInfo}>Descrição: {planet.descricaoBreve}</Text>
          <Text style={styles.planetInfo}>Quantidade de Satelites: {planet.quantidadeSatelites}</Text>
          <Text style={styles.planetInfo}>Área de superfície: {planet.areaSuperficieKm2} KM²</Text>
          <Text style={styles.planetInfo}>Velocidade orbital: {planet.velocidadeOrbitalMediaKmS} KM/s</Text>
          <Text style={styles.planetInfo}>Período de rotação(dias): {planet.periodoRotacaoDias}</Text>
        </View>
    </View>
    </View>
);
}