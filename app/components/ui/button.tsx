import { cva } from 'class-variance-authority';
import { Button } from 'react-aria-components';
import type { VariantProps } from 'class-variance-authority';
import type { ButtonProps } from 'react-aria-components';
import { cn } from '~/utils/cn';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        fill: '',
        outline: '',
        soft: '',
        text: '',
      },
      color: {
        brand: '',
        neutral: '',
        error: '',
      },
    },
    compoundVariants: [
      // BRAND STYLES ----------------------------------------------------------------------
      {
        color: 'brand',
        className: ['focus:ring-brand-400'],
      },
      {
        variant: 'fill',
        color: 'brand',
        className: [
          'bg-brand-500 text-white text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-brand-600',
          'focus:bg-brand-600',
        ],
      },
      {
        variant: 'soft',
        color: 'brand',
        className: [
          'bg-brand-100 text-brand-500 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-brand-200 hover:text-brand-700',
          'focus:bg-brand-200 focus:text-brand-700',
        ],
      },
      {
        variant: 'outline',
        color: 'brand',
        className: [
          'bg-transparent text-brand-500 border border-brand-200 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:border-brand-500',
          'focus:border-brand-300',
        ],
      },
      {
        variant: 'text',
        color: 'brand',
        className: [
          'bg-transparent text-brand-500 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-brand-100',
          'focus:bg-brand-100',
        ],
      },
      // NEUTRAL STYLES ----------------------------------------------------------------------
      {
        color: 'neutral',
        className: ['focus:ring-neutral-400'],
      },
      {
        variant: 'fill',
        color: 'neutral',
        className: [
          'bg-neutral-700 text-white text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-neutral-800',
          'focus:bg-neutral-800 ',
        ],
      },
      {
        variant: 'soft',
        color: 'neutral',
        className: [
          'bg-neutral-100 text-neutral-700 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-neutral-200 hover:text-neutral-700',
          'focus:bg-neutral-200 focus:text-neutral-700',
        ],
      },
      {
        variant: 'outline',
        color: 'neutral',
        className: [
          'bg-transparent text-neutral-700 border border-neutral-200 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:border-neutral-500',
          'focus:border-neutral-300',
        ],
      },
      {
        variant: 'text',
        color: 'neutral',
        className: [
          'bg-transparent text-neutral-700 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-neutral-100',
          'focus:bg-neutral-100',
        ],
      },
      // ERROR STYLES ----------------------------------------------------------------------
      {
        color: 'error',
        className: ['focus:ring-error-400'],
      },
      {
        variant: 'fill',
        color: 'error',
        className: [
          'bg-error-500 text-white text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-error-600',
          'focus:bg-error-600 ',
        ],
      },
      {
        variant: 'soft',
        color: 'error',
        className: [
          'bg-error-100 text-error-500 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-error-200 hover:text-error-700',
          'focus:bg-error-200 focus:text-error-700',
        ],
      },
      {
        variant: 'outline',
        color: 'error',
        className: [
          'bg-transparent text-error-500 border border-error-200 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:border-error-500',
          'focus:border-error-300',
        ],
      },
      {
        variant: 'text',
        color: 'error',
        className: [
          'bg-transparent text-error-500 text-sm font-medium h-10 px-4 py-2 rounded-md',
          'hover:bg-error-100',
          'focus:bg-error-100',
        ],
      },
    ],
    defaultVariants: {
      variant: 'fill',
      color: 'brand',
    },
  },
);

type _ButtonProps = ButtonProps & VariantProps<typeof buttonVariants>;

const _Button = ({ className, variant, color, ...props }: _ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(buttonVariants({ variant, color, className }))}
    />
  );
};

export { _Button as Button };
export type { _ButtonProps as ButtonProps };
