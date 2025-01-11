import React from "react";
import "./postitems.css";

function Postitems({ post, updatethepost, deletethepost }) {
  return (
    <div>
      {post.map((posts, index) => {
        return (
          <div className="mainlist" key={index}>
            <div>
              <div className="postlist">{posts}</div>

              <div className="btnsec">
                <button
                  className="updatepost"
                  onClick={() => updatethepost(index)}
                >
                  Update
                </button>
                <button
                  className="deletepost"
                  onClick={() => deletethepost(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Postitems;
