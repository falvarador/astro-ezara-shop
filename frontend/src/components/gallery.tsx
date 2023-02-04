import { Card } from "@/components";

export function Gallery() {
  return (
    <section className="mx-auto w-3/4">
      <h2 className="py-8">Title</h2>
      <div className="flex flex-wrap gap-4">
        <Card description="Product 1" name="Product name" price={12.5} />
        <Card description="Product 2" name="Product Name" price={6.5} />
        <Card description="Product 3" name="Product Name" price={22.4} />
        <Card description="Product 4" name="Product Name" price={90} />
      </div>
    </section>
  );
}
