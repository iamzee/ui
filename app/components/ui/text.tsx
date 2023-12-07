import { cva } from 'class-variance-authority';
import { Text } from 'react-aria-components';
import type { TextProps } from 'react-aria-components';
import { cn } from '~/utils/cn';

const _textVariants = cva('', {
  variants: {
    color: {
      dark: 'text-neutral-900',
      normal: 'text-neutral-500',
      soft: 'text-neutral-200',
    },
  },
  defaultVariants: {
    color: 'dark',
  },
});

type _TextProps = TextProps & { color: 'dark' | 'normal' | 'soft' };

const _Text = ({ className, color, ...props }: _TextProps) => {
  return (
    <Text {...props} className={cn(_textVariants({ color, className }))} />
  );
};

export { _Text as Text, _textVariants as textVariants };
export type { _TextProps as TextProps };
