import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Product({ params }: { params: Params }) {
  return <div>soy un producto {params.id}</div>;
}
