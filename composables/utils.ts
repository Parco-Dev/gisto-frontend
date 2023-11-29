export const constructImageUrl = (relativePath: string) => {
  // Replace "file://" with the base URL or path to your images
  const baseUrl = 'http://gisto.cloud/@/file/'; // http://gisto-backend.test/@/file/ // https://api.gianluca.space/gisto/@/file/
  return relativePath
    ? `${baseUrl}/${relativePath.replace('file://', '')}`
    : undefined;
}

export const textareaToArray = (text: string) => {
  const str = text.replaceAll('</p><p>', '$').replaceAll('<br>', '$').replace('<p>', '$').replace('</p>', '$');
  return str.split('$').filter((a: string) => a);
}