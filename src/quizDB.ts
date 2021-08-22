import { Quiz } from "./utilities/quiz.types";

export const quiz: Quiz = {
  name: "General Quiz",
  questions: [
    {
      id: 1,
      question: "What country has the most islands in the world?",
      points: 10,
      negative: 2,
      options: [
        {
          text: "Sweden",
          isRight: true,
        },
        {
          text: "Australia",
          isRight: false,
        },
      ],
    },
    {
      id: 2,
      question: "What’s the smallest country in the world?",
      points: 8,
      negative: 1,
      options: [
        {
          text: "Sweden",
          isRight: false,
        },
        {
          text: "The Vatican",
          isRight: true,
        },
      ],
    },
    {
      id: 3,
      question: "What’s the capital of Canada?",
      points: 12,
      negative: 3,
      options: [
        {
          text: "Toronto",
          isRight: false,
        },
        {
          text: "Ottawa",
          isRight: true,
        },
      ],
    },
    {
      id: 4,
      question: "Name the largest (not highest) mountain range in the world?",
      points: 8,
      negative: 1,
      options: [
        {
          text: "The Andes",
          isRight: true,
        },
        {
          text: "Mt-Everest",
          isRight: false,
        },
      ],
    },
    {
      id: 5,
      question: "Where is the lowest natural place on planet Earth? ",
      points: 15,
      negative: 4,
      options: [
        {
          text: "The Mariana Trench",
          isRight: true,
        },
        {
          text: "Mauritius",
          isRight: false,
        },
      ],
    },
    {
      id: 6,
      question: "Name the longest river in the world?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "The Niele",
          isRight: true,
        },
        {
          text: "Orange River",
          isRight: false,
        },
      ],
    },
  ],
};

// console.log(quiz.questions[2].negative);
