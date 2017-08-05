import React from 'react'
import Animation from './Animation/Animation'
import Facebook from './FbAuth/FbAuth'
import Map from './Map/Map'
import Material from './Material/Material'
import OTPAuth from './OTPAuth/OTPAuth'
import JobApp from './Jobs/JobApp'
import { TabNavigator,DrawerNavigator } from 'react-navigation'
//

const Apps = TabNavigator({
    TabHome: { screen: Animation},
    TabFbAuth: {screen: Facebook},
    TabMap:    {screen:Map}
})

const App = DrawerNavigator({
    Job:    {screen: JobApp},
    Material: {screen: Material},
    OTPAuth: {screen: OTPAuth},

    Home: {screen: Apps},
})

export default App