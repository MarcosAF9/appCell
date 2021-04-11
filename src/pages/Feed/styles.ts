import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`

    background-color: #fff;
    flex: 1;
`;

export const ViewHeaderInstagram = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 30px 10px 0;
`;

export const ImageInstagram = styled.Image`
    width: ${width / 3}px;
    height: 50px;
`;

export const ViewButtonsHeader = styled.View`
    flex-direction: row;
`;

export const ButtonDirect = styled.TouchableOpacity``;

export const IconHeader = styled.Image`
    width: ${width / 15}px;
    height: 50px;
    margin: 0 5px;
`;
