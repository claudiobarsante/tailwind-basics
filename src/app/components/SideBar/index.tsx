'use client';
import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react';
import Logo from './Logo';
import MainNavigation from './MainNavigation';
import NavItem from './MainNavigation/NavItem';
import UsedSpaceWidget from './UsedSpaceWidget';
import Profile from './Profile';
import { Input } from '../Input';
import Button from '../Button';

export default function SideBar() {
  return (
    // - Control the vertical space between elements using the space-y-{amount} utilities
    // <aside className="min-h-screen space-y-6 border-r border-zinc-200 px-5 py-8">
    // -- could use bottom-0 to fill the entire screen height
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r  lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
/*
In Tailwind CSS, mt-auto is a utility class that sets the top margin of an element to auto. This class is part of Tailwind CSS's flexbox utility set and is particularly useful when working with flexbox layouts.

Here's a breakdown of what mt-auto does:

mt: This stands for margin-top, indicating that the utility class affects the margin on the top side of the element.
auto: This value instructs the browser to automatically determine the margin space, typically pushing the element to the bottom of its container when used in combination with flexbox.
When applied to an element within a flex container, mt-auto will push that element to the bottom of the container, effectively aligning it to the end of the flex container along the main axis (usually the vertical axis if using the default flex direction of flex-col). */
