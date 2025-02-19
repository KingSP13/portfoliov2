import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-marrom-bombom text-white">
        { children }
      </body>
    </html>
  );
}
