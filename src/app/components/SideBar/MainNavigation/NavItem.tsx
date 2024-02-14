import { ChevronDown } from 'lucide-react';
import React, { ElementType } from 'react';

export interface NavItemProps {
  title: string;
  icon: ElementType;
}
// -- Icon has to be with the first letter capitalized because it is a component
export default function NavItem({ title, icon: Icon }: NavItemProps) {
  /* {When you need to style an element based on the state of some parent 
     element, mark the parent with the group class, and use group-* modifiers 
     like group-hover to style the target element} https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state */
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="text-lg font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      {/* <!-- ml-auto, ChevronDown will be pushed to the right --> */}
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  );
}
