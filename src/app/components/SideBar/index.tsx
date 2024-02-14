import React from 'react';
import Logo from './Logo';
import { Search } from 'lucide-react';

export default function SideBar() {
  return (
    // - Control the vertical space between elements using the space-y-{amount} utilities
    <aside className="min-h-screen space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div
        className="flex w-full items-center gap-2 rounded-lg border border-zinc-300
	 px-3 py-2 shadow-sm"
      >
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
          placeholder="Search"
        />
      </div>
    </aside>
  );
}
