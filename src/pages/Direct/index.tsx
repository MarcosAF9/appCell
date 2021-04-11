import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

import leftArrowIcon from '../../assets/left-arrow.png';
import downArrowIcon from '../../assets/down-arrow.png';
import listIcon from '../../assets/list.png';
import editIcon from '../../assets/edit.png';
import searchIcon from '../../assets/lupa.png';
import configIcon from '../../assets/configuration.png';
import { 
  Container,
  TextDirect,  
  ViewHeaderDirect,
  ViewButtonsDirect,
  IconHeader,
  IconDown,
  ButtonBack,
  AccountSelect,
  RightIcons,
  SearchBar
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
          <TextInput />
          <IconHeader resizeMode="contain" source={configIcon} />
        </SearchBar>
      </Container>
  ); 
}


export default Direct;