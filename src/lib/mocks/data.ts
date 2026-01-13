import { Course, Module, User } from "@/types";

export const MOCK_USERS: User[] = [
  {
    id: "user_student",
    email: "student@toreact.com",
    name: "Alex Cosmonaut",
    role: "student",
    avatar: "/avatars/student.png",
  },
  {
    id: "user_admin",
    email: "admin@toreact.com",
    name: "Commander Shepard",
    role: "admin",
    avatar: "/avatars/admin.png",
  },
];

const createModules = (courseSlug: string, count: number): Module[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${courseSlug}-mod-${i + 1}`,
    slug: `module-${i + 1}`,
    title: `${courseSlug.toUpperCase()} Модуль ${i + 1}`,
    description: `Изучите основы ${courseSlug} в модуле ${i + 1}.`,
    lessons: [
      {
        id: `lesson-${i}-1`,
        title: "Lesson 1",
        order: 0,
        topics: [
          {
            id: `topic-${i}-1`,
            title: "Введение и Концепции",
            content: `<h3>Ключевые Концепции</h3><p>Понимание основных принципов ${courseSlug} имеет важное значение.</p><ul><li>Концепция A</li><li>Концепция B</li></ul>`,
          },
          {
            id: `topic-${i}-2`,
            title: "Углубленное Изучение",
            content: `<h3>Глубокий Анализ</h3><p>Давайте подробнее рассмотрим, как работают переменные и область видимости в этом контексте.</p>`,
          },
          {
            id: `topic-${i}-3`,
            title: "Лучшие Практики",
            content: `<h3>Написание Чистого Кода</h3><p>Всегда следуйте установленным руководствам по стилю и правилам линтинга.</p>`,
          },
        ],
      },
    ],
    videoUrl: "dQw4w9WgXcQ", // Moved to Materials tab
    homework: {
      description:
        "Создайте репозиторий, содержащий базовый файл index.html и script.js. Реализуйте три функции, демонстрирующие изученные концепции.",
      repoUrl: "",
    },
    resources: [
      {
        title: "MDN Documentation",
        url: "https://developer.mozilla.org",
        type: "link",
      },
      { title: "Cheat Sheet", url: "#", type: "pdf" },
    ],
    order: i,
  }));
};

export const COURSES: Course[] = [
  {
    id: "course_html",
    slug: "html-css",
    title: "HTML & CSS",
    description: "Разработка структуры и стиля веб-страниц.",
    icon: "planet-red",
    modules: [
      {
        id: "html-1",
        slug: "intro-html",
        title: "Введение в HTML",
        description: "Теги, элементы и структура документа.",
        lessons: [
          {
            id: "lesson-html-1",
            title: "Lesson 1",
            order: 0,
            topics: [
              {
                id: "t-1",
                title: "История HTML",
                content:
                  "<p>HTML был изобретен Тимом Бернерсом-Ли в 1991 году.</p>",
              },
              {
                id: "t-2",
                title: "Структура Документа",
                content:
                  "<p>Каждый HTML документ начинается с объявления doctype.</p>",
              },
            ],
          },
        ],
        resources: [],
        order: 0,
      },
      ...createModules("html", 7),
    ],
  },
  {
    id: "course_js",
    slug: "javascript",
    title: "JavaScript с Нуля",
    description: "Сделай веб интерактивным и динамичным.",
    icon: "planet-blue",
    modules: createModules("js", 8),
  },
  {
    id: "course_react",
    slug: "react",
    title: "React Экосистема",
    description: "Современная UI разработка на компонентах.",
    icon: "planet-purple",
    modules: createModules("react", 8),
  },
];
