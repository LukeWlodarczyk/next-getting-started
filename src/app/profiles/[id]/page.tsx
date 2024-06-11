import Link from "next/link";
import { Metadata } from 'next'
import LikeButton from "@/app/components/like-button/LikeButton";
import { notFound } from "next/navigation";
import { Profile } from "../page";


type MetadataProps = {
  params: { id: string }
}

export function generateMetadata({ params: { id } }: MetadataProps): Metadata {
  return {
    title: `Profile ${id}`,
  }
}

const getProfile = async (id: string): Promise<Profile> => {
  return new Promise((res => setTimeout(() => res({ id: parseInt(id) }), 4000)))
}


export default async function ProfilePage({ params }: { params: { id: string } }) {

  const profile: Profile = await getProfile(params.id);

  // not found mock
  if (Number(params.id) === 6) {
    return notFound();
  }

  return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          Profile {profile.id}
        </p>
        <div className="flex items-center justify-between">
          <LikeButton />
          <Link href='/profiles'>Go back to Profiles</Link>
        </div>
      </div>
  );
}
