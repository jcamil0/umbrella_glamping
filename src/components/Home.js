import React, { Component } from "react";

import withAuthorization from "../auth/withAuthorization";
import { db } from "../firebase";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true,
  };

  componentDidMount() {
    // db.onceGetUsers().then(res => {
    //   this.setState({
    //     users: res.val()
    //   });
    // });

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then((res) => {
      this.setState({
        username: res.val().username,
        loading: false,
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <div>
        <h1>Home</h1>
        {!loading && <p className="centered">Hello {username}!</p>}

        <p style={{ marginTop: "80px" }}>
          NOTE: This page is only accessible by signed in users.
        </p>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
