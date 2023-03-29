import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const signIn = () => {};

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <StatusBar style='light' />
            <View style={styles.title}>
                <Ionicons
                    name='chatbubbles-outline'
                    size={48}
                    color='rgb(20 184 166)'
                />
                <Text style={styles.titleText}>Babel On</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    autoFocus
                    textContentType={`emailAddress`}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    textContentType={`password`}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={{
                        backgroundColor: 'rgb(20 184 166)',
                    }}
                    title='Login'
                    onPress={signIn}
                />
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={{
                        borderColor: 'rgb(20 184 166)',
                    }}
                    titleStyle={{
                        color: 'rgb(20 184 166)',
                    }}
                    onPress={() => navigation.navigate('Register')}
                    title='Register'
                    type='outline'
                />
            </View>
            <View style={{ height: 100, marginTop: 1 }} />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        marginBottom: 40,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        color: 'rgb(14 165 233)',
    },
    inputContainer: {
        alignItems: 'center',
        width: 300,
        marginTop: 30,
    },
    buttonContainer: {
        width: 200,
        marginTop: 10,
    },
});
