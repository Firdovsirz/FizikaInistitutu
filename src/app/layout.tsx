import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Fizika Inistitutu</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
