import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, Image, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from './src/components/screens/ListItem'

  const DATA = [
    {
      dt_txt: '2023-02-19 12:00:00',
      main: {
        temp_max: 8.44,
        temp_min: 6.44
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: '2023-02-19 15:00:00',
      main: {
        temp_max: 8.44,
        temp_min: 6.44
      },
      weather: [
        {
          main: 'Clouds'
        }
      ]
    },
    {
      dt_txt: '2023-02-19 18:00:00',
      main: {
        temp_max: 8.44,
        temp_min: 6.44
      },
      weather: [
        {
          main: 'Rain'
        }
      ]
    }
  ]
const Item = ( props ) => {
    const { dt_txt, min, max, condition } = props
    return (
        <View style={styles.item}>
            <Feather name="sun" size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
    }
const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} 
        dt_txt={item.dt_txt} min={item.main.temp_min}
        max={item.main.temp_max} />
    )


  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../../assets/cumulus-499176_1920.jpg')} style={styles.image}>
        <Text>Upcoming Weather</Text>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt} 
     />
     </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
  flex: 1,
}
})

export default UpcomingWeather
