import PageWrapper from "@/components/ui/PageWrapper";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Syvon",
  description: "Get in touch with Syvon for business, partnerships, or careers.",
};


export default function ContactPage() {
  return (
    <PageWrapper title="Contact Us">
      <ContactClient />
    </PageWrapper>
  );
}