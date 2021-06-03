import React, { Component } from "react";
import storage from "../firebase/firebase";
import firebase from "firebase";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      file: [],
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };

  componentDidMount() {
    const fetchImages = async () => {
      let result = await firebase.storage().ref().child("images/").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      this.setState({ file: urls });
      console.log("skjdkjaskdj", this.state.file);
    };
    loadImages();
  }

  renderArray = () => {
    console.log("sakjdkajskdjaksjdkj");
  };

  render() {
    return (
      <div className="center">
        <br />
        <h2 className="green-text">React Firebase Image Uploader</h2>
        <br />
        <br />
        <div className="row">
          <progress
            value={this.state.progress}
            max="100"
            className="progress"
          />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />

        {/* <File /> */}

        {this.state.file.map((image, i) => (
          <img
            src={image}
            key={i}
            style={{
              width: 400,
              height: 400,
            }}
          />
        ))}
      </div>
    );
  }
}

export default ImageUpload;
