import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { App } from 'components';
import * as TodoActions from 'ducks/todos';
import { setFilter } from 'ducks/filter';
import { showLoading } from 'ducks/app';

const AppContainer = (props) => {
  return (
    <App {...props} />
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  setFilter: filter => dispatch(setFilter(filter)),
  showLoading: mode => dispatch(showLoading(mode)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);