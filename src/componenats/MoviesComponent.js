import React from 'react';
import { Text,Platform, View, Image, StyleSheet } from 'react-native';
 
  
const MoviesComponent= (props) => {
 
    return (
        <View  
            key={props.index}>
            <View style={styles.rederItems}>
                <Image
                resizeMode='contain'
                    source={{ uri: props.Poster }}
                    style={styles.Img}
                />

            </View>
            <View style={{ marginTop: (5), marginHorizontal: (30) }} >
                <Text style={[{textAlign:'center', fontSize: 15, fontWeight: 'bold', },]}>{props.Title}</Text>

            </View>
        </View>

    )
}

export default MoviesComponent
const styles = StyleSheet.create({

    rederItems: {
        marginTop: (30),
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'white', 
        alignSelf: 'center',
        maxHeight: (220), minHeight: (220),
        ...Platform.select({
            ios: {
                width: '45%',

                marginHorizontal: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
            },
            android: {
                
                width: '45%',
                elevation: 3.5,
                marginHorizontal: 10,
            },
        }),
    },

    Img: {

        maxHeight: (220),
        minHeight: (220),

        borderRadius: 10,
        ...Platform.select({
            ios: {
                width: 360,

            },
            android: {
                width: '100%',
            },
        }),

    },



});
