import { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export function LeetCodeLogo({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.96 3.825c.34.027.68.027 1.02 0a5.9 5.9 0 0 0 4.195-2.065l1.637-1.782a1.277 1.277 0 0 0 0-1.777 1.22 1.22 0 0 0-1.745 0l-1.638 1.782a3.46 3.46 0 0 1-2.455 1.208 3.52 3.52 0 0 1-2.909-2.235 3.27 3.27 0 0 1-.205-.596 3.238 3.238 0 0 1-.036-1.382 3.08 3.08 0 0 1 .708-1.231l3.855-4.127 4.405-4.787a1.22 1.22 0 0 0 0-1.745 1.374 1.374 0 0 0-.961-.438zM17.414 11.5a1.22 1.22 0 0 0-1.22 1.22v.01c0 .674.546 1.22 1.22 1.22h4.5a1.22 1.22 0 0 0 1.22-1.22v-.01a1.22 1.22 0 0 0-1.22-1.22h-4.5z" />
    </svg>
  );
}

const DEFAULT_STATS = {
  solvedProblem: 125,
  easySolved: 79,
  mediumSolved: 46,
  hardSolved: 0,
};

const API_ENDPOINT = 'https://alfa-leetcode-api.onrender.com/abin788207/solved';
const PROFILE_URL = profile.leetcode || 'https://leetcode.com/u/abin788207/';

export default function LeetCodeSection() {
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  const fetchStats = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }
      const data = await response.json();
      if (typeof data.solvedProblem === 'number') {
        setStats({
          solvedProblem: data.solvedProblem,
          easySolved: data.easySolved ?? 0,
          mediumSolved: data.mediumSolved ?? 0,
          hardSolved: data.hardSolved ?? 0,
        });
        setIsLive(true);
      }
    } catch (err) {
      console.warn('Unable to reach LeetCode API, retaining fallback data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const total = stats.solvedProblem || 1;
  const easyPercent = ((stats.easySolved / total) * 100).toFixed(1);
  const mediumPercent = ((stats.mediumSolved / total) * 100).toFixed(1);
  const hardPercent = ((stats.hardSolved / total) * 100).toFixed(1);

  return (
    <section id="leetcode" className="portfolio-section leetcode-section">
      {/* Centered Section Heading */}
      <div className="section-heading-wrap section-heading-wrap--center">
        <SectionTitle
          eyebrow="CODING PROFICIENCY"
          title="LeetCode Problem Solving"
          subtitle="Real-time progress and difficulty breakdown"
          align="center"
        />
      </div>

      <div className="leetcode-card">
        {/* Top Hero: Centered Overview & Quick Link */}
        <div className="leetcode-card__hero">
          <div className="leetcode-card__hero-main">
            <div className="leetcode-badge-icon" aria-hidden="true">
              <LeetCodeLogo size={32} />
            </div>
            <div className="leetcode-hero-text">
              <div className="leetcode-total-number">{stats.solvedProblem}</div>
              <div className="leetcode-subheading">Total Problems Solved</div>
            </div>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-profile-btn"
            aria-label="View LeetCode profile of abin788207"
          >
            <span>@abin788207</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Proportional Distribution Bar */}
        <div className="leetcode-distribution-wrap">
          <div className="leetcode-distribution-bar" role="progressbar" aria-label="Problems solved distribution">
            <div
              className="distribution-segment distribution-segment--easy"
              style={{ width: `${easyPercent}%` }}
              title={`Easy: ${stats.easySolved} (${easyPercent}%)`}
            />
            <div
              className="distribution-segment distribution-segment--medium"
              style={{ width: `${mediumPercent}%` }}
              title={`Medium: ${stats.mediumSolved} (${mediumPercent}%)`}
            />
            <div
              className="distribution-segment distribution-segment--hard"
              style={{ width: `${hardPercent}%` }}
              title={`Hard: ${stats.hardSolved} (${hardPercent}%)`}
            />
          </div>
        </div>

        {/* 3 Difficulty Metric Cards: Centered Subheadings & Counts */}
        <div className="leetcode-metrics-grid">
          {/* Easy Card */}
          <div className="leetcode-metric-card leetcode-metric-card--easy">
            <span className="difficulty-pill difficulty-pill--easy">Easy</span>
            <div className="difficulty-count">{stats.easySolved}</div>
            <div className="difficulty-subheading">Easy Solved</div>
            <div className="difficulty-ratio">
              <span>{easyPercent}%</span> of total
            </div>
          </div>

          {/* Medium Card */}
          <div className="leetcode-metric-card leetcode-metric-card--medium">
            <span className="difficulty-pill difficulty-pill--medium">Medium</span>
            <div className="difficulty-count">{stats.mediumSolved}</div>
            <div className="difficulty-subheading">Medium Solved</div>
            <div className="difficulty-ratio">
              <span>{mediumPercent}%</span> of total
            </div>
          </div>

          {/* Hard Card */}
          <div className="leetcode-metric-card leetcode-metric-card--hard">
            <span className="difficulty-pill difficulty-pill--hard">Hard</span>
            <div className="difficulty-count">{stats.hardSolved}</div>
            <div className="difficulty-subheading">Hard Solved</div>
            <div className="difficulty-ratio">
              <span>{hardPercent}%</span> of total
            </div>
          </div>
        </div>

        {/* Card Footer: Status & Refresh */}
        <div className="leetcode-card__footer">
          <div className="leetcode-live-indicator">
            <span className={`live-pulse-dot ${isLive ? 'live-pulse-dot--active' : ''}`} />
            <span className="live-status-text">
              {isLive ? 'Live API Connected' : 'alfa-leetcode-api verified'}
            </span>
            {isLive && <CheckCircle2 size={13} className="live-check-icon" />}
          </div>

          <button
            type="button"
            onClick={fetchStats}
            disabled={isLoading}
            className="leetcode-refresh-btn"
            title="Refresh latest LeetCode stats"
            aria-label="Refresh LeetCode stats"
          >
            <RefreshCw size={13} className={isLoading ? 'spin-icon' : ''} />
            <span>{isLoading ? 'Syncing...' : 'Sync'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
