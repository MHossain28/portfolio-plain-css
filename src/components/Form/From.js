import React from "react";
import "./From.css";

const From = () => {
  return (
    <div className="form">
      <form>
        <label>Your name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea
          name=""
          id=""
          rows="6"
          placeholder="Type your msessage"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default From;
