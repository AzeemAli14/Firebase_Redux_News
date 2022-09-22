import moment from 'moment';
import {Divider} from 'native-base';
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {COLOR_Black, COLOR_GREY, COLOR_WHITE} from '../constants/Colors';

const {width, height} = Dimensions.get('window');

class NewsCard extends Component {
  constructor(props) {
    super(props);
    const heading = this.props.item.title
    console.log('news props:' +{heading});
  }

  render() {
    const { itemProps } = this.props;
    return (
      <View style={styles.cardView}>
        <Text style={styles.title}> {this.props.item.title}</Text>
        <Text style={styles.author}>Author: {this.props.item.author} </Text>
        <Image
          style={styles.image}
          source={this.props.item.urlToImage ? {uri: this.props.item.urlToImage} : null}
        />
        <Divider my={1} />
        <Text style={styles.date}>
          {moment(this.props.item.publishedAt).format('LLL')}
        </Text>
        <Divider my={1} />
        <Text style={styles.description}>{this.props.item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: COLOR_WHITE,
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: COLOR_Black,
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: COLOR_Black,
    alignSelf: 'center',
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: COLOR_GREY,
    fontSize: 14,
  },
  image: {
    height: height / 3,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: COLOR_GREY,
  },
});

export default NewsCard;
