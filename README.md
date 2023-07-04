<br />
<div align="center">
  <a href="https://github.com/joserogeriofilho/magick-squares">
    <img src="src/assets/frater-retalhos.svg" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">Magick Squares</h3>
  <p align="center">
    A sigil generator for astrologic magick squares.
    <a href="https://joserogeriofilho.github.io/magick-squares">Live</a> on GitHub Pages.
  </p>
</div>

## About The Project

[![Magick Squares Screen Shot](https://github.com/joserogeriofilho/magick-squares/assets/12038461/4c36b06b-4788-47ca-b5f2-ebe4e6025d19)](https://example.com)

This application draws sigils using astrologic magick squares and the numeric values of letters and words.

### Built With

- [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
- [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## Executing Locally

To run the project locally simply execute the following commands in the root directory:

```sh
npm install
npm run dev
```

## Usage

1. Type the word or sentence you would like to make into a sigil;
2. Choose the correct mode ("word" will get numeric values per each letter and "sentence" will get numeric values per each word);
3. Choose the astrologic planet into which the sigil will be drawn;
4. Hit "Generate".

## The algorithm

Each letter is asigned a numeric value. If this value exceeds the maximum allowed for said square than the counting goes back to the beginning.

For instance, in the magick square of Jupiter, starting from the letter `q` the counting will go back to 1 since Jupiter's square only accept values up to `16`.

```
a=1, b=2, c=3, ..., n=14, o=15, p=16, q=1, r=2, s=3...
```

Numeric value for words are also calculated in this manner, similar to the Pythagorean method but using the square base instead of the decimal one.

For example, when calculating the numeric value for the word `bravery` in the Jupiter magick square, its original value is `27` and then is reduced to `11`:

```
"bravery" > 2 + 2 + 1 + 6 + 5 + 2 + 9 = 27
27 % 16 = 11
"bravery" = 11
```

## Roadmap

- [x] Plots sigils on a web user interface
- [ ] Allows to download SVG of sigils

## License

Distributed under the MIT License.

## Contact

José Rogério - roger.sama@gmail.com

Project Link: [https://github.com/joserogeriofilho/magick-squares](https://github.com/joserogeriofilho/magick-squares)

[product-screenshot]: https://github.com/joserogeriofilho/magick-squares/assets/12038461/4c36b06b-4788-47ca-b5f2-ebe4e6025d19
