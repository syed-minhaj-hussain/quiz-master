export type Quiz = {
  name: string;
  questions: Question[];
};

export type Question = {
  id: number;
  question: string;
  points: number;
  negative: number;
  options: Option[];
};

export type Option = {
  text: string;
  isRight: boolean;
};
