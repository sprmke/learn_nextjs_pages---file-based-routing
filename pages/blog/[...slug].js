import { useRouter } from 'next/router';

const BlogPostsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log('slug::', slug);

  return <div>BlogPostsPage</div>;
};

export default BlogPostsPage;
