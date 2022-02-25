type HexDigit =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'

type ThreeHexDigits = `${HexDigit}${HexDigit}${HexDigit}`

type HexRGB<T extends string> = T extends `#${ThreeHexDigits}${infer rest1}`
  ? rest1 extends ``
    ? T // Three Digits RGB
    : rest1 extends `${ThreeHexDigits}`
    ? T
    : never
  : never

type Alpha<T extends string> = T extends `${HexDigit}${HexDigit}` ? T : never

export function rgb<T extends string>(hex: HexRGB<T>): T {
  return hex
}

export function rgba<T extends string>(hex: HexRGB<T>, alpha: Alpha<T>): T {
  return `${hex}${alpha}`
}
