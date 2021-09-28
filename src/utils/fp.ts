
type TypeComposeFunction = (v: any) => any;
export const compose = (...fn: TypeComposeFunction[]) => {
  return (trigger: any) => {
    return fn.reduceRight((temp, fn) => fn(temp), trigger);
  }
}
