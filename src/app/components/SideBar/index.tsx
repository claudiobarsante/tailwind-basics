import React from 'react';
import Logo from './Logo';
import { Cog, LifeBuoy, Search } from 'lucide-react';
import MainNavigation from './MainNavigation';
import NavItem from './MainNavigation/NavItem';
import UsedSpaceWidget from './UsedSpaceWidget';
import Profile from './Profile';
import { Input } from '../Input';

export default function SideBar() {
  return (
    // - Control the vertical space between elements using the space-y-{amount} utilities
    // <aside className="min-h-screen space-y-6 border-r border-zinc-200 px-5 py-8">
    <aside className="flex min-h-screen flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      {/*-- composition pattern --*/}
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <MainNavigation />
      {/*mt-auto will push the content to the bottom */}
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  );
}
/*
In Tailwind CSS, mt-auto is a utility class that sets the top margin of an element to auto. This class is part of Tailwind CSS's flexbox utility set and is particularly useful when working with flexbox layouts.

Here's a breakdown of what mt-auto does:

mt: This stands for margin-top, indicating that the utility class affects the margin on the top side of the element.
auto: This value instructs the browser to automatically determine the margin space, typically pushing the element to the bottom of its container when used in combination with flexbox.
When applied to an element within a flex container, mt-auto will push that element to the bottom of the container, effectively aligning it to the end of the flex container along the main axis (usually the vertical axis if using the default flex direction of flex-col). */
