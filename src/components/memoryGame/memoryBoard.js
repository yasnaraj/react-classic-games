import React, {Component} from 'react';
import MemorySquare from './memorySquare';

export default class Board extends Component {

    render() {
        var _this = this;
      return (
        <div className="flexBoard">
           {       
               this.props.squares.map(function(row, index){
               return <MemorySquare key={index}
               id={index}
               item={row}
               onClick={() => _this.props.onClick(index)} />
            })} 
        </div>
      );
    }
  }