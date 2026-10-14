import ToolCard from './ToolCard';
import { tools } from '../data/tools';

export default function ToolsGrid() {
  return (
    <div className="tools-showcase">
      <div className="tools-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
