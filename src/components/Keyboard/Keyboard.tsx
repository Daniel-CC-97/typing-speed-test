import { useState, useEffect } from "react";
import styles from "./Keyboard.module.css";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "BACKSPACE"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"],
  ["LSHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "?", "RSHIFT"],
  [" "],
];

const Keyboard: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleKeyPress = (event: KeyboardEvent) => {
    let key = null;
    if (event.code === "ShiftLeft") {
      key = "LSHIFT";
    } else if (event.code === "ShiftRight") {
      key = "RSHIFT";
    } else {
      key = event.key.toUpperCase();
    }
    setActiveKey(key);
  };

  const handleKeyRelease = (event: KeyboardEvent) => {
    setActiveKey(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, []);

  return (
    <div className={styles.keyboard}>
      {rows.map((row, index) => (
        <div key={index} className={styles.keyboardRow}>
          {row.map((key) => (
            <div
              key={key}
              className={`${styles.key} ${
                activeKey === key ? styles.active : ""
              }
                ${key === " " ? styles.spacebar : ""}
                ${key === "BACKSPACE" ? styles.backspace : ""}
                ${key === "LSHIFT" || key === "RSHIFT" ? styles.shiftkey : ""}`}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
