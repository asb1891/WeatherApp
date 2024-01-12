import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, StatusBar, Text } from 'react-native';

const City = () => {

    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../../assets/skyscrapers.jpg')} style={styles.imagelayout}>
            <Text style={[styles.cityName, styles.cityText]}>New York City</Text>
            <Text style={[styles.countryName, styles.cityText]}>USA</Text>
            <Text style={[styles.cityText]}>Population</Text>
        </ImageBackground>
        </SafeAreaView>   
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imagelayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 45

    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})

export default City;