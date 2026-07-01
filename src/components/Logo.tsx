import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightText?: boolean;
  iconOnly?: boolean;
}

export default function Logo({
  className = 'h-10',
  showText = true,
  lightText = false,
  iconOnly = false,
}: LogoProps) {
  // Brand colors from the logo:
  // Teal: #008fae
  // Navy: #0a3054
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Building Symbol */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Face - Teal Grid Building (#008fae) */}
        {/* We build the isometric left face grid */}
        <g transform="translate(18, 25)">
          {/* Column 1 (Leftmost) - 3 Cells */}
          {/* Cell 1,1 */}
          <path d="M0 32 L8 27 L8 35 L0 40 Z" fill="#008fae" />
          {/* Cell 1,2 */}
          <path d="M0 22 L8 17 L8 25 L0 30 Z" fill="#008fae" />
          {/* Cell 1,3 */}
          <path d="M0 12 L8 7 L8 15 L0 20 Z" fill="#008fae" />

          {/* Column 2 (Middle) - 3 Cells */}
          {/* Cell 2,1 */}
          <path d="M10 27 L18 22 L18 30 L10 35 Z" fill="#008fae" />
          {/* Cell 2,2 */}
          <path d="M10 17 L18 12 L18 20 L10 25 Z" fill="#00c0db" /> {/* Slightly lighter for 3D highlight */}
          {/* Cell 2,3 */}
          <path d="M10 7 L18 2 L18 10 L10 15 Z" fill="#008fae" />

          {/* Column 3 (Right) - 3 Cells */}
          {/* Cell 3,1 */}
          <path d="M20 22 L28 17 L28 25 L20 30 Z" fill="#008fae" />
          {/* Cell 3,2 */}
          <path d="M20 12 L28 7 L28 15 L20 20 Z" fill="#008fae" />
          {/* Cell 3,3 */}
          <path d="M20 2 L28 -3 L28 5 L20 10 Z" fill="#008fae" />
        </g>

        {/* Right Face - Navy Grid Building (#0a3054) */}
        {/* We build the isometric right face grid, offset and taller */}
        <g transform="translate(48, 17)">
          {/* Column 1 (Left of right side) - 4 Cells */}
          {/* Cell 1,1 */}
          <path d="M0 -1 L8 3 L8 11 L0 7 Z" fill="#0a3054" />
          {/* Cell 1,2 */}
          <path d="M0 9 L8 13 L8 21 L0 17 Z" fill="#0a3054" />
          {/* Cell 1,3 */}
          <path d="M0 19 L8 23 L8 31 L0 27 Z" fill="#0a3054" />
          {/* Cell 1,4 */}
          <path d="M0 29 L8 33 L8 41 L0 37 Z" fill="#0a3054" />

          {/* Column 2 (Rightmost) - 4 Cells */}
          {/* Cell 2,1 */}
          <path d="M10 -6 L18 -2 L18 6 L10 2 Z" fill="#051c32" /> {/* Slightly darker shadow */}
          {/* Cell 2,2 */}
          <path d="M10 4 L18 8 L18 16 L10 12 Z" fill="#0a3054" />
          {/* Cell 2,3 */}
          <path d="M10 14 L18 18 L18 26 L10 22 Z" fill="#0a3054" />
          {/* Cell 2,4 */}
          <path d="M10 24 L18 28 L18 36 L10 32 Z" fill="#0a3054" />
        </g>
        
        {/* Top Accent Curve lines like the ones in top right of the logo image */}
        <path d="M 50,2 A 40,40 0 0,1 98,16 L 98,2 A 40,40 0 0,0 50,0 Z" fill="#008fae" opacity="0.9" />
        <path d="M 62,-2 A 38,38 0 0,1 98,10 L 98,-4 A 38,38 0 0,0 62,-6 Z" fill="#0a3054" opacity="0.9" />
      </svg>

      {/* Brand Text */}
      {showText && !iconOnly && (
        <div className="flex flex-col select-none">
          <span
            className={`font-display text-lg font-bold tracking-wider leading-none ${
              lightText ? 'text-white' : 'text-brand-blue'
            }`}
          >
            FORT
          </span>
          <span
            className={`font-sans text-[10px] font-medium tracking-[0.22em] leading-none mt-1 ${
              lightText ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            CONSTRUTORA
          </span>
        </div>
      )}
    </div>
  );
}
