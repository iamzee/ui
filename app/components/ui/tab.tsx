/**
 * TODO: add support for text tabs (new variant)
 * TODO: add support for vertical tabs
 */

import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';
import type {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from 'react-aria-components';
import { cn } from '~/utils/cn';

type _TabsProps = TabsProps;

const _Tabs = ({ className, ...props }: _TabsProps) => {
  return <Tabs {...props} className={cn('', className)} />;
};

type _TabListProps<T> = TabListProps<T>;

const _TabList = <T extends object>({
  className,
  ...props
}: _TabListProps<T>) => {
  return (
    <TabList
      {...props}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded bg-neutral-100 p-1',
        className,
      )}
    />
  );
};

type _TabProps = TabProps;

const _Tab = ({ className, ...props }: _TabProps) => {
  return (
    <Tab
      {...props}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium text-neutral-400',
        'selected:bg-white selected:text-neutral-900 selected:shadow-sm selected:outline-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 focus-visible:ring-offset-white',
        'disabled:pointer-events-none disabled:opacity-50',
        'transition-all',
        className,
      )}
    />
  );
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
