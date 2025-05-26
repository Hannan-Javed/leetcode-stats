function createBadge(streak) {
  const color = streak > 0 ? '#4CAF50' : '#F44336';
  const width = 120 + (streak.toString().length * 10);
  
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <mask id="a">
        <rect width="${width}" height="20" rx="3" fill="#fff"/>
      </mask>
      <g mask="url(#a)">
        <rect width="80" height="20" fill="#555"/>
        <rect x="80" width="${width-80}" height="20" fill="${color}"/>
        <rect width="${width}" height="20" fill="url(#b)"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="40" y="15" fill="#010101" fill-opacity=".3">LeetCode</text>
        <text x="40" y="14">LeetCode</text>
        <text x="${80 + (width-80)/2}" y="15" fill="#010101" fill-opacity=".3">${streak} days</text>
        <text x="${80 + (width-80)/2}" y="14">${streak} days</text>
      </g>
    </svg>
  `;
}

module.exports = { createBadge };