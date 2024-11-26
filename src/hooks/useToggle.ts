import { useState } from 'react';

export function useToggle() {
  const [value, setValue] = useState(false);
  const setOpen = () => setValue(true);
  const setClose = () => setValue(false);
  return { value, setOpen, setClose };
}
