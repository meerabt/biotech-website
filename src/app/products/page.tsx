import { Suspense } from "react";
import ProductsContent from "./productContent";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center bg-white text-black h-screen">
          Loading products...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
