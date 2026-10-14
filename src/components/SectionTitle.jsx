export default function SectionTitle({ eyebrow, title, subtitle, className = '', align = 'center' }) {
  const isCentered = align === 'center' || className.includes('center') || align !== 'left';

  return (
    <div className={`section-title ${isCentered ? 'section-title--center' : ''} ${className}`.trim()}>
      <div className="section-title__content">
        {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
      </div>
    </div>
  );
}