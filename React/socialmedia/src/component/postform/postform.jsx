import React, { useState } from "react";
import Addpostbutton from "../button/Addpostbutton";
import "./postform.css";
import Postitems from "../postitems/postitems";

function Postform() {
  const [ShowInputbox, setShowInputbox] = useState(false);
  const [post, setpost] = useState("");
  const [PostItem, setPostItem] = useState([]);
  const [EditIndex, setEditIndex] = useState(null);

  const handleclick = () => {
    setShowInputbox(true);
  };
  const addpost = () => {
    const newpostarr = [...PostItem];
    if (EditIndex != null) {
      newpostarr[EditIndex] = post;
      setEditIndex(null);
    } else {
      newpostarr.push(post);
    }

    setPostItem(newpostarr);
    setpost("");
    setShowInputbox(false);
  };
  const updatedpost = (index) => {
    setEditIndex(index);
    setpost(PostItem[index]);
    setShowInputbox(true);
  };
  const cancelupdating = () => {
    setShowInputbox(false);
    setEditIndex(null);
  };
  const postdeleted = (index) => {
    const newpostlist = PostItem.filter((_, i) => i !== index);
    setPostItem(newpostlist);
  };

  return (
    <div className="maindiv">
      <div>
        <Addpostbutton clickedfrinputbox={handleclick} />
      </div>

      <div className="container">
        {ShowInputbox ? (
          <div>
            <textarea
              className="postbox"
              value={post}
              onChange={(e) => setpost(e.target.value)}
            />
            <div>
              <button className="postbutton" onClick={addpost}>
                Post
              </button>
              {EditIndex != null ? (
                <button onClick={cancelupdating} className="noupdate">
                  cancel
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <Postitems
          post={PostItem}
          updatethepost={updatedpost}
          deletethepost={postdeleted}
        />
      </div>
    </div>
  );
}

export default Postform;
