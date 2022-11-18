import React, { useState } from "react";

interface Props {
  details: {
    name: string;
    title: string;
    company: string;
    website: string;
    email: string;
  };
  updateDetails: ({}) => void;
}

const style = {
  input: "p-2 mb-2 w-full border",
};

const Details = (props: Props) => {
  const { details, updateDetails } = props;

  return (
    <div className="">
      <div>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className={style.input}
          value={details.name}
          onChange={(e) => {
            updateDetails({
              name: "name",
              value: e.target.value,
            });
          }}
        />
        <input
          id="title"
          type="text"
          placeholder="Title"
          className={style.input}
          value={details.title}
          onChange={(e) => {
            updateDetails({
              name: "title",
              value: e.target.value,
            });
          }}
        />
        <input
          id="company"
          type="text"
          placeholder="Company"
          className={style.input}
          value={details.company}
          onChange={(e) => {
            updateDetails({
              name: "company",
              value: e.target.value,
            });
          }}
        />
        <input
          id="email"
          type="email"
          placeholder="Email address"
          className={style.input}
          value={details.email}
          onChange={(e) => {
            updateDetails({
              name: "email",
              value: e.target.value,
            });
          }}
        />
        <input
          id="website"
          type="text"
          placeholder="Website"
          className={style.input}
          value={details.website}
          onChange={(e) => {
            updateDetails({
              name: "website",
              value: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};
export default Details;
