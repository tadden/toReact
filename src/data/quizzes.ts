export interface QuizData {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | number[];
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
  "html-ol-tag": {
    id: "html-ol-tag",
    question:
      "Выберите ситуацию, когда разработчику целесообразно использовать тег <ol>",
    options: [
      "Добавить название конференции на сайт, посвященный определенному событию.",
      "Добавить описание опыта каждого эксперта, который будет выступать на конференции.",
      "Добавить пошаговую инструкцию о том, как зарегистрироваться на конференцию.",
      "Добавить список всех компаний, принимавших участие в организации события.",
    ],
    correctAnswer: 2,
    successMessage:
      "Именно так! Пошаговая инструкция требует определенного порядка действий.",
  },
  "html-heading-hierarchy": {
    id: "html-heading-hierarchy",
    question: `
      <div style="width: 100%; max-width: 500px; margin: 0 auto 2rem; border-radius: 12px; overflow: hidden;">
        <img src="/images/quiz/hierarchy-error.png" alt="Heading Hierarchy Error" style="width: 100%; height: auto; display: block;" />
      </div>
      Где ошибка на изображении выше? (1 правильный ответ)
    `,
    options: [
      "Ошибка в первой строке. Заголовок <h1> использован только один раз.",
      "Ошибка во второй строке. Разделы одного уровня должны иметь одинаковые заголовки. Вместо <h3> должен быть <h2>.",
      "Ошибка в третьей строке. Заголовок <h3> не может использоваться повторно.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Заголовки одного уровня вложенности должны иметь одинаковый ранг (тег).",
  },
  "html-structure-quiz": {
    id: "html-structure-quiz",
    question: `
      <h3>Изучи схемы А и B. Одна из них визуализирует структуру макета для сети спортзалов.</h3>
      <p>Какая из схем (А или B) лучше визуализирует структуру контента на странице?</p>
      <div class="image-container">
        <img src="/images/module-2/structure-quiz.png" alt="Сравнение структур" class="img-responsive" />
      </div>
    `,
    options: ["Схема A", "Схема B"],
    correctAnswer: 0,
    successMessage:
      "Верно! Тег <main> обозначает основное содержание документа, которое не повторяется на других страницах. Секции <section> логично вкладывать внутрь <main>.",
  },
  "html-image-link-quiz": {
    id: "html-image-link-quiz",
    question: "Как сделать изображение-ссылку?",
    options: [
      "Добавить тег <img> вместо текстового контента тега <a>",
      "Вложить тег <a> в <img> вместо текстового описания изображения",
    ],
    correctAnswer: 0,
    successMessage:
      "Правильно! Тег <img> нужно поместить внутрь тега <a>, чтобы изображение стало кликабельным.",
  },
  "html-can-include-a-img": {
    id: "html-can-include-a-img",
    question: "можно ли вложить тег &lt;a&gt; в тег &lt;img&gt;?",
    options: ["Да, можно.", "Нет, нельзя.", "Есть нюансы"],
    correctAnswer: 1,
    successMessage: "И это абсолютно правильно!",
  },
  "html-can-include-a-li": {
    id: "html-can-include-a-li",
    question: "можно ли вложить тег &lt;a&gt; в тег &lt;li&gt;?",
    options: ["Да, можно.", "Нет, нельзя.", "Есть нюансы"],
    correctAnswer: 0,
    successMessage: "О, это ты умничка!",
  },
  "html-address-tag-quiz": {
    id: "html-address-tag-quiz",
    question: "Какую информацию может содержать тег &lt;address&gt;?",
    options: [
      "Только описание физического адреса — страну, город, улицу, дом.",
      "Физический адрес, электронную почту, телефон — любую актуальную контактную информацию.",
      "Контакты или другую информацию о странице — интеллектуальные права, даты обновления и т.д.",
    ],
    correctAnswer: 1,
    successMessage: "Ты на правильном пути.",
  },
  "html-logo-quiz": {
    id: "html-logo-quiz",
    question:
      "Взгляни на код логотипа. Какие ссылки нужно вставить вместо 'Адрес 1' и 'Адрес 2'?",
    options: [
      "Адрес 1 — главная страница бренда, Адрес 2 — путь к файлу изображения.",
      "Адрес 1 — текущая страница, Адрес 2 — сайт разработчика.",
      "Адрес 1 — страница 'О нас', Адрес 2 — ссылка на Google.",
    ],
    correctAnswer: 0,
    successMessage: "Верно! Это стандартный паттерн для логотипов.",
  },
  "html-nav-quiz": {
    id: "html-nav-quiz",
    question: "Как правильно разметить главное навигационное меню?",
    options: [
      "Просто оставить ссылки в <ul>.",
      "Обернуть список ссылок <ul> в тег <nav>.",
      "Использовать тег <navigation>.",
    ],
    correctAnswer: 1,
    successMessage:
      "Правильно! Тег <nav> сообщает браузеру, что здесь находится главная навигация.",
  },
  "html-title-quiz": {
    id: "html-title-quiz",
    question:
      "В чем разница между заголовком HTML-документа и заголовками сайта? (1 правильный ответ)",
    options: [
      "Все заголовки документа и сайта должны создавать иерархию. А заголовок в теге <title> — самый главный заголовок. Он должен быть таким же, как заголовок <h1>.",
      "Заголовок HTML документа (<title>) пользователь видит как название вкладки при открытии страницы. Заголовки сайта (<h1>-<h6>) — про содержание самого сайта, и они логически отражают структуру контента.",
    ],
    correctAnswer: 1,
    successMessage:
      "Именно так! Тег <title> — это метаданные для браузера/поисковика, а <h1>-<h6> — это контент страницы.",
  },
  "html-title-placement-quiz": {
    id: "html-title-placement-quiz",
    question: `
      <p class="mb-sm">Рассмотрите код ниже:</p>
      <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
   &lt;title&gt;Sweet cheese pancakes&lt;/title&gt;
&lt;/html&gt;</code></pre>
      <p class="mt-sm">Найдите ошибку в примере выше (1 правильный ответ):</p>
    `,
    options: [
      "Некорректное расположение тега <title>. Тег <title> должен быть вложен в тег <head>.",
      "Контент тега <title> не соответствует требованиям к содержанию и количеству символов.",
      "Никаких ошибок.",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Тег <title> всегда должен находиться внутри секции <head>.",
  },
  "html-body-quiz": {
    id: "html-body-quiz",
    question:
      "В какой тег следует вкладывать тег &lt;body&gt;? (1 правильный ответ)",
    options: [
      "В тег <html>",
      "В тег <head>",
      "Никуда нельзя вкладывать, это же все содержимое страницы.",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Тег <body> является непосредственным дочерним элементом <html>.",
  },
};
