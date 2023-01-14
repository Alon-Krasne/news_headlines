import React, { useState } from "react";
import axios from "axios";
import CategoriesSection from "./categories";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FilterForm = ({ setArticles }) => {
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("/news", {params: {keywords, category}});
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter keywords to search for news stories 🗞️"
      />
      <br />
      <CategoriesSection setCategory={setCategory} />
      <br />
      <div className="my-1 mr-1 mx-1">
        <Button type="submit" variant="secondary">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default FilterForm;
