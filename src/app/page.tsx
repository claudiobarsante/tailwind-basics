import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react';
import { FileInput } from './components/Form/FileInput';
import { Input } from './components/Input';
import Select from './components/Select';
import SettingsTabs from './components/SettingsTabs';
import SelectItem from './components/Select/SelectItem';
import Textarea from './components/Textarea';
import Button from './components/Button';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>
      <SettingsTabs />
      <main className="mt-8 flex flex-col">
        <header className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="sapce-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-sm  text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here
            </span>
          </div>
          <div className="ml-auto flex gap-3">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings-form">
              Save
            </Button>
          </div>
        </header>

        <form
          id="settings-form"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm  dark:text-zinc-300">
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" placeholder="First name" />
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300">
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" placeholder="Last name" />
                </Input.Root>
              </div>
            </div>
            <div />
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your photo
              <span className="mt-0.5 block text-sm text-zinc-500">This will be displayed on your profile</span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control isMultiple={false} />
            </FileInput.Root>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" type="text" placeholder="what is your role" />
            </Input.Root>
            <div />
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="contry" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United  States" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="us" text="Pacific Standard Time (UTC-08:00) " />
              <SelectItem value="br" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="mt-0.5 block text-sm text-zinc-500">Write a short introduction</span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  {/* strokeWidth = the thicness of the icon*/}
                  <Button type="button" variant="ghost">
                    <Bold className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue={
                  "I'm a Product Designer based in Melbourne, Australia. I specialized in UX/UI design, brand strategy, and Webflow development."
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings-form">
              Save
            </Button>
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
