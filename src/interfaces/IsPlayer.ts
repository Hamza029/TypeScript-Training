interface IsPlayer {
  name: string;
  country: string;

  getAge(): number;
  play(): void;
}

export { IsPlayer };
