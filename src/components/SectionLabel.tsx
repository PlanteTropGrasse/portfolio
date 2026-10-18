type Props = {
  index: string;
  label: string;
};

export default function SectionLabel({ index, label }: Props) {
  return (
    <p className="section-label reveal">
      <span className="mono section-label__index">{index}</span>
      <span className="section-label__rule" />
      <span className="section-label__text">{label}</span>
    </p>
  );
}
