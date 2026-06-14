import { ReactNode } from "react";

import Navbar from "../navbar/Navbar";

interface Props {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: Props) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}