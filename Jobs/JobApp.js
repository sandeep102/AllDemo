import React from 'react'
import {View} from 'react-native'
import {TabNavigator,StackNavigator} from 'react-navigation'
import Auth from './Screens/Auth'
import Deck from './Screens/Deck'
import Map from './Screens/Map'
import Review from './Screens/Review'
import Settings from './Screens/Settings'
import Welcome from './Screens/Welcome'

const MainTab = TabNavigator({
    Welcome: {screen: Welcome},
    Auth: {screen: Auth},
    Main:{screen: TabNavigator({
        Map: {screen: Map},
        Deck:{screen: Deck},
        Review: {screen: StackNavigator({
            Review: {screen: Review},
            Settings: {screen: Settings}
        })}

    })}
})

export default MainTab