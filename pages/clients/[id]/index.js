import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const loadProjectHandler = () => {
    // router.replace('/clients/mike/project-a');
    // router.push('/clients/mike/project-a');
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: id, clientProjectId: 'project-a' },
    });
  };

  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
