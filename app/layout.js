import "./globals.css"
import Navbar from "./componets/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
