import React, { useContext } from "react";
import { DropTarget } from "react-dnd";
import Context from "../context";
import { ItemTypes } from "../constants";

const menuTarget = {
  canDrop(props) {
    return true;
  },

  drop(props, monitor) {
    const item = monitor.getItem();
    props.updateMove(item);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const dietaryList = item =>
  item.dietaries.map((dietary, key) => (
    <span key={key} className="dietary">
      {dietary}
    </span>
  ));

const MenuContainer = ({
  connectDropTarget,
  isOver,
  updateMove,
  onRemoveMenu
}) => {
  const context = useContext(Context);
  const {
    state: { targetMenu }
  } = context;

  return (
    <span>
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {connectDropTarget(
          <span>
            {isOver ? (
              <li className="item">
                <p>Drop here</p>
              </li>
            ) : null}
            {targetMenu.length ? (
              targetMenu.map(menu => (
                <li key={menu.id} className="item">
                  <h2>{menu.name}</h2>
                  <p>{dietaryList(menu)}</p>
                  <button
                    onClick={() => onRemoveMenu(menu)}
                    className="remove-item"
                  >
                    x
                  </button>
                </li>
              ))
            ) : (
              <li className="item">
                <h2>Nothing added to menu!</h2>
                <p>Please drag and drop from the left side</p>
              </li>
            )}
          </span>
        )}
      </ul>
    </span>
  );
};

export default DropTarget(ItemTypes.ITEM, menuTarget, collect)(MenuContainer);
