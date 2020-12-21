/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchRoomsBy } from "../actions/index";

const Form = ({ max, min }) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(max);
  const [pets, setPets] = useState(false);
  const [breakfast, setBreak] = useState(false);
  const [type, setType] = useState("all");

  let states = { pets, breakfast };

  useEffect(() => {
    setPrice(max);
    setType("all");
    setPets(false);
    setBreak(false);
  }, [max]);

  const onTypeHandler = (e) => {
    setType(e.target.value);
    if (e.target.value !== "all") {
      dispatch(fetchRoomsBy(`type=${e.target.value}`));
    } else {
      dispatch(fetchRoomsBy(""));
    }
  };

  const onPriceHandler = (e) => {
    setPrice(e.target.value);
    dispatch(fetchRoomsBy(`price[lte]=${e.target.value}`));
  };

  const onCheckPetsHandler = (e) => {
    let target = e.target.checked;
    setPets(e.target.checked);
    states = { ...states, pets: target };
  };

  const onCheckBreakHandler = (e) => {
    let target = e.target.checked;
    setBreak(e.target.checked);
    states = { ...states, breakfast: target };
  };

  const onCheckHandler = (e) => {
    if (states.pets === true && states.breakfast === true) {
      dispatch(fetchRoomsBy(`pets=true&breakfast=true`));
    } else if (states.pets === true) {
      dispatch(fetchRoomsBy(`pets=true`));
    } else if (states.breakfast === true) {
      dispatch(fetchRoomsBy(`breakfast=true`));
    } else {
      dispatch(fetchRoomsBy(``));
    }
  };

  const onMultiFilter = (e) => {
    let target = e.target,
      value = target.value,
      checked = target.checked,
      values,
      list = { type, price, pets, breakfast };

    if (target.id === "roomType") list = { ...list, type: value };
    if (target.id === "customRange2") list = { ...list, price: value };
    if (target.id === "flexCheckPets") list = { ...list, pets: checked };
    if (target.id === "flexCheckBreakfast")
      list = { ...list, breakfast: checked };

    values = Object.values(list);

    dispatch(
      fetchRoomsBy(
        `type=${values[0]}&price[lte]=${values[1]}&pets=${values[2]}&breakfast=${values[3]}`
      )
    );
  };

  return (
    <div className="container ms-5 mb-5 form-md">
      <div className="row align-items-center w-50 mx-auto">
        <div className="col-md-4 mt-5">
          <div className="form-floating">
            <select
              className="form-select"
              id="roomType"
              onChange={onTypeHandler}
            >
              <option>all</option>
              <option>presidential</option>
              <option>family</option>
              <option>double</option>
              <option>single</option>
            </select>
            <label htmlFor="floatingSelect">Room Type</label>
          </div>
        </div>
        <div className="col-md mt-5">
          <span htmlFor="customRange2" className="form-label">
            Room Price <span className="fw-bolder text-warning">${price}</span>
          </span>
          <input
            type="range"
            className="form-range"
            value={price}
            min={min}
            max={max}
            id="customRange2"
            onChange={onPriceHandler}
          />
        </div>
        <div className="col-md-3 mt-5 text-start" onChange={onCheckHandler}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="breakfast"
              id="flexCheckBreakfast"
              onChange={onCheckBreakHandler}
            />
            <label className="form-check-label" htmlFor="flexCheckBreakfast">
              Breakfast
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="pets"
              id="flexCheckPets"
              onChange={onCheckPetsHandler}
            />
            <label className="form-check-label" htmlFor="flexCheckPets">
              Pets
            </label>
          </div>
        </div>
        <div className="col-md-1 mt-5">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={onMultiFilter}
          >
            Multiply Filter<i className="fas fa-filter"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
