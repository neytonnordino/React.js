import { useState } from "react";

export default function Saudacao() {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow((prevShow) => !prevShow);
  }
  return (
    <main>
      {show ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, numquam
          hic, quibusdam ipsam soluta assumenda enim facilis, praesentium
          aperiam accusamus modi voluptate totam odit harum temporibus corrupti
          eligendi autem asperiores?
        </p>
      ) : null}
      <button onClick={toggle}>{!show ? "Mostrar" : "Esconder"}</button>
    </main>
  );
}
