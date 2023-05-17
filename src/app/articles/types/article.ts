type Image = {
  src: string;
  alt: string;
};

export type Article = {
  id: string;
  publishedAt: Date;
  title: string;
  description: string;
  slug: string;
  image: Image;
};
