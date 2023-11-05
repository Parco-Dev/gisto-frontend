export const useLightboxContent = () => useState<any>('lightboxContent', () => [])

export const setLightboxContent = (index: number, files: any) => {
  useLightboxContent().value = {files, index};
}

export const useLightbox = () => useState<any>('lightbox', () => false)

export const setLightbox = (value: boolean) => {
  useLightbox().value = value;
}

export const useLightboxSlideIndex = () => useState<any>('lightboxSlideIndex', () => null)

export const setLightboxSlideIndex = (index: number) => {
  useLightboxSlideIndex().value = index;
}

export const openLightbox = (index?: number) => {
  setLightbox(true);
  setLightboxSlideIndex(index ?? 0);
}

export const closeLightbox = () => {
  setLightbox(false);
  setLightboxSlideIndex(-1);
}

export const useFilesList = () => useState<any>('filesList', () => false)

export const setFilesList = (value: boolean) => {
  useFilesList().value = value;
}

