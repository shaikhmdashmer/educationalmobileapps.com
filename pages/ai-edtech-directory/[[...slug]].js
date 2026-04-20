import EdTechDirectory, { getAllSlugs } from '../../components/EdTechDirectory';

export default function AiEdTechDirectoryApp() {
  return <EdTechDirectory basePath="/ai-edtech-directory" />;
}

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = [
    { params: { slug: [] } },
    ...slugs.map(slug => ({ params: { slug: ['directory', slug] } })),
  ];
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}
