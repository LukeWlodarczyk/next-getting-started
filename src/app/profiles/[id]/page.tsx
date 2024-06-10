import Link from "next/link";
import { Metadata } from 'next'
import LikeButton from "@/app/components/like-button/LikeButton";


type MetadataProps = {
  params: { id: string }
}

export function generateMetadata({ params: { id } }: MetadataProps): Metadata {
  return {
    title: `Profile ${id}`,
  }
}


export default function Profile({ params }: { params: { id: string } }) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Profile {params.id}
        </p>
        <div className="flex items-center justify-between">
          <LikeButton />
          <Link href='/profiles'>Go back to Profiles</Link>
        </div>
      </div>
    </main>
  );
}
