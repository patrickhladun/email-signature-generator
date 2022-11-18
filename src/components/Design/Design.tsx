import React from "react";
import Range from "@components/Inputs/Range";

interface Design {
  nameFontSize: number;
  detailsFontSize: number;
}

interface Props {
  design: Design;
  updateDesign: ({}: {
    name: string, 
    value: string
  }) => void;
}

const Design = (props: Props) => {
  const { nameFontSize, detailsFontSize } = props.design;

  console.log(props);
  return (
    <div className="design">
      <div>
        <Range
          aria-label="Name Font Size"
          label="Name Font Size"
          value={nameFontSize}
          min={10}
          max={18}
          onChange={(e) => {
            props.updateDesign({
              name: "nameFontSize",
              value: e.target.value,
            });
          }}
        />

        <Range
          aria-label="Details Font Size"
          label="Details Font Size"
          value={detailsFontSize}
          min={10}
          max={18}
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
