import React from "react";
import Posts from "./Posts";
import Form from "./Form";
import './Home.css';

export default () => (
  <div className="layout">
      <div>
        <h1>All Posts</h1>
        <Posts />
        <h4 className="mt-1">Add a new post</h4>
        <Form />
      </div>
    <div style={{ textAlign: "center" }}>jy-ko ©2022.</div>
  </div>
);
