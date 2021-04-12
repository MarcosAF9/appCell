import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import ComponentStories from '../../Components/ComponentStories';


import directIcon from '../../assets/send.png';
import heartIcon from '../../assets/heart.png';
import addIcon from '../../assets/add.png';
import { 
  Container, 
  ImageInstagram, 
  ViewHeaderInstagram, 
  ButtonDirect, 
  IconHeader, 
  ViewButtonsHeader 
} from './styles';


const Feed: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <StatusBar   />
      <ViewHeaderInstagram>
        <ImageInstagram
          resizeMode="contain" 
          source={{uri: 'https://images-ext-1.discordapp.net/external/9p6QyCk1Pdyo8GKhZw-Q8GdgWYMxAaviWPyVOf6wS0k/https/upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?width=400&height=143'}}
        />
        <ViewButtonsHeader>
          <IconHeader resizeMode="contain" source={addIcon} />
          <IconHeader resizeMode="contain" source={heartIcon} />
          <ButtonDirect  onPress={() => navigate('Direct')}>
            <IconHeader resizeMode="contain" source={directIcon} />
          </ButtonDirect>
        </ViewButtonsHeader>
      </ViewHeaderInstagram>
      <ComponentStories />
    </Container>
  );
}

export default Feed;