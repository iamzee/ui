import { NavLink } from '@remix-run/react';
import { cn } from '~/utils/cn';

const Sidebar = () => {
  return (
    <div className="border-r sticky h-screen p-10 space-y-3">
      <p className="text-neutral-900 font-medium">Components</p>
      <NavLink
        to="/button"
        className={({ isActive }) =>
          cn(
            isActive ? 'text-neutral-900' : 'text-neutral-500',
            'inline-block w-full rounded px-3',
            'hover:text-neutral-900',
          )
        }
      >
        Button
      </NavLink>
      <NavLink
        to="/modal"
        className={({ isActive }) =>
          cn(
            isActive ? 'text-neutral-900' : 'text-neutral-400',
            'inline-block w-full rounded px-3',
            'hover:text-neutral-700',
          )
        }
      >
        Modal
      </NavLink>
    </div>
  );
};

export { Sidebar };
