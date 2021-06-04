import React, { Component } from "react";
import InputData from "./inputData";
import ListData from "./listData";
import firebase from "firebase";

class App extends Component {
  state = { listMsg: [] };

  constructor(props) {
    super(props);
    var that = this;
    firebase
      .database()
      .ref("message/")
      .on("value", function (snapshot) {
        if (snapshot.val() != null) {
          that.setState({
            listMsg: snapshot.val(),
          });
        }
      });
  }

  onClickButtonHandlerData = (msg) => {
    const listMsgData = this.state.listMsg.concat({
      key: Math.random().toString().replace(".", ""),
      message: msg,
    });
    firebase.database().ref("message/").set(listMsgData);
  };

  render() {
    const listMsg = this.state.listMsg.map((msg) => {
      return <p>{msg.message}</p>;
    });
    return (
      //remove
      <div className="container">
        <ListData listMsg={this.state.listMsg} />
        <InputData onClickButtonHandler={this.onClickButtonHandlerData} />
      </div>
    );
  }
}

export default App;
