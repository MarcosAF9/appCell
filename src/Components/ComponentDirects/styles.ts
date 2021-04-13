import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 81%;
`;

export const ScrollViewListDirects = styled.ScrollView`
`;

export const IconHeader = styled.Image`
    width: 20px;
    height: 50px;
    margin: 0 12px;
`;

export const SearchBar = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #eee;
    margin: 20px 20px 10px;
    border-radius: 15px;
    height: 40px;
`;

export const TextSearchBar = styled.Text`
    font-weight: bold;
    color: grey;
    margin-left: -170px;
    font-size: 18px;
`;

export const ChooseSide = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 70px;
`;

export const TextChoose = styled.Text`
    font-weight: bold;
`;


export const ButtonDirectMsg = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 5px;
`;


const tamanhoDaImagem = 55;
export const ImageProfile = styled.Image`
    width: ${tamanhoDaImagem}px;
    height: ${tamanhoDaImagem}px;
    border-radius: 50px;
    margin-left: 15px;
`;

export const TextNameProfile = styled.Text`
`;

export const TextOnlineTime = styled.Text`
    color: gray;
`;

export const NameTime = styled.View`
    margin-left: -110px;
`;
    
export const IconDirectMsg = styled.Image`
    width: 20px;
    height: 50px;
    margin: 0 15px;
`;
