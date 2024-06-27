export type DestinationType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type CrewType = {
  name: string;
  role: string;
  images: {
    png: string;
    webp: string;
  };
  bio: string;
};

export type TechType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
