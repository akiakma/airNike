import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ cards, imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };
  const type = cards.type;

  const onChange = async event => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${
            name ? getStyles(type) : styles.purple
          }`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};
function getStyles(type) {
  switch (type) {
    case "bronze":
      return styles.bronze;
    case "silver":
      return styles.silver;
    case "gold":
      return styles.gold;
    // default:
    //   throw new Error(`unknown theme: ${type}`);
  }
}
export default ImageFileInput;
