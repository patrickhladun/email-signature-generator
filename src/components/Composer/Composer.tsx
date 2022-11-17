import React from "react";

const Composer = (props: any) => {
  const { name, email } = props.details;
  return (
    <div className="flex flex-col w-5/6 p-8 bg-white">
      <div className="">
        <div className="">New Message</div>
      </div>

      <div className="">
        <div className="">
          <p className="">
            <span>
              From {name} &#60;{email}&#62;
            </span>
            <span>Cc Bcc</span>
          </p>
          <p className="">To</p>
          <p className="">Subject</p>
        </div>
        <div className="">
          <div className='w-[600px] mt-12 mb-12'>
            <span className="h-2.5 w-2/6 mb-2 bg-gray-200 block rounded"></span>
            <span className="h-2.5 w-5/6 mb-2 bg-gray-200 block rounded"></span>
            <span className="h-2.5 w-5/6 mb-2 bg-gray-200 block rounded"></span>
            <span className="h-2.5 w-5/6 mb-2 mt-4 bg-gray-200 block rounded"></span>
            <span className="h-2.5 w-5/6 mb-2 bg-gray-200 block rounded"></span>
            <span className="h-2.5 w-1/6 mb-2 mt-4 bg-gray-200 block rounded"></span>
          </div>
          {props.children}
        </div>
      </div>
      <div className="">
        <div className="">Send</div>
      </div>
    </div>
  );
};

export default Composer;
