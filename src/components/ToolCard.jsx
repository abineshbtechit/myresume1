import { ExternalLink } from 'lucide-react';
import { ToolIcon } from './ToolIcons';

export default function ToolCard({ tool }) {
  return (
    <article className="tool-card">
      <div className="tool-card__header">
        <h3 className="tool-card__title">{tool.name}</h3>
        <p className="tool-card__category">{tool.category}</p>
      </div>

      <div className="tool-card__icon-wrap">
        <ToolIcon name={tool.icon || tool.name} size={64} className="tool-card__icon" />
      </div>

      <div className="tool-card__footer">
        <a
          href={tool.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-card__btn"
          aria-label={`Learn source of ${tool.name}`}
        >
          <span>Learn Source</span>
          <ExternalLink size={13} className="tool-card__btn-icon" />
        </a>
      </div>
    </article>
  );
}
