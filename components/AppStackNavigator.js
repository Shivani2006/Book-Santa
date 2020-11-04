import {createStackNavigator} from 'react-navigation-stack'

import BookDonateScreen from '../screens/bookDonate'
import ReceiverDetailsScreen from '../screens/ReceiverDetails'

export const AppStackNavigator = createStackNavigator(
    {
        BookDonateList:{screen: BookDonateScreen, navigationOptions:{ headerShown : false}},
        ReceiverDetails:{screen:ReceiverDetailsScreen, navigationOptions:{ headerShown : false}}
    }, 
    
    {
        initialRouteName : 'BookDonateList'
    }
)