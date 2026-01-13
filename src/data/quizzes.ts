export interface QuizData {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  successMessage?: string;
}

export const quizzes: Record<string, QuizData> = {
  "html-css-js-1": {
    id: "html-css-js-1",
    question: "Какая технология отвечает за наполнение веб-страницы контентом?",
    options: ["HTML", "CSS", "JavaScript"],
    correctAnswer: 0,
    successMessage: "Отличное начало! Идем дальше!",
  },
  "html-file-example": {
    id: "html-file-example",
    question:
      "Какой файл в папке проекта является примером HTML-документа? (1 правильный ответ)",
    options: ["styles.css", "petro.png", "index.html", "prettier.json"],
    correctAnswer: 2,
    successMessage: "Верно! index.html — это стандартная точка входа.",
  },
  "html-tags-1": {
    id: "html-tags-1",
    question: "Какой тег написан правильно?",
    options: [
      "{section}Секция{/section}",
      "<p>Абзац<p>",
      "<a>Ссылка</a>",
      "<button>Кнопка</section>",
    ],
    correctAnswer: 2,
    successMessage:
      "Правильно! Теги заключаются в угловые скобки, и закрывающий тег соответствует открывающему.",
  },
  "html-h1-limit": {
    id: "html-h1-limit",
    question:
      "Сколько раз рекомендовано использовать тег <h1> на одной странице?",
    options: ["1 раз", "2 раза", "лимита нет"],
    correctAnswer: 0,
    successMessage:
      "Верно! Тег <h1> должен использоваться только один раз как главный заголовок страницы.",
  },
  "html-target-attr": {
    id: "html-target-attr",
    question:
      "Атрибут с каким значением нужно добавить, чтобы ссылка открывалась в новой вкладке?",
    options: ['alt="_blank"', 'target="_blank"', 'target="_self"'],
    correctAnswer: 1,
    successMessage: 'Верно! target="_blank" открывает ссылку в новой вкладке.',
  },
};
