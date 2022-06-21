import React, {useState, useEffect } from 'react'
import axios from 'axios';

function Form() {
    const [data, setData] = useState({
        title: "",
        body: ""
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            title: data.title,
            body: data.body
        };
        axios.post("/api/v1/posts", userData).then((response) => {
            console.log(response.status);
        })
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title"> Title:</label>
        <input type="string" className="form-control" name="title" value={data.title} onChange={handleChange} />
      </div>
      <div className="form-group">  
        <label htmlFor="body"> Body:</label>
        <textarea type="text" className="form-control" name="body" value={data.body} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>

  )
}

export default Form