import React, { useEffect, useState } from 'react';

import sendImageIcon from '../../assets/camera.png';
import searchIcon from '../../assets/lupa.png';
import configIcon from '../../assets/configuration.png';

import { directs } from '../../helpers/directs.data';
import { 
    Container, 
    ScrollViewListDirects,
    SearchBar,
    IconHeader,
    TextSearchBar,
    ChooseSide,
    TextChoose,
    ImageProfile, 
    TextNameProfile,
    TextOnlineTime,
    IconDirectMsg, 
    ButtonDirectMsg,
    NameTime
} from './styles';

interface DirectsTypes {
    image: string;
    name: string;
    online: string;
}

const ComponentDirects: React.FC = () => {
    const [listDirects, setListDirects] = useState<DirectsTypes[]>([]);
    
    useEffect(() => {
        setListDirects(directs);
    }, []);


  return (
    <Container>
        <ScrollViewListDirects >
            <SearchBar>
                <IconHeader resizeMode="contain" source={searchIcon} />
                <TextSearchBar>Pesquisar</TextSearchBar>
                <IconHeader resizeMode="contain" source={configIcon} />
            </SearchBar>
            <ChooseSide>
                <TextChoose>Principal</TextChoose>
                <TextChoose>Geral</TextChoose>
            </ChooseSide>
            {listDirects.map(direct => (
                <ButtonDirectMsg>    
                    <ImageProfile source={{ uri: direct.image }} />
                    <NameTime>
                        <TextNameProfile>{direct.name}</TextNameProfile>
                        <TextOnlineTime>{direct.online}</TextOnlineTime>
                    </NameTime>
                    <IconDirectMsg resizeMode="contain" source={sendImageIcon}/>
                </ButtonDirectMsg>
            ))}
        </ScrollViewListDirects>
    </Container>  
  );
}

export default ComponentDirects;