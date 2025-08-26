import React from "react";

const Button = ({ id, title, leftIcon, containerClass, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit ${containerClass} cursor-pointer overflow-hidden 
      rounded-full bg-violet-50 px-7 py-3 text-black`}
    >
      {leftIcon}
      <span className="relative overflow-hidden inline-flex font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
