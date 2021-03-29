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

const CreateAccountScreen = ({navigation}) => {

    const [bio, setBio] = useState();
    const [section, setSection] = useState();
    const [preferredTime, setPreferredTime] = useState();
    const [favouriteCourse, setFavouriteCourse] = useState();
    const [needHelp, setNeedHelp] = useState();
    const [hobbies, setHobbies] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                 <Text style={styles.titles}>Create Profile</Text>
            </View>

            <View style={styles.footer}>
                <TextInput
                    multiline
                    placeholder = "Bio"
                    style={styles.TextInput}  
                    onChangeText={(val)=>setBio(val)} />

                <TextInput
                    placeholder = "Section"
                    style={styles.TextInput}
                    autoCapitalize = 'none'
                    onChangeText={(val)=>setSection(val)} />


                <TextInput
                    placeholder = "Preferred Studying Time" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setPreferredTime(val)} />

                <TextInput
                    placeholder = "Favourite Course" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setFavouriteCourse(val)} />

                <TextInput
                    placeholder = "Needs Help On" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setNeedHelp(val)} />

                <TextInput
                    multiline
                    placeholder = "Hobbies" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setHobbies(val)} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeStack', { screen: 'HomeScreen'})}
                    style={[styles.button, {
                        boderwidth: 1
                    }]}>
                    <Text style={[styles.textSign, {color: '#fff'}]}>Finish</Text>
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