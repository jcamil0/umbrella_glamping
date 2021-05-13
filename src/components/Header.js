import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adam",
    };
  }
  render() {
    return (
      <header>
        <div className="logo">
          <span className="home">HOME</span>
        </div>
        <section className="search-area">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.props.change}
          />
        </section>
        <nav>
          <a href="#">About</a>
          <a href="#">Login</a>
          <a href="#" className="signup-button">
            Sign Up
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
