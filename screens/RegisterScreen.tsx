import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useLayoutEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Input } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
    const nameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const onRegister = () => {
        if (!nameRef.current) {
            return;
        }
    };

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}
        >
            <StatusBar style='light' />
            <Text
                style={{
                    fontSize: 25,
                    padding: 10,
                    marginBottom: 20,
                }}
            >
                Create a Babel On account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    ref={nameRef}
                />
                <Input
                    placeholder='Email'
                    ref={emailRef}
                />
                <Input
                    secureTextEntry
                    placeholder='Password'
                    ref={passwordRef}
                />
            </View>
            <Button
                raised
                containerStyle={styles.button}
                buttonStyle={{
                    backgroundColor: 'rgb(20 184 166)',
                }}
                onPress={onRegister}
                title='Register'
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
