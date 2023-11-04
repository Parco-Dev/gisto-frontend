export const useLightboxContent = () => useState<any>('lightboxContent', () => [])

export const setLightboxContent = (files: any) => {
  useLightboxContent().value = files;
}

export const useLightbox = () => useState<any>('lightbox', () => false)

export const setLightbox = (value: boolean) => {
  useLightbox().value = value;
}

export const useLightboxIndex = () => useState<any>('lightboxIndex', () => null)

export const setLightboxIndex = (index: number) => {
  useLightboxIndex().value = index;
}

export const openLightbox = (index: number) => {
  setLightbox(true);
  setLightboxIndex(index);
}