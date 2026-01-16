import { ReactNode } from "react";

export default function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main style={{ padding: "140px 80px 80px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "40px" }}>{title}</h1>
      {children}
    </main>
  );
}
