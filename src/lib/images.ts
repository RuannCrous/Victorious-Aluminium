export const images = {
  hero: "/images/hero/home-hero.png",
  aboutPrimary: "/images/gallery/projects/project-21.jpeg",
  aboutSecondary: "/images/gallery/projects/project-03.jpeg",
  contact: "/images/gallery/projects/project-04.jpeg",

  windows: "/images/gallery/projects/project-01.jpeg",
  enclosures: "/images/gallery/projects/project-15.jpeg",
  balustrades: "/images/services/balustrades.jpeg",
  doors: "/images/services/doors.jpeg",
  partitionsShowers: "/images/services/office-partitioning.jpeg",
};

// Map service slug -> image so components can look them up.
export const serviceImage: Record<string, string> = {
  windows: images.windows,
  enclosures: images.enclosures,
  balustrades: images.balustrades,
  doors: images.doors,
  "partitions-showers": images.partitionsShowers,
};
