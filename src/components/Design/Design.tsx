import React from "react";

const Design = (props) => {
  const { nameFontSize, detailsFontSize } = props.design;

  return (
    <div className="design">
      <div>
        <p>Name Font Size</p>
        <input
          aria-label="Name Font Size"
          value={nameFontSize}
          onChange={(e) => {
            props.updateDesign({
              name: "nameFontSize",
              value: e.target.value,
            });
          }}
        />
        <p>Details Font Size</p>
        <input
          aria-label="Details Font Size"
          value={detailsFontSize}
          onChange={(e) => {
            props.updateDesign({
              name: "detailsFontSize",
              value: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};
export default Design;
