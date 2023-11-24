export const constructImageUrl = (relativePath: string) => {
  // Replace "file://" with the base URL or path to your images
  const baseUrl = 'http://gisto.cloud/@/file/'; // http://gisto-backend.test/@/file/ // https://api.gianluca.space/gisto/@/file/
  return relativePath
    ? `${baseUrl}/${relativePath.replace('file://', '')}`
    : null;
}

