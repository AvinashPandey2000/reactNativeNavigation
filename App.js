import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import Detail from './components/Detail';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Detail From" component={Form} />

      <Stack.Screen name="Detail" component={Detail} />

    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    color:'blue'
  }
});
