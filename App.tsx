import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="StartScreen">
        <stack.Screen name="StartScreen" component={StartScreen} />
        <stack.Screen name="GameScreen" component={GameScreen} />
        <stack.Screen name="EndScreen" component={EndScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
