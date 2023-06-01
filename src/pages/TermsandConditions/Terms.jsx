import React from "react";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";

import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./terms.scss";
import "draft-js/dist/Draft.css";
const Terms = ({ setDark, dark }) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar setDark={setDark} dark={dark} />
        <div className="title2">
          <h2>Terms & Conditions</h2>
        </div>
        <div className="termsContent">
          <Editor editorState={editorState} onChange={setEditorState} />
        </div>
      </div>
    </div>
  );
};

export default Terms;
