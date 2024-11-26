import React, { useEffect, useState } from "react";

function Header() {
  const [number, setNumber] = useState(0);
  console.log("Header Render");
   useEffect(() => {
     console.log("Header mount");
     return () => console.log("Header unmount");
   }, []);

  return (
    <div className="header">
      <h3>Header</h3>
      <h3>{number}</h3>
      <button onClick={() => setNumber((prev) => prev + 1)}>++</button>
    </div>
  );
}
export default React.memo(Header);
