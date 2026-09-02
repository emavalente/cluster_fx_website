type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <>
      <h1 className="section-title">{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}
