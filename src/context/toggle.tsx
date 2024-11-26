import { createContext, useContext } from 'react';

import { useToggle } from '@/hooks/useToggle';

type ToggleContextType = {
  value: boolean;
  setOpen: () => void;
  setClose: () => void;
};

const ToggleContext = createContext<ToggleContextType | null>(null);

export function useToggleContext() {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('May problem lods HAHAHAHHA');
  return context;
}

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const { value, setOpen, setClose } = useToggle();
  return (
    <ToggleContext.Provider value={{ value, setOpen, setClose }}>
      {children}
    </ToggleContext.Provider>
  );
}
