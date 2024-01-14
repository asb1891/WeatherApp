import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, StatusBar, Text, View } from 'react-native';
import IconText from '../IconText';

const City = () => {

    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, sunRiseSunSetText, imagelayout} = styles

    return (
        <SafeAreaView style={container}>
        <ImageBackground source={require('../../../assets/NYC.jpg')} style={imagelayout}>
            <Text style={[cityName, cityText]}>New York City</Text>
            <Text style={[countryName, cityText]}>USA</Text>
            <Text style={[cityText]}>Population</Text>
            <View style={populationWrapper}>
                <IconText 
                iconName={'user'} 
                iconColor={'red'} 
                bodyText={'8,000,000'} 
                bodyTextStyles={populationText} />
            </View>
            <View style={riseSetWrapper}>
                <IconText 
                iconName={'sunrise'} 
                iconColor={'orange'} 
                bodyText={'07:24:45am    '} 
                bodyTextStyles={sunRiseSunSetText} />
                <IconText 
                iconName={'sunset'} 
                iconColor={'orange'} 
                bodyText={'04:36:31pm'} 
                bodyTextStyles={sunRiseSunSetText} />
            </View>
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
        marginTop: 25
    },
    populationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30
    },
    populationText: {
        fontSize: 30,
        marginLeft: 7.5,
        color: 'red',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    riseSetWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 30
    },
    sunRiseSunSetText: {
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export default City;