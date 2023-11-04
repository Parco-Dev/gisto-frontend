export const constructImageUrl = (relativePath: string) => {
  // Replace "file://" with the base URL or path to your images
  const baseUrl = 'http://gisto-backend.test/@/file/'; // Replace with your actual URL
  return `${baseUrl}/${relativePath.replace('file://', '')}`;
}

