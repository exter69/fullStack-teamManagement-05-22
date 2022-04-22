import React from "react";

const Notice = ({ content }) =>{

  return ( <div className="btn-notice">
    <div className="btn-notice-arrow"></div>
    <div className="btn-notice-content">{content}</div>
  </div>)
};


export default function Button({ className, name, icon }) {
  return (
    <div className={"nav-bar-btn " + className}>
      <div className="btn-btn">
        {icon}
        <div className="active-marq"></div>
      </div>
      <Notice content={name} />
    </div>
  );
}
