import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function Pokemon(props) {
    console.log('props :', props.pokemon);
    return (
        <View style={styles.item}>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: `https://img.pokemondb.net/artwork/${props.pokemon.name}.jpg`}}
            />
            <Text>
                {props.pokemon.name}
            </Text>
            <Button
                title={"Ver mas de " + props.pokemon.name}
                color="#FF5959"
                style={{ fontSize: 1 }}
                onPress={() => Alert.alert(props.pokemon.name + ' es el pokemon mas lindo')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    }
})