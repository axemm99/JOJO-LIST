import "./JojoParts.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

import React, { useState } from "react";
import { useStore } from "../store/store";
import Select from "react-select";

function JojoPartFiveList() {
  const { jojos, removeJojo, patchJojo, jojoTypes, jojoAllParts } = useStore();
  const [selectedValue, setSelectedValue] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState({
    name: "",
    img: "",
    type: [],
    jojoPart: [],
    hasStand: false,
    standName: "",
    status: "",
  });

  // const onchangeInput = (val, index) => {
  //   let temp = jojos;
  //   temp[index] = val.target.type;
  //   setData(temp);
  //   console.log(temp);
  // };

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    setUpdate({ ...update, jojoPart: Array.isArray(e) ? e.map((x) => x.value) : []})
  };

  function reduceTypes(jojo_type) {
    return jojo_type.reduce((acc, t) => acc + t + ", ", "");
  }

  // function getValueRadioBox(e) {
  //   setUpdate.hasStand(e.target.value);
  // }

  const updateClickHandler = (jojo) => {
    setIsEdit(true);
    setUpdate({
      id: jojo.id,
      name: jojo.name,
      img: jojo.img,
      type: jojo.type,
      jojoPart: jojo.jojoPart,
      hasStand: jojo.hasStand,
      standName: jojo.standName,
      status: jojo.status,
    });
  };

  const patchJojoHandler = (e) => {
    e.preventDefault();
    console.log(update);
    patchJojo(update);
    setUpdate({
      id: null,
      name: "",
      img: "",
      type: [],
      jojoPart: [],
      hasStand: false,
      standName: "",
      status: "",
    });
    setIsEdit(false);
  };

  function handleListJojo(jojo, jojoParts) {
    if (jojoParts.includes(5)) {
      return (
        <div id="boxOne" className="box">
          <figure id="jojoImg" className="image is-128x128">
            <img src={jojo.img}></img>
          </figure>
          <h3 id="jojoName">{jojo.name}</h3>
          <br></br>
          <p id="jojoType">{jojo.type}</p>
          <br></br>
          <p id="jojoParts">Parts: {reduceTypes(jojo.jojoPart)}</p>
          <br></br>
          <p id="jojoHasStand">Has Stand? {jojo.hasStand}</p>
          <br></br>
          <p id="jojoStand">Sand: {jojo.standName}</p>
          <br></br>
          <p id="jojoStatus">Status: {jojo.status}</p>
          <button
            onClick={() => removeJojo(jojo.id)}
            id="btnDelete"
            type="button"
            className="button is-primary"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            onClick={() => updateClickHandler(jojo)}
            id="btnEdit"
            type="button"
            className="button is-primary"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      );
    }
  }

  return (
    <div className="JojoPartOne">
      <NavBar />
      <header className="App-header">
        {jojos.map((jojo, index) => handleListJojo(jojo, jojo.jojoPart))}
        {isEdit && (
          <div id="boxTwo" className="box">
            <h3>Edit Jojo</h3>
            <div>
              <label className="label">Name</label>
              <input
                className="input"
                type="text"
                value={update.name}
                onChange={(e) => setUpdate({ ...update, name: e.target.value })}
              />
              <br></br>
              <label className="label">Photo</label>
              <input
                className="input"
                type="url"
                value={update.img}
                onChange={(e) => setUpdate({ ...update, img: e.target.value })}
              />
              <br></br>
              <label className="label">Stand Name</label>
              <input
                className="input"
                type="text"
                value={update.standName}
                onChange={(e) =>
                  setUpdate({ ...update, standName: e.target.value })
                }
              />
              <br></br>
              <br></br>
              <label className="label">Status</label>
              <input
                className="input"
                type="text"
                value={update.status}
                onChange={(e) =>
                  setUpdate({ ...update, standName: e.target.value })
                }
              />
              <br></br>
              <label className="label">Type</label>
              <br></br>
              <div id="selectType" className="select is-fullwidth">
                <select
                  onChange={(e) =>
                    setUpdate({ ...update, type: e.target.value })
                  }
                >
                  <option readOnly="NORMAL">NORMAL</option>
                  <option readOnly="JOESTAR">JOESTAR</option>
                  <option readOnly="JOBRO"> JOBRO</option>
                  <option readOnly="ENEMY">ENEMY</option>
                  <option readOnly="ANTAGONIST">ANTAGONIST</option>
                </select>
              </div>
              <br></br>
              <label className="label">Does It Have a Stand?</label>
              <div
                class="control"
                onChange={(e) =>
                  setUpdate({ ...update, hasStand: e.target.value })
                }
              >
                <label class="radio">
                  <input value={true} type="radio" name="answer"></input>
                  Yes
                </label>
                <label class="radio">
                  <input value={false} type="radio" name="answer"></input>
                  No
                </label>
              </div>
              <br></br>
              <label className="label">Parts:</label>
              <Select
                className="text"
                placeholder="Select Option"
                value={jojoAllParts.filter((e) =>
                  selectedValue.includes(e.value)
                )} // set selected values
                options={jojoAllParts} // set list of the data
                onChange={handleChange} // assign onChange function
                isMulti
                isClearable
              />

              {selectedValue && (
                <div style={{ marginTop: 20, lineHeight: "25px" }}>
                  <div>
                    <b>Parts selected: </b>{" "}
                    {JSON.stringify(selectedValue, null, 2)}
                  </div>
                </div>
              )}
            </div>
            <br></br>
            <br></br>
            <button
              id="btnPatch"
              className="button is-primary"
              type="button"
              onClick={patchJojoHandler}
            >
              Patch
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default JojoPartFiveList;
