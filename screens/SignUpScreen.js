import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button, 
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        name: '', 
        password: '',
        check_testInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if(val.length != 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } 
        else {
            setData({
                ...data,
                eamil: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data, 
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data, 
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titles}>Sign Up</Text>
            </View>

            <View style={styles.footer}>

                <Text style={styles.text_footer}>Full Name</Text>
                <TextInput 
                    placeholder = "Full Name"
                    style={styles.TextInput}
                    onChangeText={(val)=>textInputChange(val)} />

                <Text style={styles.text_footer}>Create Username</Text>
                <TextInput
                    placeholder = "Username"
                    style={styles.TextInput} 
                    autoCapitalize = 'none' 
                    onChangeText={(val)=>textInputChange(val)} />
                {data.check_textInputChange ?
                <Feather
                    name='check-circle'
                    color='green'
                    size={20} />
                : null }
              
                <Text style={[styles.text_footer, {marginTop: 35}]}>Create Password</Text>
                <Feather
                    name="lock"
                    color='#05375a'
                    size={20} />
                <TextInput
                    placeholder = "password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.TextInput} 
                    autoCapitalize = 'none' 
                    onChangeText={(val)=> handlePasswordChange(val)} />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20} />
                    :
                    <Feather
                        name='eye'
                        color='grey'
                        size={20} /> }
                </TouchableOpacity> 

                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <Feather
                    name="lock"
                    color='#05375a'
                    size={20} />
                <TextInput
                    placeholder = "retype password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.TextInput} 
                    autoCapitalize = 'none' 
                    onChangeText={(val)=> handlePasswordChange(val)} />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20} />
                    :
                    <Feather
                        name='eye'
                        color='grey'
                        size={20} /> }
                </TouchableOpacity> 
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateProfile')}
                    style={[styles.button, {
                        boderwidth: 1
                    }]}>
                    <Text style={[styles.textSign, {color: '#fff'}]}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.button, {
                        borderWidth: 1,
                        marginTop: 30
                    }]}>
                        <Text style={styles.textSign}>Go Back</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b2dac6'
    },
    header: {
        flex: 1, 
        backgroundColor: '#c1e1c5',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#7dc47f',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30 
    },
    titles: {
        fontSize: 45,
        color:'#fff'
    },
    TextInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#b8c3b9'
    },
    button: {
        color: '#1d4e1f',
        alignItems: 'center',
        marginTop: 50
    },
    textSign: {
        fontSize: 24, 
        fontWeight: 'bold'
    }
});

export default LoginScreen;