import { Gallery } from "@/components";

export default function Home() {
  return (
    <section className="space-y-32">
      {/* @ts-expect-error Server Component */}
      <Gallery category="Men's clothing" />
    </section>
  );
}
