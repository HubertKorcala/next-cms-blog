import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const dataset = process.env.NEXT_PUBLIC_DATASET;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
