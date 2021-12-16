/* eslint-disable no-undef */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from './../redux/actions/actions';


export default function ChangeLanguage() {
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();

  const handleChangeLanguage = () => {
      dispatch(changeLanguage(language === "ar" ?"en" : "ar"))
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleChangeLanguage}>
        change language
      </button>
      <h1>{language}</h1>
      
    </div>
  );
}
