import './MarqueeBanner.css';

type Props = {
  text: string;
  reverse?: boolean;
  repeat?: number;
};

/** Pure-CSS infinite marquee: two identical groups translated by -50% for a seamless loop. */
export default function MarqueeBanner({ text, reverse = false, repeat = 6 }: Props) {
  const items = Array.from({ length: repeat }, (_, i) => (
    <span className="marquee__item" key={i}>
      {text} -
    </span>
  ));

  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        <div className="marquee__group">{items}</div>
        <div className="marquee__group">{items}</div>
      </div>
    </div>
  );
}
