import "./globals.css";

export const metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Modern portfolio website showcasing full-stack development skills, projects, and experience in web technologies.",
  keywords: "portfolio, full-stack developer, web developer, React, Next.js, JavaScript, TypeScript",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description: "Modern portfolio website showcasing full-stack development skills, projects, and experience in web technologies.",
    url: "https://your-portfolio.com",
    siteName: "Portfolio",
    images: [
      {
        url: "https://your-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full Stack Developer",
    description: "Modern portfolio website showcasing full-stack development skills, projects, and experience in web technologies.",
    images: ["https://your-portfolio.com/twitter-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
