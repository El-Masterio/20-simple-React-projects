import { useState } from 'react';
import data from './data.js';
import './style.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrendId) {
    setSelected(getCurrendId === selected ? null : getCurrendId); // to toggle accordian
  }

  function handleMultiSelection(getId) {
    let cpyMultiple = [...multiple]; // copy the orginial array to not mutate it
    const findIndex = cpyMultiple.indexOf(getId);

    if (findIndex === -1) cpyMultiple.push(getId);
    // push if index not found (means the items is not in the array)
    else cpyMultiple.splice(findIndex, 1); // delete the item from the arrray if clicked again

    setMultiple(cpyMultiple);
  }
  return (
    <div className="accordian__wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setSelected(null);
          setMultiple([]);
        }}
      >
        Enable Multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="accordian__item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="accordian__title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="accordian__content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
