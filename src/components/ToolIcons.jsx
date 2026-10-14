export function ToolIcon({ name, size = 56, className = '' }) {
  const normalized = (name || '').toLowerCase();

  const props = {
    width: size,
    height: size,
    viewBox: '0 0 64 64',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
  };

  if (normalized.includes('react')) {
    return (
      <svg {...props}>
        <ellipse cx="32" cy="32" rx="26" ry="10" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(60 32 32)" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(120 32 32)" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="4.5" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('python')) {
    return (
      <svg {...props}>
        <path
          d="M31.2 8C20.5 8 21.2 12.6 21.2 12.6L21.3 17.4H31.5V18.9H17.2C10.5 18.9 6 23.4 6 32.5C6 41.6 9.8 42.6 9.8 42.6L14 42.6L14 36.8C14 30.1 19.6 29.5 19.6 29.5H29.8C38.2 29.5 38.6 23.4 38.6 23.4L38.6 14.5C38.6 8 31.2 8 31.2 8ZM25.4 12.6C26.9 12.6 28.1 13.8 28.1 15.3C28.1 16.8 26.9 18 25.4 18C23.9 18 22.7 16.8 22.7 15.3C22.7 13.8 23.9 12.6 25.4 12.6Z"
          fill="currentColor"
        />
        <path
          d="M32.8 56C43.5 56 42.8 51.4 42.8 51.4L42.7 46.6H32.5V45.1H46.8C53.5 45.1 58 40.6 58 31.5C58 22.4 54.2 21.4 54.2 21.4L50 21.4L50 27.2C50 33.9 44.4 34.5 44.4 34.5H34.2C25.8 34.5 25.4 40.6 25.4 40.6L25.4 49.5C25.4 56 32.8 56 32.8 56ZM38.6 51.4C37.1 51.4 35.9 50.2 35.9 48.7C35.9 47.2 37.1 46 38.6 46C40.1 46 41.3 47.2 41.3 48.7C41.3 50.2 40.1 51.4 38.6 51.4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (normalized.includes('mongo')) {
    return (
      <svg {...props}>
        <path
          d="M32 6C31 6 22 17 22 33C22 45 28 53 32 58C36 53 42 45 42 33C42 17 33 6 32 6ZM32 53C30 49 26 43 26 33C26 21 31 12 32 9C33 12 38 21 38 33C38 43 34 49 32 53Z"
          fill="currentColor"
        />
        <path
          d="M32 9C32 9 32 53 32 57C32 57 32 54 32 9Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (normalized.includes('sql') || normalized.includes('mysql')) {
    return (
      <svg {...props}>
        <path
          d="M16 12C16 8.7 18.7 6 22 6H40L50 16V52C50 55.3 47.3 58 44 58H22C18.7 58 16 55.3 16 52V12Z"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
        />
        <path d="M40 6V16H50" stroke="currentColor" strokeWidth="3.5" fill="none" />
        <text
          x="33"
          y="42"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.04em"
        >
          SQL
        </text>
      </svg>
    );
  }

  if (normalized.includes('postgre')) {
    return (
      <svg {...props}>
        <path
          d="M32 10C22 10 16 16 16 26C16 34 20 40 24 46C26 49 28 54 28 56H36C36 54 38 49 40 46C44 40 48 34 48 26C48 16 42 10 32 10Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="26" cy="24" r="2.5" fill="currentColor" />
        <circle cx="38" cy="24" r="2.5" fill="currentColor" />
        <path d="M32 28V46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 36C26 40 38 40 42 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes('fastapi')) {
    return (
      <svg {...props}>
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" />
        <path
          d="M34 16L22 34H32L28 48L42 30H32L34 16Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (normalized.includes('flask')) {
    return (
      <svg {...props}>
        <path
          d="M28 8H36V18L46 44C48 49 44 54 38 54H26C20 54 16 49 18 44L28 18V8Z"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path d="M26 8H38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 38C26 36 38 36 42 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="28" cy="44" r="2" fill="currentColor" />
        <circle cx="36" cy="45" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('flutter')) {
    return (
      <svg {...props}>
        <path d="M38 8L16 30L23 37L52 8H38Z" fill="currentColor" />
        <path d="M38 30L26 42L33 49L52 30H38Z" fill="currentColor" />
        <path d="M26 42L38 54H52L40 42L26 42Z" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('javascript') || normalized.includes('js')) {
    return (
      <svg {...props}>
        <rect x="10" y="10" width="44" height="44" rx="8" fill="currentColor" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="20"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
        >
          JS
        </text>
      </svg>
    );
  }

  if (normalized.includes('aws')) {
    return (
      <svg {...props}>
        <path
          d="M14 26L20 40H24L30 26H26L22 36L18 26H14Z"
          fill="currentColor"
        />
        <path
          d="M32 26L35 40H39L42 31L45 40H49L52 26H48L46 35L43 26H41L38 35L36 26H32Z"
          fill="currentColor"
        />
        <path
          d="M12 46C24 53 40 53 52 46"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M47 43L53 46L49 51" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalized.includes('git')) {
    return (
      <svg {...props}>
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" />
        <path
          d="M32 16C23.2 16 16 23.2 16 32C16 39.1 20.6 45 27 47.1C27.8 47.2 28.1 46.8 28.1 46.4V43.8C23.7 44.8 22.7 41.7 22.7 41.7C22 39.9 21 39.4 21 39.4C19.5 38.4 21.1 38.4 21.1 38.4C22.7 38.5 23.6 40.1 23.6 40.1C25 42.5 27.2 41.8 28.1 41.4C28.2 40.4 28.7 39.6 29.1 39.2C25.6 38.8 21.9 37.4 21.9 31.3C21.9 29.5 22.5 28.1 23.6 27C23.4 26.6 22.8 24.9 23.8 22.7C23.8 22.7 25.2 22.3 28.1 24.3C29.4 23.9 30.7 23.8 32.1 23.8C33.5 23.8 34.8 23.9 36.1 24.3C39 22.3 40.4 22.7 40.4 22.7C41.4 24.9 40.8 26.6 40.6 27C41.6 28.1 42.2 29.5 42.2 31.3C42.2 37.4 38.5 38.8 34.9 39.2C35.5 39.7 36 40.7 36 42.2V46.4C36 46.8 36.3 47.2 37.1 47.1C43.4 45 48 39.1 48 32C48 23.2 40.8 16 32 16Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Default / AI & OpenCV vision icon
  return (
    <svg {...props}>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="5" fill="currentColor" />
      <path d="M32 8V16M32 48V56M8 32H16M48 32H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
