export const images = {
  hero: "/new hero.png",
  aboutPrimary: "/gallery/victorious/victorious-021.jpeg",
  aboutSecondary: "/gallery/victorious/victorious-003.jpeg",
  contact: "/gallery/victorious/victorious-004.jpeg",

  windows: "/gallery/victorious/victorious-001.jpeg",
  enclosures: "/gallery/victorious/victorious-015.jpeg",
  balustrades: "/gallery/victorious/balustrades-unsplash-0E_LOoYCtZU.jpeg",
  doors: "/gallery/victorious/doors-unsplash-6fHk5fEsUGU.jpeg",
  partitionsShowers: "/gallery/victorious/victorious-009.jpeg",
};

// Map service slug -> image so components can look them up.
export const serviceImage: Record<string, string> = {
  windows: images.windows,
  enclosures: images.enclosures,
  balustrades: images.balustrades,
  doors: images.doors,
  "partitions-showers": images.partitionsShowers,
};
