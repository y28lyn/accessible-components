import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold p-6 pb-2 text-white">
        {props.title}
      </h1>
      <div className="w-[90%] md:w-[98%] h-[2px] bg-white mx-auto"></div>
    </>
  );
};

export default Title;
