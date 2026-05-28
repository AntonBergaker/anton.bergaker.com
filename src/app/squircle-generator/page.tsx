import type { Metadata } from "next";
import SquircleGeneratorPage from "./SquircleGeneratorPage";

export const metadata: Metadata = {
    title: "Squircle PNG Generator",
    description:
        "Generate a squircle with customizable corners, width, height and resolution. Save as .png all directly in the browser.",
    keywords: [
        "programming",
        "programmer",
        "squircle",
        "generator",
        "squircle generator",
        "squircle png generator",
        "png",
        "rounded edges",
        "math",
    ],
    openGraph: {
        images: [{ url: "https://anton.bergaker.com/_astro/squircle_generator.BGkYAbo6_ZLm7Gv.webp" }],
    },
};

export default function Page() {
    return <SquircleGeneratorPage />;
}
