import "../globals.css"
import Navbar from "./componets/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
