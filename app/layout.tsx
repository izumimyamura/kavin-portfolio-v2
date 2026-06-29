import "./globals.css";

export const metadata = {
  title: "The Cat Guy",
  description: "Video Editor • Motion Graphics • Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
