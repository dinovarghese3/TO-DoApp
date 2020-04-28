import React, { Component } from "react";
import "./todo.css";
class TODO extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    if (event.target.value) {
      this.setState({
        input: event.target.value,
      });
    }
  };
  storeItem = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allinput = this.state.items;
    if (allinput) {
      allinput.push(input);
      this.setState({
        items: allinput,
        input: "",
      });
    }
  };
  deleteitem = (key) => {
    console.log(key);
    const allinput = this.state.items;
    allinput.splice(key, 1);
    this.setState({
      items: allinput,
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="maindiv">
        <div className="alldiv">
          <div className="input">
            <h1>TODO APP</h1>
          </div>
          <div className="boxdiv">
            <form action="#" onSubmit={this.storeItem}>
              <input
                type="text"
                value={input}
                onChange={this.handleChange}
                placeholder="Enter item"
              />
            </form>
          </div>
        </div>
        <div className="resultdiv">
          <ul>
            {items.map((data, index) => (
              <div className="lidiv">
                <div className="loopdiv">
                  <li key={index}>{data}</li>
                  <button
                    className="deletebtn"
                    onClick={() => this.deleteitem(index)}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TODO;
