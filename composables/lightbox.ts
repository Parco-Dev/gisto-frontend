export const useLightboxContent = () => useState<any>('lightboxContent', () => [])

export const setLightboxContent = (groups: {title: string, files: any}[]) => {
  useLightboxContent().value = groups;
}

export const useLightbox = () => useState<any>('lightbox', () => false)

export const setLightbox = (value: boolean) => {
  useLightbox().value = value;
}

export const useLightboxGroupIndex = () => useState<any>('lightboxGroupIndex', () => null)

export const setLightboxGroupIndex = (index: number) => {
  useLightboxGroupIndex().value = index;
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
  setLightboxGroupIndex(-1);
  setLightboxContent([]);
}

export const useFilesList = () => useState<any>('filesList', () => false)

export const setFilesList = (value: boolean) => {
  useFilesList().value = value;
}

export const loadFiles = (group: any) => {
  if (process.client) {
    group?.files?.forEach((file: any) => {
      if (file.url_1280) {
        const image = new Image();
        image.onload = () => {
          file.loaded = true;
        }
        image.src = file.url_1280;
      }
    })
  }
}
