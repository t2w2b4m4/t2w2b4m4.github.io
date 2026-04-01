const getImagePathByFileName = (exhibitionData, fileName, specialRendering) => {
  if (specialRendering) {
    return `./assets/exhibitions/_high-resolution/${fileName}`;
  }
  return `./assets/exhibitions/${exhibitionData.meta.imageFolderName}/${fileName}`;
};

export default getImagePathByFileName;
