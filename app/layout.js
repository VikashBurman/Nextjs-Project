import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <h1>Main Page Layout</h1>
        {children}
      </body>
    </html>
  );
}
