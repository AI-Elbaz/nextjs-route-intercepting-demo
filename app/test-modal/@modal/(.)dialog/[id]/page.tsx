import { Dialog } from './_dialog';

// the error only appears when using generateStaticParams
// fully static routes does not have this issue only in SSG
// keeping the route dynamic doesn't show the error
// adding await connection() in the function also removes the error
export const generateStaticParams = async () => {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function ModalDialog({ params }: PageProps<"/test-modal/dialog/[id]">) {
  const {id} =  await params;

  return <Dialog id={id} />;
}