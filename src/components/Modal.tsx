import { ToggleProvider, useToggleContext } from '@/context/toggle';
import { Button, ButtonInterface } from '@/components/Button';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';

export interface ModalInterface extends React.ComponentPropsWithoutRef<'div'> {}

export const Modal = ToggleProvider;

function ModalOverlay() {
  return <div className='fixed inset-0 bg-black/80 z-50' />;
}

export function ModalOpen(params: ButtonInterface) {
  const { value, setOpen } = useToggleContext();
  return <Button disabled={value} onClick={setOpen} {...params} />;
}

export const ModalContent = ({
  className,
  children,
  ...params
}: ModalInterface) => {
  const { value, setClose } = useToggleContext();
  if (!value) return null;
  else
    return createPortal(
      <>
        <ModalOverlay />
        <div
          className={cn(
            'fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50',
            className
          )}
          {...params}
        >
          <Button
            disabled={!value}
            onClick={setClose}
            className='w-10 h-10 text-3xl absolute top-4 right-4 shadow-none'
          >
            🌸
          </Button>
          {children}
        </div>
      </>,
      document.getElementById('portal')!
    );
};
