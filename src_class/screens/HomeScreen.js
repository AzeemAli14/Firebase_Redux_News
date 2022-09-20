import React, {useEffect, useState} from 'react';
import { NativeBaseProvider, FlatList } from 'native-base';
import Header from '../components/Header';
import config from '../api/AxiosConfig'
import NewsCard from '../components/NewsCard';

const HomeScreen = () => {
  const [news, setNews] = useState([]);

  getNewsFromAPI = () => {
    config.get('top-headlines?country=us&category=general&apiKey=fd66926ebe4747d3aacee1336c5b56dd')
        .then(async function (response) {
            setNews(response.data);
        })
        .catch(function (error) {
            alert(error)
        })
  }

  if(!news) {
    return alert("Problem with resposnse")
  }

  useEffect(() => {
    getNewsFromAPI()
  }, []);

  return (
    <NativeBaseProvider>
      <Header titleText="Headlines" />
          <FlatList
            data={news.articles}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
              return <NewsCard item = {item}/>
          }}
            />
    </NativeBaseProvider>
  );
}

export default HomeScreen;