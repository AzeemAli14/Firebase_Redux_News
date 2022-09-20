import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import { COLOR_Black, COLOR_WHITE } from '../constants/Colors'



function Header({ titleText }) {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor:  COLOR_WHITE,
        elevation: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: COLOR_Black,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    }
})

export default Header