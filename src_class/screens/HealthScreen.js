import React, {Component, useEffect, useState} from 'react';
import {NativeBaseProvider, FlatList} from 'native-base';
import Header from '../components/Header';
import config from '../api/AxiosConfig';
import NewsCard from '../components/NewsCard';

class HealthScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      news: [],
    };
  }

  getNewsFromAPI = () => {
    config
      .get(
        'top-headlines?country=us&category=health&apiKey=fd66926ebe4747d3aacee1336c5b56dd',
      )
      .then(async function (response) {
        setState(news(response.data));
      })
      .catch(function (error) {
        alert(error);
      });
  };

  componentDidMount () {
    this.getNewsFromAPI();
  }

  render() {
    if (!this.state(news)) {
      return alert('Problem with resposnse');
    }
    return (
      <NativeBaseProvider>
        <Header titleText="Health" />
        <FlatList
          data={news.articles}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return <NewsCard item={item} />;
          }}
        />
      </NativeBaseProvider>
    );
  }
}

export default HealthScreen;