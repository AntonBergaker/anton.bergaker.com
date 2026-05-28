import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@styles/global.scss";

export const viewport: Viewport = {
    themeColor: "#E32C2E",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://anton.bergaker.com"),
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
        ],
    },
    openGraph: {
        type: "website",
        images: [{ url: "/avatar.png", width: 492, height: 492, alt: "A cartoony scarecrow, Anton's avatar" }],
    },
    twitter: {
        card: "summary",
        creator: "Anton Bergåker",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
