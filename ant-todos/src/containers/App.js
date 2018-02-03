import React from 'react';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div>
      App
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({

});

export default connect({
  mapStateToProps,
  mapDispatchToProps,
})(App);