import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export class LoadingIndicator extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator style={styles.loadingIndicator} size={size} color={color} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
    }
})