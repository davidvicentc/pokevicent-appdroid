import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios'
import Pokemon from './components/Pokemon';

export default class App extends Component {

  state = {
    pokemons: []
  }

  async componentDidMount() {
    let result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    console.log('result.data.results :', result.data.results);
    this.setState({
      pokemons: result.data.results
    })
  }

  render() {
    return (
      <View>
        <View style={styles.containerNav}>
          <Text style={styles.text}>Pokevicent App!</Text>
        </View>
        <View>
        <FlatList
          data={this.state.pokemons}
          renderItem={({item}) => <Pokemon pokemon={item} />}
          numColumns={2}
          keyExtractor={(_, i) => i}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerNav: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#FF5959',
    alignItems: 'center',
  },
  text: {
    color: 'white'
  }
});
