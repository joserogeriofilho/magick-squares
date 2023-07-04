import React, { useEffect, useRef, useState } from 'react';
import {
  saturn,
  jupiter,
  mars,
  sun,
  venus,
  mercury,
  moon,
} from './features/magick-squares';
import type { Planet } from './features/magick-squares';

const CELL_SIZE = 36;
const MARKERS_SIZE = 8;

const getPosition = (index: number) => index * CELL_SIZE + CELL_SIZE / 2;

const tableStyle = {
  borderCollapse: 'collapse' as const,
  width: 'initial',
  opacity: 0.5,
};

const cellStyle = {
  textAlign: 'center' as const,
  width: CELL_SIZE,
  height: CELL_SIZE,
  border: '1px solid',
  boxSizing: 'border-box' as const,
};

const sigilStyle = (top: number, left: number, size: number) => ({
  position: 'absolute' as const,
  top,
  left,
  zIndex: 100,
  width: size * CELL_SIZE,
  height: size * CELL_SIZE,
});

const renderPerpendicularLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  // Calculate the direction vector of the last line
  const directionX = getPosition(y2) - getPosition(y1);
  const directionY = getPosition(x2) - getPosition(x1);

  // Calculate the perpendicular direction vector
  const perpendicularDirectionX = directionY;
  const perpendicularDirectionY = -directionX;

  // Normalize the perpendicular direction vector
  const length = Math.sqrt(
    perpendicularDirectionX * perpendicularDirectionX +
      perpendicularDirectionY * perpendicularDirectionY
  );
  const normalizedPerpendicularDirectionX =
    (perpendicularDirectionX / length) * MARKERS_SIZE;
  const normalizedPerpendicularDirectionY =
    (perpendicularDirectionY / length) * MARKERS_SIZE;

  // Calculate the start and end points of the perpendicular line
  const perpendicularStartX =
    getPosition(y2) + normalizedPerpendicularDirectionX;
  const perpendicularStartY =
    getPosition(x2) + normalizedPerpendicularDirectionY;
  const perpendicularEndX = getPosition(y2) - normalizedPerpendicularDirectionX;
  const perpendicularEndY = getPosition(x2) - normalizedPerpendicularDirectionY;

  return (
    <line
      key={`final-symbol`}
      x1={perpendicularStartX}
      y1={perpendicularStartY}
      x2={perpendicularEndX}
      y2={perpendicularEndY}
      stroke="red"
      strokeWidth="2"
    />
  );
};

type MagickSquareProps = {
  planet: Planet;
  numbers?: Array<number>;
  darkTheme?: boolean;
};

const MagickSquare: React.FC<MagickSquareProps> = ({
  planet,
  numbers,
  darkTheme,
}) => {
  let square: number[];
  let size: number;
  const tableRef = useRef<HTMLTableElement>(null);
  const [tablePosition, setTablePosition] = useState([0, 0]);

  switch (planet) {
    case 'saturn':
      square = saturn;
      size = 3;
      break;
    case 'jupiter':
      square = jupiter;
      size = 4;
      break;
    case 'mars':
      square = mars;
      size = 5;
      break;
    case 'sun':
      square = sun;
      size = 6;
      break;
    case 'venus':
      square = venus;
      size = 7;
      break;
    case 'mercury':
      square = mercury;
      size = 8;
      break;
    case 'moon':
      square = moon;
      size = 9;
      break;
    default:
      square = jupiter;
      size = 4;
  }

  const iterator = Array(size).fill(null);

  const handleWindowResize = () => {
    const tableElement = tableRef.current;
    if (tableElement) {
      const tableRect = tableElement.getBoundingClientRect();
      setTablePosition([
        tableRect.left + window.scrollX,
        tableRect.top + window.scrollY,
      ]);
    }
  };

  useEffect(() => {
    handleWindowResize();
  }, [planet, numbers]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table ref={tableRef} style={tableStyle}>
        <tbody>
          {iterator.map((_, row) => (
            <tr key={row}>
              {iterator.map((_, col) => (
                <td key={col} style={cellStyle}>
                  {square[row * size + col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {numbers && (
        <svg style={sigilStyle(tablePosition[1], tablePosition[0], size)}>
          {numbers.map((num, index) => {
            if (index === numbers.length - 1) return null;

            const index1 = square.indexOf(num);
            const row1 = Math.floor(index1 / size);
            const col1 = index1 % size;
            const index2 = square.indexOf(numbers[index + 1]);
            const row2 = Math.floor(index2 / size);
            const col2 = index2 % size;

            return (
              <g key={`line-${index + 1}`}>
                <line
                  x1={getPosition(col1)}
                  y1={getPosition(row1)}
                  x2={getPosition(col2)}
                  y2={getPosition(row2)}
                  stroke={darkTheme ? 'white' : 'black'}
                  strokeWidth="2"
                />
                {!index && (
                  <circle
                    key={'intial-symbol'}
                    cx={getPosition(col1)}
                    cy={getPosition(row1)}
                    r={MARKERS_SIZE / 2}
                    fill="red"
                  />
                )}
                {index === numbers.length - 2 &&
                  renderPerpendicularLine(row1, col1, row2, col2)}
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
};

export default MagickSquare;
