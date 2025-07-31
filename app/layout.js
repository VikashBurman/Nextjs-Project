export const metadata = {
  title: {
    template: '%s | My Next.js App',
    default: 'My Next.js App'
  },
  description: 'This is my awesome Next.js application',
  keywords: ['nextjs', 'react', 'web development'],
  authors: [{ name: 'Your Name' }],
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
      {children}
      </body>
    </html>
  );
}
