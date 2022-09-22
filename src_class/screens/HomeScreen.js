import React, {Component} from 'react';
import {NativeBaseProvider, FlatList} from 'native-base';
// import {View, FlatList} from 'react-native';
import Header from '../components/Header';
import config from '../api/AxiosConfig';
import NewsCard from '../components/NewsCard';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  getNewsFromAPI = async() => {
    await config
      .get(
        'top-headlines?country=us&category=general&apiKey=fd66926ebe4747d3aacee1336c5b56dd',
      )
      .then(response => {
        const news = response.data;
        // console.log(newsData);
        this.setState({news});
      })
      .catch(function (error) {
        alert(error);
      });
  };
  
  componentDidMount () {
    this.getNewsFromAPI();
  }

  renderItem = ({item}) => {
    console.log(item.title);
    return <NewsCard item={item} />;
  };

  render() {
    const {news} = this.state;
    if (!news) {
      return alert('Problem with resposnse');
    }
    console.log(news.articles)
    return (
      <NativeBaseProvider>
        <Header titleText="Headlines" />
        
        <FlatList
          data={news.articles}
          // keyExtractor={(item, index) => 'key' + index}
          renderItem={this.renderItem}
        />
      </NativeBaseProvider>
    );
  }
}

export default HomeScreen;