import { CardSkeleton } from "~/components";

export function GallerySkeleton() {
  const products = Array.from({ length: 12 }, (_, i) => {
    return {
      id: i,
    };
  });

  return (
    <section className="mx-auto w-3/4">
      <h2 className="py-8">Loading...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {products?.map((product) => (
          <CardSkeleton key={product.id} />
        ))}
      </div>
    </section>
  );
}
