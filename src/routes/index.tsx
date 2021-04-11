import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import Direct from '../pages/Direct';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Feed" component={Feed} />
            <Screen name="Direct" component={Direct} />
        </Navigator>
    );
}

export default Routes;