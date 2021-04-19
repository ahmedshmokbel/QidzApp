import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, FlatList, Button, } from "react-native";

import MoviesComponent from '../componenats/MoviesComponent';
import { useLoginStore } from '../MobX/StoreProvider';
import { NetworkLayer } from '../Network/networkLayer';

const MoviesScreen = () => {


    const [movies, setMovies] = useState()
    const loginContext = useLoginStore()

    useEffect(() => {

        const API = new NetworkLayer();
       
        API.get_request('&s=%27batman')
          .then((resp) => {
            console.log(resp)
            setMovies(resp.Search)
          })
          .catch(err => {
            console.log(err);
           })
     

    }, [])






    const _renderItem = ({ item, index }) => {

        return (
            <MoviesComponent

                index={index}
                initialNumToRender={10}
            
                {...item}
            />

        );
    }


    return (

        <View style={styles.container} >
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

                <FlatList

                    data={movies}
                    extraData={movies}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_renderItem}
                    onEndReachedThreshold={1}
                   
                /> 

            </View>
            <Button title='logout' onPress={() =>loginContext.logout()} />
        </View >

    );

}

export default MoviesScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (0),
        paddingBottom: (50)

    },

});
