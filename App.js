import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'MY BLOGS',
        headerTitleAlign: 'center',
    },
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
}