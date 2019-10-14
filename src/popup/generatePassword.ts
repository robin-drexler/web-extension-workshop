import generator from "generate-password";

export function generatePassword(length: number): string {
  return generator.generate({
    length,
    numbers: true
  });
}
