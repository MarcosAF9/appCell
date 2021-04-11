import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const ViewHeaderDirect = styled.View`
    align-items: center;
    flex-direction: row;
    margin: 50px 2px 0;
`;

export const ViewButtonsDirect = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonBack = styled.TouchableOpacity`
    width: ${width / 10}px;
    height: 50px;
`;

export const IconHeader = styled.Image`
    width: 20px;
    height: 50px;
    margin: 0 12px;
`;

export const IconDown = styled.Image`
    width: 32px;
    height: 12px;
`;

export const TextDirect = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const AccountSelect = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 25px;
`;

export const RightIcons = styled.View`
    flex-direction: row;
    margin-left: 105px;   
`;

export const SearchBar = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: grey;
`;