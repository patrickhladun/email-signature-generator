import React from "react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  id?: string;
  className?: string;
  label?: string;
  min?: number;
  max?: number;
}

const style = {};

const Range = ({ onChange, value, id, className, label, min, max }: Props) => {
  return (
    <div className="">
      {label && <p>{label}</p>}
      <input
        onChange={onChange}
        type="range"
        value={value} 
        id={id}
        className={className}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Range;
