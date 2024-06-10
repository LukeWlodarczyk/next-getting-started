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
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          Profile {params.id}
        </p>
        <div className="flex items-center justify-between">
          <LikeButton />
          <Link href='/profiles'>Go back to Profiles</Link>
        </div>
      </div>
  );
}
