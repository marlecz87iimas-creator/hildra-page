import type { ProductPreviewId } from "@/types";
import { CosteaPreview } from "./CosteaPreview";
import { StockeaPreview } from "./StockeaPreview";
import { WebPreview } from "./WebPreview";

const previews = {
  costea: CosteaPreview,
  stockea: StockeaPreview,
  web: WebPreview,
} as const;

export function ProductPreview({ id }: { id: ProductPreviewId }) {
  const Preview = previews[id];
  return <Preview />;
}
