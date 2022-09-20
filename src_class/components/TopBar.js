import { View, StatusBar } from 'native-base';
import React from 'react';
import { COLOR_WHITE } from '../constants/Colors';

const TopBar = () => {
    <View>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffff" translucent = {true}/>
    </View>
}

export default TopBar