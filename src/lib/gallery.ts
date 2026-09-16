export type MediaType = "image" | "video";
export type MediaItem = { src: string; type: MediaType };

const projectImage = (index: number) =>
  `/images/gallery/projects/project-${String(index).padStart(2, "0")}.jpeg`;

export const gallery: MediaItem[] = Array.from({ length: 41 }, (_, i) => ({
  src: projectImage(i + 1),
  type: "image",
}));

export const homeGallery: MediaItem[] = [
  { src: "/images/gallery/home/our-work-01.jpeg", type: "image" },
  { src: "/images/gallery/home/our-work-02.jpeg", type: "image" },
  { src: "/images/gallery/home/our-work-03.jpeg", type: "image" },
  { src: "/images/gallery/home/our-work-04.jpeg", type: "image" },
];
