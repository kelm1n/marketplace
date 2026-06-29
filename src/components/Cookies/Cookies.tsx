import "./Cookies.css";
import { useState } from "react";

export default function Cookies() {
  const [visible, setVisible] = useState<boolean>(true);

  const accept = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookies">
      <div className="cookies-p">
        <p>
          Мы используем{" "}
          <a
            href="/Policy/Policy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            cookies
          </a>{" "}
          для быстрой и удобной работы сайта.
        </p>
      </div>
      <div className="cookies-buttons">
        <button onClick={accept}>Принять</button>
      </div>
    </div>
  );
}
