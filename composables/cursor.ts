export const useCursor = () => useState<any>('Cursor', () => {
  return { position: { x: 0, y: 0, align: null }, active: false, text: null }
})

export const setCursor = (args: { position?: {x: number, y: number, align?: string }, text?: string }) => {
  const { position, text } = args;
  if (position) useCursor().value.position = position;
  if (text) useCursor().value.text = text;
}

export const showCursor = () => {
  useCursor().value.active = true;
}

export const hideCursor = () => {
  useCursor().value.active = false;
}

