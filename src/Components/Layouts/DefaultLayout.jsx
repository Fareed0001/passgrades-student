// layouts/DefaultLayout.js

import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="margin">
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
