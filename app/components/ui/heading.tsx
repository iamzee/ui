import { cva } from 'class-variance-authority';
import { Heading } from 'react-aria-components';
import type { HeadingProps } from 'react-aria-components';
import { cn } from '~/utils/cn';

type _HeadingProps = Omit<HeadingProps, 'level'> & {
  level?: 1 | 2 | 3 | 4;
  color?: 'dark' | 'normal' | 'soft';
};

const _headingVariants = cva('tracking-light', {
  variants: {
    level: {
      1: 'text-5xl font-extrabold',
      2: 'text-3xl font-semibold',
      3: 'text-2xl font-semibold',
      4: 'text-xl font-semibold',
    },
    color: {
      dark: 'text-neutral-900',
      normal: 'text-neutral-500',
      soft: 'text-neutral-200',
    },
  },
  defaultVariants: {
    level: 1,
    color: 'dark',
  },
});

export const _Heading = ({
  level,
  className,
  color,
  ...props
}: _HeadingProps) => {
  return (
    <Heading
      {...props}
      level={level}
      className={cn(_headingVariants({ level, color, className }))}
    />
  );
};

export { _Heading as Heading, _headingVariants as headingVariants };
export type { _HeadingProps as HeadingProps };
