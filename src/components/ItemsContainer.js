import React, { useContext } from "react";
import Context from "../context";
import Items from "./Items";

export default () => {
  const context = useContext(Context);
  const {
    state: { sourceItem }
  } = context;

  return (
    <ul className="item-picker">
      {sourceItem.map(item => (
        <Items key={item.id} item={item} />
      ))}
    </ul>
  );
};
