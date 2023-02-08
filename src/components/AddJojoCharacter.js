import "./AddJojoCharacter.css";
import NavBar from "./NavBar";

import React, { useState } from "react";
import { useStore } from "../store/store";
import { useRef } from "react";
import Select from "react-select";

function AddJojo() {
  const refName = useRef();
  const refPhoto = useRef();
  const refStandName = useRef();
  const refPart = useRef();
  const refStatus = useRef();
  const { increaseNumJojos, addJojoToArray, jojoCount, jojos, jojoAllParts } =
    useStore();
  const [inputName, setInputName] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputPart, setInputPart] = useState("");
  const [inputHasStand, setInputHasStand] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputStandName, setInputStandName] = useState("");
  const [inputType, setInputType] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  function handleAddJojo() {
    console.log("part: ", selectedValue);
    for (let i = 0; i < jojos.length; i++) {
      for (let j = 0; j < selectedValue.length; j++) {
        if (
          jojos[i].name == refName.current.value &&
          jojos[i].jojoPart.includes(selectedValue[j])
        ) {
          alert("This Jojo already exists");
          return null;
        }
      }
    }
    console.log("on click: ", inputType);
    if (
      refName.current.value != "" &&
      refPhoto.current.value != "" &&
      refStatus.current.value != "" &&
      inputHasStand != ""
    ) {
      addJojoToArray(
        jojoCount + 1,
        inputName,
        inputPhoto,
        inputType,
        selectedValue,
        inputHasStand,
        inputStandName,
        inputStatus
      );
      increaseNumJojos();
      setInputName("");
      setInputPhoto("");
      setInputStandName("");
      setInputStatus("");
      console.log(jojos);
    } else {
      alert("Some fields are empty");
    }
  }

  function handleChangeInputName(e) {
    setInputName(e.target.value);
  }

  function handleChangeInputStandName(e) {
    setInputStandName(e.target.value);
  }

  function handleChangeInputPhoto(e) {
    setInputPhoto(e.target.value);
  }

  function handleChangeInputStatus(e) {
    setInputStatus(e.target.value);
  }

  function handleChange(e) {
    let value = e.target.value;
    setInputType(value);
    console.log(value);
  }

  const handleChangeSelectedValue = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  function getValueRadioBox(e) {
    setInputHasStand(e.target.value);
  }

  return (
    <div className="AddJojo">
      <NavBar />
      <header className="App-header">
        <form className="box">
          <div className="field">
            <label className="label">Jojo Name</label>
            <div className="control">
              <input
                ref={refName}
                onChange={handleChangeInputName}
                value={inputName}
                className="input"
                type="text"
                placeholder="e.g. Joseph Joestar"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Jojo Image</label>
            <div className="control">
              <input
                className="input"
                type="url"
                placeholder="Paste a Image URL"
                ref={refPhoto}
                onChange={handleChangeInputPhoto}
                value={inputPhoto}
              ></input>
            </div>
          </div>
          <div className="field" onChange={getValueRadioBox}>
            <label className="label">Does It Have a Stand?</label>
            <div class="control">
              <label class="radio">
                <input value={true} type="radio" name="answer"></input>
                Yes
              </label>
              <label class="radio">
                <input value={false} type="radio" name="answer"></input>
                No
              </label>
            </div>
          </div>
          <div className="field">
            <label className="label">Stand Name</label>
            <div className="control">
              <input
                ref={refStandName}
                onChange={handleChangeInputStandName}
                value={inputStandName}
                className="input"
                type="text"
                placeholder="e.g. Hermit Purple"
              ></input>
            </div>
          </div>
          <div className="field"></div>
          <div className="field">
            <label className="label">Jojo Type</label>
            <div id="selectType" className="select is-fullwidth">
              <select onChange={handleChange}>
                <option value="NORMAL">NORMAL</option>
                <option value="JOBRO">JOBRO</option>
                <option value="JOESTAR">JOESTAR</option>
                <option value="ENEMY">ENEMY</option>
                <option value="ANTAGONIST">ANTAGONIST</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Parts:</label>
            <Select
              ref={refPart}
              className="text"
              placeholder="Select Option"
              value={jojoAllParts.filter((e) =>
                selectedValue.includes(e.value)
              )} // set selected values
              options={jojoAllParts} // set list of the data
              onChange={handleChangeSelectedValue} // assign onChange function
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
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <input
                ref={refStatus}
                onChange={handleChangeInputStatus}
                value={inputStatus}
                className="input"
                type="text"
                placeholder="e.g. Alive"
              ></input>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAddJojo}
            id="btnAdd"
            className="button is-primary"
          >
            Add
          </button>
        </form>
      </header>
    </div>
  );
}

export default AddJojo;
