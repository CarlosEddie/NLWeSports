import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  }
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps{
    data: GameCardProps;
}

export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground style={styles.cover} source={{uri: data.bannerUrl}}>
            <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
                <Text style={styles.name}>
                    {data.title}
                </Text>

                <Text style={styles.ads}>
                    {data._count.ads} anúncios
                </Text>
            </LinearGradient>
        </ImageBackground>

    </TouchableOpacity>
  );
}