import React, { useEffect, useState } from 'react';

import { stories } from '../../helpers/stories.data';
import { Container, ScrollViewListStories, ImageProfile, TextNameProfile, ButtonStorie } from './styles';

interface StoriesTypes {
    image: string;
    name: string;
}

const ComponentStories: React.FC = () => {
    const [listStories, setListStories] = useState<StoriesTypes[]>([]);
    
    useEffect(() => {
        setListStories(stories);
    }, []);


  return (
    <Container>
        <ScrollViewListStories horizontal >
            {listStories.map(storie => (
                <ButtonStorie>    
                    <ImageProfile source={{ uri: storie.image }} />
                    <TextNameProfile>{storie.name}</TextNameProfile>
                </ButtonStorie>
            ))}
        </ScrollViewListStories>
    </Container>  
  );
}

export default ComponentStories;