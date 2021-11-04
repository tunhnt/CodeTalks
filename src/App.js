import React, {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import FlashMessage from "react-native-flash-message";
import { IconButton } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Sign from './pages/Sign';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import colors from './styles/colors';


const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user); // boolean olmasını sağladım !! ile 
      console.log("user durumu " + !!user)
    })
  }, [])

  const AuthStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
        />
        <Stack.Screen
          name="SignPage"
          component={Sign} />
      </Stack.Navigator>
    );
  }

  const ContentStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen 
              name="Rooms"
              component={Rooms}
              options={{
                title: 'Odalar',
                headerTitleStyle: {color: colors.main_color},
                headerTitleAlign: 'center',
                headerRight: () => (
                  <IconButton
                    icon="logout"
                    color={colors.main_color}
                    size={25}
                    onPress={() => auth().signOut().then(() => console.log('User signed out!'))}
                  />
                ),
              }}
            />
            <Stack.Screen 
              name="Room"
              component={Room}
              options={{
                headerShown: false
              }}
            />
      </Stack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen 
              name="ContentStack"
              component={ContentStack}
              options={{
                headerShown: false,
              }}
            
            />
          )
        }
            
            
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
