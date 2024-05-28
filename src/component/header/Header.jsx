import React, { useState } from "react";
import "./header.css";
import LazyLoading from "../../template/Lazyloading";
import a from "../../asset/images/logo64.webp";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { data } from "./Data";

const Header = () => {
  const [isHide, setIsHide] = useState(true);
  return (
    <header className="header">
      <div className="center">
        <a className="logo" href="/">
          <LazyLoading className="logo-img" src={a} alt="logo" />
          <p>NextED</p>
        </a>
        <nav>
          <ul className={`${isHide && "hide"}`}>
            {data.map(({ href, content }, index) => {
              return (
                <li key={index}>
                  <a href={href} onClick={() => setIsHide(!isHide)}>
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul>
            <li>
              <a
                onClick={() => {
                  alert("Backend services is required");
                }}
                href="/#section"
              >
                Join Community
              </a>
            </li>
          </ul>
        </nav>
        <div className="btn" onClick={() => setIsHide(!isHide)}>
          {isHide ? <MdOutlineMenu size={28} /> : <RxCross1 size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
