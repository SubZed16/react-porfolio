import React from "react";
import './index.scss'
export default function Switch(props){
    return(
            <label className="switch">
                <input onClick={props.onClick} type="checkbox" className=""/>
                <span className="slider"/>
            </label>)
}