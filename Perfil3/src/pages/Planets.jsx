import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from 'react-native';
import useDragon from '../hooks/hookDragon';

function PlanetCard({ planet }) {
  return (
    <View className="mb-5 overflow-hidden rounded-2xl bg-white/10">
      <Image source={{ uri: planet.image }} className="h-48 w-full" resizeMode="cover" />
      <View className="p-4">
        <View className="mb-2 flex-row items-center justify-between">
          <Text className="flex-1 text-xl font-bold text-orange-400">{planet.name}</Text>
          {planet.isDestroyed && (
            <Text className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
              Destruido
            </Text>
          )}
        </View>
        <Text className="text-sm leading-5 text-gray-200">{planet.description}</Text>
      </View>
    </View>
  );
}

export default function Planets() {
  const { planets, loading, error, refetch } = useDragon();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-[#1a1a2e]">
        <ActivityIndicator size="large" color="#fb923c" />
        <Text className="mt-3 text-white">Cargando planetas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-[#1a1a2e] px-6">
        <Text className="mb-4 text-center text-white">{error}</Text>
        <Pressable onPress={refetch} className="rounded-full bg-orange-500 px-6 py-3">
          <Text className="font-bold text-white">Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      className="flex-1 bg-[#1a1a2e]"
      contentContainerClassName="p-4"
      data={planets}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PlanetCard planet={item} />}
    />
  );
}
