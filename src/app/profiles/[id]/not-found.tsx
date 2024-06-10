import Link from "next/link";

export default function NotFound() {
  return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          Profile not found
        </p>
        <div className="flex items-center justify-between">
          <Link href='/profiles'>Go back to Profiles</Link>
        </div>
      </div>
  );
}
