import { cn } from '@/utils/cn';
export interface ButtonInterface
  extends React.ComponentPropsWithoutRef<'button'> {}

export function Button({ className, ...params }: ButtonInterface) {
  return (
    <button
      className={cn(
        'shadow rounded hover:opacity-80 transition-opacity duration-400',
        className
      )}
      {...params}
    />
  );
}
