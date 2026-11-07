export const instant = false;

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  return (
    <section>
      <h1>Blog Details</h1>
      <p>Blog Name: {slug}</p>
    </section>
  );
}