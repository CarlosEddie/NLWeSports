import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame( { id, title, bannerUrl }: GameCardProps ) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://192.168.56.1:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);


  return (
    <Background>
      <View style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title='Encontre seu duo!' subtitle='Selecione o Game que deseja jogar...'/>

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          contentContainerStyle={styles.contentList}
          /*showsHorizontalScrollIndicator={false}
          horizontal*/
        /> 
        
      </View>
    </Background>
    
  );
}