import Link from 'next/link'

export default function Profiles() {

  const profiles = Array.from({ length: 6 }).map((p, index) => ({ id: index + 1 }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h4 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Profiles
        </h4>

        {profiles.map(profile => <Link key={profile.id} href={`/profiles/${profile.id}`}>Profile {profile.id}</Link>)}

      </div>
    </main>
  );
}
