type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

export const alpha = (hexRGB: string, alpha: Range<16, 256>) =>
  hexRGB + alpha.toString(16)
