import { useState } from 'react';
import fraterRetalhos from './assets/frater-retalhos.svg';
import './App.css';
import MagickSquare from './MagickSquare';
import { getPlanetValue } from './features/utils';
import { getWordsValues, getLettersValues } from './features/magick-squares';
import type { Planet } from './features/magick-squares';

function App() {
  const [sentence, setSentence] = useState<string | null>(null);
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [mode, setMode] = useState<string | null>(null);
  const magickNumbers =
    sentence && planet
      ? mode && mode === 'sentence'
        ? getWordsValues(
            sentence,
            getPlanetValue(planet) * getPlanetValue(planet)
          )
        : getLettersValues(
            sentence,
            getPlanetValue(planet) * getPlanetValue(planet)
          )
      : null;

  const sentence1 = '"Good fortune for family"';
  const sentence2 = '"Fun lovely date with attractive sane person"';
  const magickNumbers1 = getWordsValues(sentence1, 16);
  const magickNumbers2 = getWordsValues(sentence2, 49);

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value);
  };

  const handleGenerate = () => {
    const sentenceInput = document.getElementById(
      'sentence'
    ) as HTMLInputElement;
    const planetSelect = document.getElementById('planet') as HTMLInputElement;

    if (sentenceInput && planetSelect) {
      const inputSentence = sentenceInput.value;
      const selectedPlanet = planetSelect.value as Planet;

      setSentence(inputSentence);
      setPlanet(selectedPlanet);
    }
  };

  return (
    <>
      <br />
      <img src={fraterRetalhos} className="logo" alt="Vite logo" />
      <h1>Magick Squares</h1>
      <p className="subtitle">By Frater Retalhos</p>
      <p>
        Draw a sigil based on a word or sentence using the astrological magick
        squares. Source code and references can be found{' '}
        <a href="https://github.com/joserogeriofilho/magick-squares">here</a>.
      </p>
      <br />
      <p>{sentence1}</p>
      <p>
        [
        {magickNumbers1 &&
          magickNumbers1.map((num, index) => <span key={index}>{num},</span>)}
        ]
      </p>
      <MagickSquare planet={'jupiter'} numbers={magickNumbers1} darkTheme />
      <br />
      <p>{sentence2}</p>
      <p>
        [
        {magickNumbers2 &&
          magickNumbers2.map((num, index) => <span key={index}>{num},</span>)}
        ]
      </p>
      <MagickSquare planet={'venus'} numbers={magickNumbers2} darkTheme />
      <br />
      <p>Try it yourself:</p>
      <form>
        <label htmlFor="sentence">Sentence or word:</label> <br />
        <input type="text" id="sentence"></input> <br />
        <p>Make a sigil from a word or from a sentence?</p>
        <input
          type="radio"
          name="mode"
          id="word"
          value="word"
          onChange={onValueChange}
        ></input>
        <label htmlFor="word">Word</label>
        <br />
        <input
          type="radio"
          name="mode"
          id="sentence"
          value="sentence"
          onChange={onValueChange}
        ></input>
        <label htmlFor="sentence">Sentence</label>
        <br />
        <p>
          Select one planet:{' '}
          <select id="planet">
            <option value="saturn">Saturn</option>
            <option value="jupiter">Jupiter</option>
            <option value="mars">Mars</option>
            <option value="sun">Sun</option>
            <option value="venus">Venus</option>
            <option value="mercury">Mercury</option>
            <option value="moon">Moon</option>
          </select>
        </p>
        <br />
        <button type="button" onClick={handleGenerate}>
          Generate
        </button>
      </form>
      <br />
      {sentence && planet && magickNumbers && (
        <>
          <p>
            [
            {magickNumbers.map((num, index) => (
              <span key={index}>{num},</span>
            ))}
            ]
          </p>
          <MagickSquare planet={planet} numbers={magickNumbers} darkTheme />
        </>
      )}
    </>
  );
}

export default App;
