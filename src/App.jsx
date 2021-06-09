import React, { useState } from "react";
import Users from "./Users";
import PostClass from "./PostClass";

import style from "./App.module.css";

function App() {
  const [appstate, setAppstate] = useState("users");

  return (
    <>
      <li className={style.nav}>
        <ul>
          <a className={style.a} href="#" onClick={() => setAppstate("users")}>
            Users
          </a>
        </ul>
        <ul>
          <a className={style.a} href="#" onClick={() => setAppstate("posts")}>
            Posts
          </a>
        </ul>
      </li>

      {appstate === "users" ? <Users /> : <PostClass />}
    </>
  );
}

export default App;
