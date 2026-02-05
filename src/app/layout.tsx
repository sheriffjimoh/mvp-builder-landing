import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your MVP Guy - MVP Builder | Ship Your Product in 2-3 Weeks",
  description: "Full-stack software engineer specializing in rapid MVP development. I help founders turn product ideas into real, working web apps using modern tech stack - Laravel, Next.js, TypeScript, and more. 6+ years experience in remote web & mobile development.",
  keywords: [
    "MVP development",
    "Full-stack developer",
    "Laravel developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Web application development",
    "Mobile app development",
    "Startup development",
    "Product development",
    "Remote developer Nigeria",
    "Jimoh Sherifdeen",
    "MVP builder",
    "SaaS development",
    "API development",
    "Modern web development",
    "Agile development",
    "Freelance developer",
    "Computer science graduate"
  ],
  authors: [{ name: "Jimoh Sherifdeen" }],
  creator: "Jimoh Sherifdeen",
  publisher: "Jimoh Sherifdeen",
  robots: "index, follow",
  alternates: {
    canonical: "https://mvp-builder.com",
  },
  openGraph: {
    title: "Jimoh Sherifdeen - MVP Builder | Ship Your Product in 2-3 Weeks",
    description: "Full-stack software engineer with 6+ years experience. I help founders turn product ideas into real, working web apps using Laravel, Next.js, TypeScript & modern tech stack. Remote work specialist with Computer Science background.",
    url: "https://mvp-builder.com",
    siteName: "Jimoh Sherifdeen - MVP Builder",
    images: [
      {
        url: 'https://imagizer.imageshack.com/img924/9933/tyfLSE.png',
        width: 1200,
        height: 630,
        alt: "Jimoh Sherifdeen - MVP Builder and Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: 'https://imagizer.imageshack.com/img924/9933/tyfLSE.png',
    shortcut: 'https://imagizer.imageshack.com/img924/9933/tyfLSE.png',
    apple: 'https://imagizer.imageshack.com/img924/9933/tyfLSE.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "Your MVP Guy - MVP Builder | Ship Your Product in 2-3 Weeks",
    description: "Full-stack software engineer with 6+ years experience. I help founders turn product ideas into real, working web apps using modern tech stack. Remote work specialist.",
    images: ['https://imagizer.imageshack.com/img924/9933/tyfLSE.png'],
    creator: "@sherifdeenolat2",
    site: "@sherifdeenolat2",
  },
  viewport: "width=device-width, initial-scale=1",
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mvp-builder.com"),
  applicationName: "MVP Builder",
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jimoh Sherifdeen",
  "jobTitle": "Full-Stack Software Engineer & MVP Builder",
  "description": "Full-stack software engineer specializing in rapid MVP development with 6+ years of experience in web and mobile app development.",
  "url": "https://mvp-builder.com",
  "sameAs": [
    "https://jimohsherifdeen.vercel.app",
    "https://x.com/sherifdeenolat2"
  ],
  "image": "https://imagizer.imageshack.com/img924/9933/tyfLSE.png",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Computer Science Graduate"
  },
  "knowsAbout": [
    "Laravel",
    "Next.js",
    "TypeScript",
    "React",
    "PHP",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "API Development",
    "MVP Development",
    "Web Development",
    "Mobile Development",
    "SaaS Development",
    "Agile Methodology"
  ],
  "offers": {
    "@type": "Service",
    "name": "MVP Development Service",
    "description": "Rapid MVP development service that helps founders turn product ideas into real, working web applications in 2-3 weeks.",
    "provider": {
      "@type": "Person",
      "name": "Jimoh Sherifdeen"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Complete MVP development from idea to launch"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Full-stack web application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development",
            "description": "RESTful API development and integration"
          }
        }
      ]
    }
  },
  "workLocation": {
    "@type": "Place",
    "name": "Remote Worldwide"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Computer Science Degree"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="dark light" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional favicon sizes */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://imagizer.imageshack.com/img924/9933/tyfLSE.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://imagizer.imageshack.com/img924/9933/tyfLSE.png" />
        <link rel="apple-touch-icon" href="https://imagizer.imageshack.com/img924/9933/tyfLSE.png" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}