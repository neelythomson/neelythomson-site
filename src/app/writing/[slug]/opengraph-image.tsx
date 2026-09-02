import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getEssay } from "@/lib/substack";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "An essay by Neely Thomson";

export default async function Image({ params }: { params: { slug: string } }) {
  const essay = await getEssay(params.slug);
  return ogImage({
    label: "Writing",
    title: essay?.title ?? "Notes from building marketing engines that outlast the builder.",
    sub: essay?.dek,
  });
}
