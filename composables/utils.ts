export const constructImageUrl = (relativePath: string) => {
  // Replace "file://" with the base URL or path to your images
  const baseUrl = 'https://api.gianluca.space/gisto/@/file/'; // Replace with your actual URL
  return `${baseUrl}/${relativePath.replace('file://', '')}`;
}

