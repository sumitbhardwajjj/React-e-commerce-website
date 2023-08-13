import React, { useState } from "react";
import Header from "./../Header";
import { Outlet } from "react-router-dom";
import "./Product.scss";
import { useParams, useNavigate } from "react-router-dom";

const Products = () => {
  const [txt, setTxt] = useState("Show");
  const [isListShow, setListShown] = useState(false);

  const navigate = useNavigate();

  const btnHandler = () => {
    setListShown((prevState) => {
      if (prevState === false) {
        setTxt("Hide");
        navigate("lists");
        return true;
      } else {
        setTxt("Show");
        navigate("/Products");
        return false;
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="align">
        <div>
          <h1>Welcome to our Product listing page</h1>
          {isListShow && (
            <h3>You can click on each product for detailed view</h3>
          )}
        </div>
        <button onClick={btnHandler}>{`${txt} Products`}</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;