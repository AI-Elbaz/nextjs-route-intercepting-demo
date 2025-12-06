import { Dialog } from './_dialog';

export default async function ModalDialog({ params }: PageProps<"/test-modal/dialog/[id]">) {
  const {id} =  await params;

  return <Dialog id={id} />;
}