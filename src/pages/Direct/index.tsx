import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import leftArrowIcon from '../../assets/left-arrow.png';
import downArrowIcon from '../../assets/down-arrow.png';
import listIcon from '../../assets/list.png';
import editIcon from '../../assets/edit.png';
import searchIcon from '../../assets/lupa.png';
import configIcon from '../../assets/configuration.png';
import friend1Icon from '../../assets/fotin.png';
import friend2Icon from '../../assets/iconeragner.png';
import sendImageIcon from '../../assets/camera.png';

import { 
  Container,
  TextDirect,
  TextChoose,
  TextSearchBar,  
  ViewHeaderDirect,
  ViewButtonsDirect,
  IconHeader,
  IconDown,
  FriendsIcon,
  ButtonBack,
  AccountSelect,
  RightIcons,
  SearchBar,
  ChooseSide,
  FriendRow,
  FriendName
} from './styles';

const Direct: React.FC = () => {
  const { navigate } = useNavigation();
  return (
      <Container>
        <StatusBar   />
        <ViewHeaderDirect>
          <ViewButtonsDirect>
            <ButtonBack  onPress={() => navigate('Feed')}>
              <IconHeader resizeMode="contain" source={leftArrowIcon} />
            </ButtonBack>
            <AccountSelect>
              <TextDirect>marcosaf9</TextDirect>
            </AccountSelect>
            <IconDown resizeMode="contain" source={downArrowIcon} />
            <RightIcons>
              <IconHeader resizeMode="contain" source={listIcon} />
              <IconHeader resizeMode="contain" source={editIcon} />
            </RightIcons>
          </ViewButtonsDirect>
        </ViewHeaderDirect>
        <SearchBar>
          <IconHeader resizeMode="contain" source={searchIcon} />
          <TextSearchBar>Pesquisar</TextSearchBar>
          <IconHeader resizeMode="contain" source={configIcon} />
        </SearchBar>
        <ChooseSide>
          <TextChoose>Principal</TextChoose>
          <TextChoose>Geral</TextChoose>
        </ChooseSide>
        <FriendRow>
          <FriendsIcon resizeMode="contain" source={friend1Icon}/>
          <FriendName>
            <TextChoose>Josnei</TextChoose>
            <TextChoose>Online há 14 anos</TextChoose>
          </FriendName>  
          <IconHeader resizeMode="contain" source={sendImageIcon}/>
        </FriendRow>
        <FriendRow>
          <FriendsIcon resizeMode="contain" source={friend2Icon}/>
          <FriendName>
            <TextChoose>Ragner</TextChoose>
            <TextChoose>Online há 8 horas</TextChoose>
          </FriendName>  
          <IconHeader resizeMode="contain" source={sendImageIcon}/>
        </FriendRow>
      </Container>
  ); 
}


export default Direct;