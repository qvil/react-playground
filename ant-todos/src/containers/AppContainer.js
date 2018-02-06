import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { App } from 'components';
import * as TodoActions from 'ducks/todos'

const AppContainer = ({ todos, actions }) => {
  return (
    <App todos={todos} actions={actions} />
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);