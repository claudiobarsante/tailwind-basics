import { Mail, UploadCloud, User } from 'lucide-react';
import { Input } from './components/Input';
import SettingsTabs from './components/SettingsTabs';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <main className="mt-8 flex flex-col">
        <header className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="sapce-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm  text-zinc-500">Update your photo and personal details here</span>
          </div>
          <div className="ml-auto flex gap-3">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </header>

        <form id="settings-form" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          <div className="grid grid-cols-form gap-3">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" placeholder="First name" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="lastName" placeholder="Last name" />
              </Input.Root>
            </div>
            <div />
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="size-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" type="email" placeholder="email@untitledui.com" />
            </Input.Root>
            <div />
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="mt-0.5 block text-sm text-zinc-500">This will be displayed on your profile</span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex size-16 items-center justify-center rounded-full bg-violet-50">
                <User className="size-8 text-violet-600" />
              </div>
              <label
                htmlFor="photo"
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg  border border-zinc-300 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
              >
                <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="size-5  text-zinc-600 group-hover:text-violet-600" />
                </div>
                <div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm">
                      <span className="font-semibold text-violet-700">Click to upload</span> or drag and drop
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                </div>
              </label>
              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" type="text" placeholder="what is your role" />
            </Input.Root>
            <div />
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="contry" className="text-sm font-medium text-zinc-700">
              Country
            </label>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
              Timezone
            </label>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm text-zinc-500">Write a short introduction</span>
            </label>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">Share a few snippets of your work.</span>
            </label>
            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
//======================================================================
/* {When you need to style an element based on the state of some parent 
     element, mark the parent with the group class, and use group-* modifiers 
     like group-hover to style the target element} https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state */
//======================================================================
/*
<label htmlFor='photo'>Selecionar arquivo</label>
<input type="file" className="sr-only" id="photo"/>
Instead of styling the input file,you can style the label and make the input invisible with
'sr-only' but  readable for screen readers
*/
