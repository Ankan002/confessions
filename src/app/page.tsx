import { Navbar } from "@/components/navbar";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-primary-light dark:bg-primary-dark">
      <Navbar />
    </main>
  )
}
