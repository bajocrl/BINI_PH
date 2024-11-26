import { cn } from '@/utils/cn';
type ImageType = React.ComponentPropsWithoutRef<'img'>;

export function Image({ className, ...args }: ImageType) {
  return (
    <img className={cn('w-full h-full object-cover', className)} {...args} />
  );
}
