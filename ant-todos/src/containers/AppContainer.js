import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { App } from 'components';
import * as TodoActions from 'ducks/todos';
import { setFilter } from 'ducks/filter';

const AppContainer = ({ todos, actions, filter, setFilter }) => {
  return (
    <App todos={todos} actions={actions} filter={filter} setFilter={setFilter} />
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);