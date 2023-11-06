export const useCursor = () => useState<any>('Cursor', () => {
  return { position: { x: 0, y: 0 }, active: false, text: null }
})

export const showCursor = () => {
  useCursor().value.active = true;
}

export const hideCursor = () => {
  useCursor().value.active = false;
}

export const setCursorPosition = (position: {x: number, y: number }) => {
  useCursor().value.position = position;
}
