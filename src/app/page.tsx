import { Mail } from 'lucide-react';
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
              className="rounded-lg border  border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings-form"
              className="rounded-lg bg-violet-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-violet-700"
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
        </form>
      </main>
    </>
  );
}
