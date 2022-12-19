export const IMAGES = [
  {
    src: "https://ecologiclandscape.com/wp-content/uploads/2020/12/living-los-angeles-2-848x480.jpg",
  },
  {
    src: "https://www.design-scapes-inc.com/wp-content/uploads/2021/08/los-angeles-landscape-designers.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    src: "https://www.nyip.edu/images/cms/photo-articles/the-best-place-to-focus-in-a-landscape.jpg",
  },
  {
    src: "https://media.architecturaldigest.com/photos/60d20f8d9f3cb91f0b9c0e95/16:9/w_1280,c_limit/GL.jpg",
  },
  {
    src: "https://wallpaperaccess.com/full/170249.jpg",
  },
];

export default IMAGES;

export async function getUnsplashImages(subject: string) {
  const url = `https://api.unsplash.com/photos/?client_id=nWCpf8N35_0nkL6feuo-cCAMq-Ioxw55wohncO-ocZQ&query=${subject}&page=1&per-page=50`;
  const results = await fetch(url);
  const data = await results.json();
  return data.map((item: any) => {
    return {
      src: item.urls.small,
    };
  });
}
