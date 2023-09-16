const getCroppedImagesUrl = (url: string) => {
  const target = "media/".length;
  const index = url.indexOf("media/") + target;
  //   console.log(url.slice(0, url.indexOf("media/")));
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImagesUrl;
