import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import Search from './components/search/search';
import Feed from './components/feed/feed';
import { fetchImages, KEYWORD_CHANGE } from './actions/actions';

const colors = {
  white: '#fff',
};

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', backgroundColor: colors.white },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    paddingTop: 30,
  },
});

class RootComponent extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Image Search</Text>
        <Search
          value={this.props.keyword}
          onChange={val => this.props.fetchImageRequest(val)}
          clearField={this.props.clearSearchField}
        />
        <Feed images={this.props.images} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  images: state.search.images,
  keyword: state.search.keyword,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImageRequest: keyword => dispatch(fetchImages(keyword)),
    clearSearchField: () =>
      dispatch({ type: KEYWORD_CHANGE, payload: { keyword: '' } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
