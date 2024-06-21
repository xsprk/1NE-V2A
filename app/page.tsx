"use client"

import Files from "@/components/files/Files";
import { Footer } from "@/components/footer";
import { HeaderMenu } from "@/components/HeaderMenu";

export default function Home() {

  return (
    <>
      <HeaderMenu />
      <Files />
      <Footer />
    </>
  );
}
