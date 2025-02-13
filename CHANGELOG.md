## [1.0.0] 2023-01-23

### Changed

- `deleteCurrent` is renamed to `deleteLeft`.

### Added

- `deleteRight`.

## [0.2.3] 2023-01-21

- npm & jsDelivr: update readme.
- Deno: add [x.ts](https://github.com/MathKeyboardEngine/MathKeyboardEngine/blob/main/src/x.ts) for accessing everything from a single module.

## [0.2.2] 2022-11-22

- Fix only relevant if `LatexConfiguration`'s `activePlaceholderColor` and `passivePlaceholderColor` is used: use `{\color{my-color}x}` instead of `\color{my-color}{x}`.

## [0.2.1] 2022-06-29

- Add `.mjs`, `.d.ts` and `.cts` files to the package for Node.js.
- Push a tag for publication to [Deno](https://deno.land) via a webhook.

## [0.2.0] 2022-03-27

### Fixed

- `deleteCurrent` at `\frac{ab}{▦}\sqrt{⬚}` (where `▦` is current) gave a non-sensical result.

### Changed

- `deleteCurrent` at `\frac{12}{⬚}▦` no longer results in `\frac{1▦}{⬚}` but now in `12▦`. Analogous for `12_{⬚}▦` and `\begin{pmatrix}12 \\ ⬚ \\ ⬚\end{pmatrix}▦`, etc.
