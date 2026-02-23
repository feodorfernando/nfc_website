import './globals.css';

export const metadata = {
  title: 'NF Crafts India',
  description: 'Natural handcrafted décor for modern living',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
