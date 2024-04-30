import { useState, useRef } from "react";
import "./Editor.css";

function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const ContentRef = useRef();

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onCKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      ContentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={ContentRef}
        value={content}
        onKeyDown={onCKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
