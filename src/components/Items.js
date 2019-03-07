import React from "react";
import { DragSource } from "react-dnd";
import { ItemTypes } from '../constants';


const itemSource = {
  beginDrag(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const dietaryList = item =>
  item.dietaries.map((dietary, key) => (
    <span key={key} className="dietary">
      {dietary}
    </span>
  ));

const Items = ({ item, key, connectDragSource, isDragging }) => {
  return connectDragSource(
    <li key={key} className="item" style={{
       opacity: isDragging ? 0.25 : 1,
      }}>
      <h2>{item.name}</h2>
      <p>{dietaryList(item)}</p>
    </li>
  );
}

export default DragSource(ItemTypes.ITEM, itemSource, collect)(Items);
