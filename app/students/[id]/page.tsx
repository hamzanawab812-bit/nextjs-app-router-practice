 export const instant = false;
 type StudentPageProps = {
  params: Promise<{ id: string }>;
};

export default async function StudentPage({
  params,
}: StudentPageProps) {
  const { id } = await params;

  return (
    <section>
      <h1>Student Details</h1>
      <p>Student ID: {id}</p>
    </section>
  );
}