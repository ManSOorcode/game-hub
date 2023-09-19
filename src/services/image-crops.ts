import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImagesUrl = (url: string) => {
  // console.log(url);
  if (!url) return noImage;
  const target = "media/".length;
  const index = url.indexOf("media/") + target;
  //   console.log(url.slice(0, url.indexOf("media/")));
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImagesUrl;
