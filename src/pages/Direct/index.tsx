import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import ComponentDirects from '../../components/ComponentDirects';

import leftArrowIcon from '../../assets/left-arrow.png';
import downArrowIcon from '../../assets/down-arrow.png';
import listIcon from '../../assets/list.png';
import editIcon from '../../assets/edit.png';
import cameraIcon from '../../assets/camera.png';

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
  CameraFooter,
  TextFooter
} from './styles';

const Direct: React.FC = () => {
  const { navigate } = useNavigation();
  return (
      <Container>
        <StatusBar />
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
        <ComponentDirects />
        <CameraFooter>
          <IconHeader resizeMode="contain" source={cameraIcon} />
          <TextFooter>Câmera</TextFooter>
        </CameraFooter>
      </Container>
  ); 
}


export default Direct;