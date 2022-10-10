import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return <div>Project - {projectId}</div>;
};

export default PortfolioProjectPage;
