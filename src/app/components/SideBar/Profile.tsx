import { LogOut } from 'lucide-react';
import React from 'react';
import Button from '../Button';

function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img src="https://github.com/claudiobarsante.png" alt="profile picture" className="h-10 w-10 rounded-full" />
      <div className="flex flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700 dark:text-zinc-100">Claudio Barsante</span>
        <span className=" truncate text-sm/5 font-normal text-zinc-500 dark:text-zinc-400">claudio@untitledui.com</span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}

export default Profile;

// -- if the e-mail or name are too big, use tailwind truncate class
// -- to avoind overflowinf the div
/*
truncate	
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
*/
