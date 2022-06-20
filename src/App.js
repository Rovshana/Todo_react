import React from "react";
import "./App.css";
import ListItem from "./ListItem";
import  Style from './ListItem.module.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        keys: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        keys: Date.now(),
      },
    });
  }
  handleAddItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(id) {
    let newArr = [...this.state.items];
    newArr.splice(id, 1);
    this.setState({items:newArr})
  }
  render() {
    return (
      <div className="App">
        <header>
          <form className="todo-form" onSubmit={this.handleAddItem}>
            <input
              type="text"
              placeholder="write"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>

        {this.state.items.map((item, index) => {
          return (
            <div key={`text-${index}`} className="mainDiv">
              <ListItem {...item} />
              <span
                className={`${Style.Myspan}`}
                onClick={() => this.deleteItem(`text-${index}`)}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
