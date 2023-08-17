export function sum(...args: number[]) {
  return args.reduce((p, c) => p + c, 0);
}

export default {};
