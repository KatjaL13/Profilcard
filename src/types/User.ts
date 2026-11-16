export const Gender = {
  Weiblich: "Weiblich",
  Männlich: "Männlich",
  Divers: "Divers",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export type User = {
  id: number;
  name: string;
  birth: string;
  gender: Gender;
  email: string;
  address: string;
  phone: string;
  website: string;
};
