import Link from 'next/link'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Profiles',
}

type Profile = { id: number };
type Profiles = Profile[];

const profiles: Profiles = Array.from({ length: 6 }).map((_, index) => ({ id: index + 1 }));

const getProfiles = async (): Promise<Profiles> => {
  return new Promise(r => setTimeout(() => r(profiles), 1000))
}
 

export default async function Profiles() {

  const profiles: Profiles = await getProfiles();

  return profiles.map(profile => <Link key={profile.id} href={`/profiles/${profile.id}`}>Profile {profile.id}</Link>);
}
