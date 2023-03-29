// import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: {
        backgroundColor: 'rgb(20 184 166)',
    },
    headerTitleStyle: {
        color: 'white',
    },
    headerTintColor: 'white',
};

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style='light' />
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={globalScreenOptions}
            >
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{
                        title: 'Sign in to Babel On',
                    }}
                />
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                    options={{
                        title: 'Register',
                    }}
                />
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
});
