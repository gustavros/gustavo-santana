'use client';

import { motion } from 'framer-motion';

export function BackgroundVectors() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-card">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="0.5"
              opacity="0.1"
            />
          </pattern>
        </defs>

        {/* Grid pattern */}
        <rect width="1200" height="800" fill="url(#grid)" />

        {/* Geometric shapes */}
        {/* Large circle */}
        <motion.circle
          cx="200"
          cy="150"
          r="120"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.08"
          animate={{
            cx: [200, 205, 200],
            cy: [150, 155, 150],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="200"
          cy="150"
          r="80"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          opacity="0.06"
          animate={{
            cx: [200, 195, 200],
            cy: [150, 145, 150],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Top right shapes */}
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '1000px 150px' }}
        >
          <polygon
            points="950,100 1050,100 1000,200"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            opacity="0.08"
          />
        </motion.g>
        <motion.g
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '1050px 200px' }}
        >
          <polygon
            points="1000,150 1100,150 1050,250"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            opacity="0.06"
          />
        </motion.g>

        {/* Bottom left shapes */}
        <motion.g
          animate={{
            rotate: [45, 405],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '125px 675px' }}
        >
          <rect
            x="50"
            y="600"
            width="150"
            height="150"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.08"
          />
        </motion.g>
        <motion.g
          animate={{
            rotate: [45, -315],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '150px 700px' }}
        >
          <rect
            x="100"
            y="650"
            width="100"
            height="100"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            opacity="0.06"
          />
        </motion.g>

        {/* Bottom right curve */}
        <motion.path
          d="M 900 600 Q 1100 650 1000 750 T 900 800"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          opacity="0.08"
          animate={{
            d: [
              'M 900 600 Q 1100 650 1000 750 T 900 800',
              'M 900 605 Q 1100 655 1000 755 T 900 805',
              'M 900 600 Q 1100 650 1000 750 T 900 800',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Center decorative elements */}
        <motion.circle
          cx="600"
          cy="400"
          r="3"
          fill="hsl(var(--primary))"
          opacity="0.2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="650"
          cy="420"
          r="2"
          fill="hsl(var(--accent))"
          opacity="0.2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.circle
          cx="550"
          cy="380"
          r="2.5"
          fill="hsl(var(--primary))"
          opacity="0.2"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.2, 0.32, 0.2],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Flowing lines */}
        <motion.path
          d="M 0 300 Q 300 250 600 300 T 1200 300"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.06"
          animate={{
            d: [
              'M 0 300 Q 300 250 600 300 T 1200 300',
              'M 0 295 Q 300 245 600 295 T 1200 295',
              'M 0 300 Q 300 250 600 300 T 1200 300',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M 0 500 Q 300 550 600 500 T 1200 500"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          opacity="0.06"
          animate={{
            d: [
              'M 0 500 Q 300 550 600 500 T 1200 500',
              'M 0 505 Q 300 555 600 505 T 1200 505',
              'M 0 500 Q 300 550 600 500 T 1200 500',
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </motion.svg>
    </div>
  );
}
