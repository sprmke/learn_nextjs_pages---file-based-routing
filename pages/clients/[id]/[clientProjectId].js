import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();
  const { clientProjectId } = router.query;
  return <div>ClientProjectPage - {clientProjectId}</div>;
};

export default ClientProjectPage;
