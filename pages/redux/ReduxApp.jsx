import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./reducer";

const ReduxApp = ({ data, actions }) => {
  return (
    <div>
      <h2>ReduxApp</h2>
      <p>{`data : ${data}`}</p>
      <button
        onClick={() =>
          actions.fetchData("https://yts.am/api/v2/list_movies.json")
        }
      >
        action
      </button>
    </div>
  );
};

export default connect(
  ({ data }) => ({
    data
  }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)(ReduxApp);
