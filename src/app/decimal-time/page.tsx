import type { Metadata } from "next";
import DecimalTimePage from "./DecimalTimePage";

export const metadata: Metadata = {
    title: "Decimal Time",
    description: "Get the current decimal time and convert between it and the less efficient representation",
    keywords: ["programming", "programmer", "decimaltime", "decimal", "time", "date", "picker"],
};

export default function Page() {
    return <DecimalTimePage />;
}
