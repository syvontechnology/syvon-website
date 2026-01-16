import PageWrapper from "@/components/ui/PageWrapper";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <PageWrapper title="Our Products">
      <ul style={{ lineHeight: 2 }}>
        <li>
          <Link href="/products/ai-iot-robotics">AI IoT Robotics</Link>
        </li>
        <li>
          <Link href="/products/software-development">Software Development</Link>
        </li>
        <li>
          <Link href="/products/e-mobility">E-Mobility & Drones</Link>
        </li>
      </ul>
    </PageWrapper>
  );
}
