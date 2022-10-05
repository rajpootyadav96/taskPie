import * as React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Details from './src/screens/Details';
import Locations from './src/screens/Locations';
import Profile from './src/screens/Profile';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as colors from './src/constants/colors'
 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false  }}>
      <Tab.Screen 
      options={{
        tabBarIcon: () => (
          <Image style={styles.iconStyle} source={require('./src/constants/Images/home.png')} />
        )
      }}
      name="Home" component={Home} />
      <Tab.Screen name="About" component={About}
      options={{
        tabBarIcon: () => (
          <Image style={styles.iconStyle} source={require('./src/constants/Images/about.png')} />
        )
      }} />
      <Tab.Screen name="Details" component={Details} 
      options={{
        tabBarIcon: () => (
          <Image style={styles.iconStyle}  source={require('./src/constants/Images/details.png')} />
        )
      }}/>
      <Tab.Screen name="Location" component={Locations} 
      options={{
        tabBarIcon: () => (
          <Image style={styles.iconStyle}  source={require('./src/constants/Images/location.png')} />
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: () => (
          <Image style={styles.iconStyle}  source={require('./src/constants/Images/user.png')} />
        )
      }}/>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const styles=StyleSheet.create({
  iconStyle:{
    height:24,
    width:24,
    resizeMode:'contain',
    tintColor:colors.theme
  }
})