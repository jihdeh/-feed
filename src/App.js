import React, { useState } from "react";
import Context from "./context";
import ItemList from "./items";
import ItemsContainer from "./components/ItemsContainer";
import MenuContainer from "./components/MenuContainer";
import { arraysEqual } from "./utils";
import "./App.css";

const getDietaryTypesCount = dietary => {
  var dietaryTypesCount = {};
  const flattenDietary = dietary.flat();
  flattenDietary.forEach(function(diet) {
    dietaryTypesCount[diet] = (dietaryTypesCount[diet] || 0) + 1;
  });
  return dietaryTypesCount;
};

const dietaryTypesTotal = selectedDietaryList => {
  const dietaries = getDietaryTypesCount(selectedDietaryList);
  const dietArray = Object.keys(dietaries);
  if (!dietArray.length) return;
  return (
    <>
      {dietArray.map(diet => {
        return (
          <span key={diet}>
            {dietaries[diet]}x <span className="dietary">{diet}</span>
          </span>
        );
      })}
    </>
  );
};

const App = () => {
  const [targetMenu, updateMenuList] = useState([]);
  const [sourceItem, updateItemsList] = useState(ItemList);
  const [dietaries, updateSelectedDietaryList] = useState([]);
  const contextHelpers = {
    state: {
      targetMenu,
      sourceItem
    }
  };

  const removeAndUpdate = (selectedObj, stateArray, updateMethod) => {
    const itemIndex = stateArray.findIndex(item => item.id === selectedObj.id);
    const newItemList = [...stateArray];
    newItemList.splice(itemIndex, 1);
    updateMethod(newItemList);
  };

  const unshiftMethod = (selectedObj, stateArray, updateMethod) => {
    const addToList = [{ ...selectedObj }, ...stateArray];
    updateMethod(addToList);
  };

  const removeFromDietariesList = (selectedMenu) => {
    const findDietaryIndexinList = dietaries
      .map((dietList, index) =>
        arraysEqual(dietList, selectedMenu.dietaries, index)
      )
      .filter(f => !!f)[0];
    const newDietaryList = [...dietaries];
    newDietaryList.splice(findDietaryIndexinList, 1);
    updateSelectedDietaryList(newDietaryList);
  };

  const updateMove = ({ item: selectedItem }) => {
    // unshift to targetMenu
    unshiftMethod(selectedItem, targetMenu, updateMenuList);
    // slice from sourceItem
    removeAndUpdate(selectedItem, sourceItem, updateItemsList);
    // update dietaries 2d array
    updateSelectedDietaryList([...dietaries, selectedItem.dietaries]);
  };

  const onRemoveMenu = selectedMenu => {
    // remove from targetMenu
    removeAndUpdate(selectedMenu, targetMenu, updateMenuList);
    // unshift back to sourceItem
    unshiftMethod(selectedMenu, sourceItem, updateItemsList);
    // remove from dietaries array by array comparism
    removeFromDietariesList(selectedMenu);
  };

  return (
    <Context.Provider value={contextHelpers}>
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 menu-summary-left">
                <span>{targetMenu.length} TOTAL DISHES</span>
              </div>
              <div className="col-6 menu-summary-right">
                {dietaryTypesTotal(dietaries)}
              </div>
            </div>
          </div>
        </div>
        <div className="container menu-builder">
          <div className="row">
            <div className="col-4">
              <ItemsContainer />
            </div>
            <div className="col-8">
              <MenuContainer
                updateMove={updateMove}
                onRemoveMenu={onRemoveMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
