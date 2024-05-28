import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Swot = ({data, index}) => {
  const [isCollapse, setIsCollapse] = useState(false);

  const collapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div key={index} onClick={collapse} className="swot-arcordion">
      <div className="collapse-visibility">
        <p className={`${isCollapse && "offEllipe"}`}>{data.p}</p>
        <span>
          {isCollapse ? (
            <IoIosArrowDown className="swot--img" />
          ) : (
            <IoIosArrowUp className="swot--img" />
          )}
        </span>
      </div>

      <blockquote className={`${isCollapse && "width"}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        adipisci doloribus nihil labore unde debitis mollitia voluptas, a ullam
        magnam ipsam fuga aliquam magni natus blanditiis praesentium placeat
        assumenda maxime harum repellendus id! Molestiae iure omnis, alias iste
        illum sed consectetur totam distinctio deleniti consequuntur, sunt
        impedit nobis aperiam in expedita animi, nihil reprehenderit odit
        voluptatem ducimus adipisci ipsum accusamus. Quisquam inventore, at
        itaque ut hic aspernatur similique architecto recusandae.
      </blockquote>
    </div>
  );
};

export default Swot;
