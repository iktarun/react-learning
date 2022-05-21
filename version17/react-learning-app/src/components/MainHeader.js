import React from "react";

const routes = [
  { path: "/" },
  { path: "/home" },
  { path: "/timer" },
  { path: "/stock" },
  { path: "/context-api" },
  { path: "/use-state-hook" },
  { path: "/use-memo-hook" },
  { path: "/use-callback-hook" },
];
function MainHeader() {
  return (
    <ul>
      Header
      {routes.map((item) => (
        <li key={item.path}>
          <a href={item.path}>{item.path}</a>
        </li>
      ))}
    </ul>
  );
}

export default MainHeader;
