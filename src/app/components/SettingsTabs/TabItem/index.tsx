'use client';
import * as Tabs from '@radix-ui/react-tabs';

type TabItemProps = {
  value: string;
  title: string;
  isSelected?: boolean;
};
function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state='active']:text-violet-700"
    >
      <span>{title}</span>
      {isSelected && <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"></div>}
    </Tabs.Trigger>
  );
}
/*Radix Tab component has a data attribute called data-state indicating if the tab is active or not
data-state="active" or data-state="inactive", so use data-[state] to work with the state*/
/*
using left-0 and right-0 to set the position:
#the result will be the size the same as its parent
These utility classes are typically used with absolute or fixed positioning to 
precisely control the placement of elements within their container. For example, you might use left-0 to position an element at the left edge of a container or right-0 to position an element at the right edge of a container.
*/
export default TabItem;
