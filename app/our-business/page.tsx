import PageWrapper from "@/components/ui/PageWrapper";
import Link from "next/link";

export default function OurBusinessPage() {
  return (
    <PageWrapper title="Our Business">
      <ul style={{ lineHeight: 2 }}>
        <li>
          <Link href="/our-business/ai">Artificial Intelligence</Link>
        </li>
        <li>
          <Link href="/our-business/ev">Electric Vehicles</Link>
        </li>
        <li>
          <Link href="/our-business/agritech">AgriTech</Link>
        </li>
      </ul>
    </PageWrapper>
  );
}
