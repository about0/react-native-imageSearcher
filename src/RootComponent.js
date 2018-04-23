import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';

import Search from './components/search/search';
import Feed from './components/feed/feed';
import { fetchImages, KEYWORD_CHANGE, IMAGES_PER_ROW } from './actions/actions';

const colors = {
  white: '#ecf0f1',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
});

class RootComponent extends Component {
  componentDidMount() {}

  render() {
    const content = this.props.isLoading ? (
      <Text>Loading...</Text>
    ) : (
      <Feed images={this.props.images} imagesPerRow={this.props.imagesPerRow} />
    );
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Image Search</Text>
        <Search
          value={this.props.keyword}
          onChange={val => this.props.fetchImageRequest(val)}
          clearField={this.props.clearSearchField}
        />
        {content}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  images: state.search.images,
  keyword: state.search.keyword,
  isLoading: state.search.loading,
  imagesPerRow: state.search.imagesPerRow,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImageRequest: keyword => dispatch(fetchImages(keyword)),
    clearSearchField: () =>
      dispatch({ type: KEYWORD_CHANGE, payload: { keyword: '' } }),
    changeImagesPerRow: imagesPerRow =>
      dispatch({ type: IMAGES_PER_ROW, payload: { imagesPerRow } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
