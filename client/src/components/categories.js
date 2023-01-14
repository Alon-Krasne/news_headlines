import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

async function getCategories() {
  const response = await axios.get("/categories");
  return response.data;
}

const CategoriesSection = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log(error);
      });
  }, [activeCategory, setCategory]);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <div className="d-flex flex-wrap">
      {categories.map((category, index) => (
        <React.Fragment key={category}>
          <div className="my-1 mr-1 mx-1">
            <Button
              type="button"
              variant={activeCategory === category ? "success" : "primary"}
              onClick={() => handleButtonClick(category)}
              block="true"
            >
              {category}
            </Button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategoriesSection;
