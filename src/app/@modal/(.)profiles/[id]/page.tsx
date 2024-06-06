import { Modal } from './modal';

export default function ProfileModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Modal>Profile {id}</Modal>;
}