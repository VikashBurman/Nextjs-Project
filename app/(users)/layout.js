import "../globals.css"
import Navbar from "./componets/navbar";

export default function UsersLayout({ children }) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
}

