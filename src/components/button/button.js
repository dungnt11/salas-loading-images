import React from "react";

import "./style.css";

let Button = ({ children, loading, ...props }) => {
  return (
    <button disabled={loading} className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
