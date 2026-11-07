export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h2>Services Section</h2>

      <nav>
        <p>Explore Our Services</p>
      </nav>

      {children}
    </div>
  );
}