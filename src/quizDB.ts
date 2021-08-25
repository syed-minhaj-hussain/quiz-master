import { Quiz } from "./utilities/quiz.types";

export const quiz: Quiz = {
  id: 11,
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

export const quizTwo: Quiz = {
  id: 12,
  name: "General Quiz",
  questions: [
    {
      id: 1,
      question: "How many time zones are there in Russia?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "5",
          isRight: false,
        },
        {
          text: "11",
          isRight: true,
        },
      ],
    },
    {
      id: 2,
      question: "What’s the national animal of Australia?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "Jaguar",
          isRight: false,
        },
        {
          text: "Kangaroo",
          isRight: true,
        },
      ],
    },
    {
      id: 3,
      question: "How many days does it take for the Earth to orbit the Sun?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "365",
          isRight: true,
        },
        {
          text: "363",
          isRight: false,
        },
      ],
    },
    {
      id: 4,
      question: "Until 1923, what was the Turkish city of Istanbul called?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "Constantinople",
          isRight: true,
        },
        {
          text: "Turkistan",
          isRight: false,
        },
      ],
    },
    {
      id: 5,
      question: "How many keys does a classic piano have?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "88",
          isRight: true,
        },
        {
          text: "76",
          isRight: false,
        },
      ],
    },
    {
      id: 6,
      question: "Where was the first modern Olympic Games held?",
      points: 12,
      negative: 2,
      options: [
        {
          text: "Athens",
          isRight: true,
        },
        {
          text: "Florida",
          isRight: false,
        },
      ],
    },
  ],
};
