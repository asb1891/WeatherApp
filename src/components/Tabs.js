import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from './screens/CurrentWeather'
import UpcomingWeather from './screens/UpcomingWeather'
import City from './screens/City'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'darkgreen'
          },
          headerStyle: {
            backgroundColor: 'darkgreen'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'

          }
        }}
      >
        <Tab.Screen
          name={'Current'}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'sun'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
        <Tab.Screen
          name={'Upcoming'}
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'clock'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
        <Tab.Screen
          name={'City'}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'home'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
      </Tab.Navigator>
  )
}

export default Tabs
