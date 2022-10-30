import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import parse from "html-react-parser";
import hero from "../data/hero.json";

function MyEditor({ setDescription, config , description }) {
  const editor = useRef(null);


  return (
    <JoditEditor
      value={hero.description }
      ref={editor}
      onChange={(content) => setDescription(parse(content))}
      config={config}
    />
  );
}

export default MyEditor;
