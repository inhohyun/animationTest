// src/pages/main/index.js
import React from 'react';
import { motion } from 'framer-motion';
import "./styles.css"; // 스타일 파일이 있는 경우

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function Card({ emoji, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320]
];

export default function Main() {
  return (
    <div className="main-container">
      {food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}
