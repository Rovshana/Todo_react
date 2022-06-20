import React from "react";
import  Style from './ListItem.module.css'

class ListItem extends React.Component {
  
 
  render() {
    console.log(this.props.keys);
    return (
      <div >
        <div className={`${Style.myDiv}`}>
        <p className={`${Style.p}`}>{this.props.text}
        </p>
        
        </div>
      </div>
    );
  }
}
export default ListItem;
