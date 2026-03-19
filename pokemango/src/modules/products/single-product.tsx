import { Pokemon } from "@/src/shared/types/pokemon.interface";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  pokemon: Pokemon;
}

const SingleProduct = ({ pokemon }: Props) => {
  return (
    <View>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.type}>{pokemon.types[0].type.name}</Text>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: pokemon.image }}
          style={{ width: 150, height: 150 }}
        />
        <Image
          source={{ uri: pokemon.imageBack }}
          style={{ width: 150, height: 150 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
});

export default SingleProduct;
