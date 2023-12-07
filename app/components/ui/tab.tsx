/**
 * TODO: add support for vertical tabs
 * TODO: add support for different sizes (same sizes that are in button)
 * TODO: handle focus for TabPanel component
 */

import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';
import type {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from 'react-aria-components';
import { cn } from '~/utils/cn';

type TTabContext = {
  variant?: 'fill' | 'text';
};

const TabContext = createContext<TTabContext>({ variant: 'fill' });

type _TabsProps = TabsProps & TTabContext;

const _Tabs = ({ className, variant, ...props }: _TabsProps) => {
  return (
    <TabContext.Provider value={{ variant }}>
      <Tabs {...props} className={cn('', className)} />
    </TabContext.Provider>
  );
};

const tabListVariants = cva('inline-flex h-10 items-center justify-center', {
  variants: {
    variant: {
      fill: 'bg-neutral-100 p-1 rounded',
      text: 'bg-white',
    },
  },
  defaultVariants: {
    variant: 'fill',
  },
});

type _TabListProps<T> = TabListProps<T>;

const _TabList = <T extends object>({
  className,
  ...props
}: _TabListProps<T>) => {
  const { variant } = useContext(TabContext);
  return (
    <TabList
      {...props}
      className={cn(tabListVariants({ variant, className }))}
    />
  );
};

const tabVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-neutral-400 h-full w-full rounded',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-white',
    // 'transition-all',
  ],
  {
    variants: {
      variant: {
        fill: [
          'selected:bg-white selected:text-neutral-900 selected:shadow-sm selected:outline-none',
          'focus-visible:ring-offset-2',
        ],
        text: [
          "relative after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:w-full after:bg-neutral-200",
          'data-[selected]:after:bg-brand-500 data-[selected]:outline-none data-[selected]:text-neutral-900',
          'focus-visible:ring-offset-0 data-[focus-visible]:after:h-0',
        ],
      },
    },
    defaultVariants: {
      variant: 'fill',
    },
  },
);

type _TabProps = TabProps;

const _Tab = ({ className, ...props }: _TabProps) => {
  const { variant } = useContext(TabContext);
  return <Tab {...props} className={cn(tabVariants({ variant, className }))} />;
};

type _TabPanelProps = TabPanelProps;

const _TabPanel = ({ className, ...props }: _TabPanelProps) => {
  return <TabPanel {...props} className={cn('mt-2', className)} />;
};

export {
  _Tabs as Tabs,
  _TabList as TabList,
  _Tab as Tab,
  _TabPanel as TabPanel,
};

export type {
  _TabsProps as TabsProps,
  _TabListProps as TabListProps,
  _TabProps as TabProps,
  _TabPanelProps as TabPanelProps,
};
