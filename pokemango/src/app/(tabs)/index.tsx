import { useEffect, useState } from "react";
import { Pokemon } from "@/src/shared/types/pokemon.interface";
import PagerView from "@/src/modules/products/product-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTabTheme } from "@/src/shared/context/tab-theme-context";

export default function Index() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const { tabColor } = useTabTheme();

  useEffect(() => {
    // fetch pokemon from api
    fetchPokemon();
  }, []);

  const fetchPokemon = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20",
      );
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_default,
            imageBack: details.sprites.back_default,
            types: details.types,
          };
        }),
      );
      setPokemonList(detailedPokemons);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tabColor + 60 }} edges={['top', 'left', 'right']}>
      <PagerView pokemonList={pokemonList} />
    </SafeAreaView>
  );
}
