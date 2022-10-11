import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();
  const { id, clientProjectId } = router.query;
  return (
    <div>
      ClientProjectPage - {id} - {clientProjectId}
    </div>
  );
};

export default ClientProjectPage;
