import { Mail, UploadCloud, User } from 'lucide-react';
import { Input } from './components/Input';
import SettingsTabs from './components/SettingsTabs';
import { FileInput } from './components/Form/FileInput';

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

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control isMultiple={false} />
            </FileInput.Root>
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
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control isMultiple={true} />
            </FileInput.Root>
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
