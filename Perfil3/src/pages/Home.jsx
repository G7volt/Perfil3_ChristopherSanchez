import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const perfil = {
  nombre: 'Christopher Sánchez',
  carnet: '20230062',
  seccion: 'A-2',
};

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#1a1a2e]">
      <View className="flex-1 items-center justify-center px-6">
        <Image
          source={require('../../assets/dragon-ball-splash.png')}
          className="mb-8 h-40 w-40"
          resizeMode="contain"
        />

        <View className="w-full rounded-2xl bg-white/10 p-6">
          <Text className="mb-4 text-center text-2xl font-bold text-orange-400">
            {perfil.nombre}
          </Text>
          <Text className="mb-2 text-base text-white">
            <Text className="font-semibold text-orange-300">Carnet: </Text>
            {perfil.carnet}
          </Text>
          <Text className="text-base text-white">
            <Text className="font-semibold text-orange-300">Sección: </Text>
            {perfil.seccion}
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Planets')}
          className="mt-8 w-full items-center rounded-full bg-orange-500 py-4 active:bg-orange-600"
        >
          <Text className="text-lg font-bold text-white">Ver planetas</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
