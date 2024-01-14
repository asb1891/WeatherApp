import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import RowText from '../RowText'

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, message, description} = styles;
  
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" 
        size={100} 
        color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
        messageOne={'High: 8 '} 
        messageTwo={'Low: 6 '} 
        containerStyles={highLowWrapper} 
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
        />
      </View>
      <RowText 
      messageOne={'Sunny'}
      messageTwo={'Its perfect t-shirt weather'}
      containerStyles={bodyWrapper}
      messageOneStyles={description}
      messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black'
  },
  feels: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'justify-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
