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
  "css-syntax-1": {
    id: "css-syntax-1",
    question: `
      <div class="image-container">
        <img src="/images/module-2/css-rule-syntax.png" alt="Схема CSS правил" class="img-responsive" />
      </div>
      <p>Какие элементы содержатся в блоке CSS-кода? (1 правильный ответ)</p>
    `,
    options: [
      "1) Элемент; 2) Тег; 3) Контент; 4) Значения.",
      "1) Селектор; 2) Объявление; 3) Свойство; 4) Значение.",
      "1) Правило; 2) Значения; 3) Атрибут; 4) Свойство.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Селектор выбирает элемент, объявление содержит свойство и его значение.",
  },
  "css-inline-styles": {
    id: "css-inline-styles",
    question: "Как добавить встроенные стили в тег?",
    options: [
      "Добавить в тег атрибут color со значением (название цвета).",
      "Добавить в тег атрибут style со значением color: (название цвета).",
      "Создать отдельный CSS файл.",
    ],
    correctAnswer: 1,
    successMessage: "Именно так!",
  },
  "css-embedded-styles": {
    id: "css-embedded-styles",
    question:
      "В чем разница между использованием встроенных стилей и встроенной таблицы стилей?",
    options: [
      "Оба подхода требуют добавления атрибута style. Но для встроенных стилей он действует на ограниченный фрагмент кода, а для встроенных таблиц стилей действует для всего HTML-документа.",
      "Оба подхода требуют добавления тега <style>. Но при использовании встроенной таблицы стилей легче делать изменения и масштабировать добавление свойств на новых страницах.",
      "Во встроенных стилях разработчик добавляет атрибут style в каждый тег, а при использовании встроенной таблицы стилей тег <style> добавляется в шапку HTML-документа.",
    ],
    correctAnswer: 2,
    successMessage: "Отлично, это правильный ответ!",
  },
  "css-external-styles": {
    id: "css-external-styles",
    question:
      "Что нужно сделать, чтобы добавить в проект внешнюю таблицу стилей?",
    options: [
      "Создать в проекте папку css и в ней файл styles.css. Стили добавятся автоматически.",
      "Создать в проекте папку css и в ней файл со стилями. Затем добавить стили в HTML-файл, используя тег <link>.",
      "Создать в проекте папку css. Добавить стили в HTML-файл, а потом создать файл со стилями.",
    ],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "selectors-quiz-1": {
    id: "selectors-quiz-1",
    question: `
      <h3>Изучи пример кода</h3>
      <div class="code-editor-container">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <div style="display: flex; gap: 1rem;">
          <div style="flex: 1;">
            <p style="color: #666; font-size: 0.8rem; margin-bottom: 0.5rem;">&lt;!-- HTML --&gt;</p>
            <pre><code class="language-html">&lt;h1&gt;Dental clinic website&lt;/h1&gt;

&lt;h2 class="title"&gt;About&lt;/h2&gt;
&lt;p&gt;Содержимое секции About&lt;/p&gt;

&lt;h2 class="title"&gt;Features&lt;/h2&gt;
&lt;p&gt;Содержимое секции Features&lt;/p&gt;

&lt;h2 class="title"&gt;Team&lt;/h2&gt;
&lt;p&gt;Содержимое секции Team&lt;/p&gt;</code></pre>
          </div>
          <div style="flex: 1;">
            <p style="color: #666; font-size: 0.8rem; margin-bottom: 0.5rem;">/* CSS */</p>
             <pre><code class="language-css">.title {
  font-weight: 500;
  color: orange;
}</code></pre>
          </div>
        </div>
      </div>
      <p class="mt-sm">Какой тип селектора применен во фрагменте кода выше? (1 правильный ответ)</p>
    `,
    options: [
      "Селектор по типу элемента",
      "Селектор идентификатора",
      "Селектор класса",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! Точка перед именем (.title) и атрибут class указывают на селектор класса.",
  },
  "selectors-quiz-2": {
    id: "selectors-quiz-2",
    question: `
      <h3>Изучи фрагмент кода</h3>
      <div class="code-editor-container">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <pre><code class="language-css">#footer li a {
  font-weight: bold;
}</code></pre>
      </div>
      <p class="mt-sm">К каким элементам будет применен стиль во фрагменте кода выше? (1 правильный ответ)</p>
    `,
    options: [
      "Ко всем ссылкам в элементах списков, находящихся в элементе с id footer",
      "Ко всем элементам списка, имеющим ссылки с классом footer",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Селектор выбирает все <a>, которые находятся внутри <li>, которые находятся внутри элемента с id #footer.",
  },
  "js-output-quiz": {
    id: "js-output-quiz",
    question:
      "Какой метод используют для вывода информации из кода в консоль инструментов разработчика?",
    options: ["print()", "output()", "console.log()"],
    correctAnswer: 2,
    successMessage: "Правильно! console.log() выводит сообщения в консоль.",
  },
  "js-variables-quiz": {
    id: "js-variables-quiz",
    question:
      "Какие ошибки допущены в этом фрагменте кода во время объявления переменной: username = 'Jacob Mercer'; ?",
    options: [
      "Недопустимое имя переменной",
      "Недопустимое значение переменной",
      "Не хватает ключевого слова const (или let)",
    ],
    correctAnswer: 2,
    successMessage:
      "Именно! Переменная всегда объявляется с использованием ключевого слова.",
  },
  "js-const-let-quiz": {
    id: "js-const-let-quiz",
    question:
      "С помощью какого ключевого слова объявляется переменная, которой нельзя задать новое значение после её объявления?",
    options: ["const", "let"],
    correctAnswer: 0,
    successMessage:
      "Правильно! const создает константу, которую нельзя изменить.",
  },
  "js-null-undefined-quiz": {
    id: "js-null-undefined-quiz",
    question:
      "Что будет выведено в консоль: let username; console.log(username); ?",
    options: ["ReferenceError", "null", "undefined"],
    correctAnswer: 2,
    successMessage:
      "Правильно! Переменная объявлена, но не инициализирована, поэтому её значение undefined.",
  },
  "js-typeof-quiz": {
    id: "js-typeof-quiz",
    question: 'Каким будет результат выражения typeof "true"?',
    options: ['"string"', '"boolean"', '"true"'],
    correctAnswer: 0,
    successMessage:
      "Правильно! Это строка, так как значение заключено в кавычки.",
  },
  "js-strict-equality-quiz": {
    id: "js-strict-equality-quiz",
    question: 'Каким будет результат выражения: console.log(1 === "1"); ?',
    options: ["true", "false"],
    correctAnswer: 1,
    successMessage:
      "Именно так! В коде использован оператор строгого равенства. Сравнивая число 1 и строку '1', этот оператор возвращает false, так как типы данных различаются.",
  },
  "js-loose-equality-quiz": {
    id: "js-loose-equality-quiz",
    question: "Каким будет результат выражения: console.log(0 == false); ?",
    options: ["true", "false"],
    correctAnswer: 0,
    successMessage:
      "Верно! Используется оператор нестрогого равенства. При сравнении числа 0 и булевого значения false, последнее приводится к числу 0. Поэтому 0 равно 0, и результат true.",
  },
  "js-string-conversion-quiz": {
    id: "js-string-conversion-quiz",
    question:
      'Что будет выведено в консоль при выполнении кода: console.log("false" + null); ?',
    options: ["null", "Ошибка", 'Строка "falsenull"', 'Строка "false"'],
    correctAnswer: 2,
    successMessage:
      'Правильно! Оператор + при наличии строки выполняет конкатенацию. null преобразуется в строку "null" и объединяется с "false".',
  },
  "js-string-index-quiz": {
    id: "js-string-index-quiz",
    question: "Какой индекс первого элемента строки?",
    options: ["-1", "0", "1"],
    correctAnswer: 1,
    successMessage:
      "Правильно! Индексация строк в JavaScript начинается с нуля.",
  },
  "js-string-immutability-quiz": {
    id: "js-string-immutability-quiz",
    question: "Каким будет финальное значение переменной username?",
    options: ['"Poly"', '"Pola"', "Будет ошибка"],
    correctAnswer: 0,
    successMessage:
      "Правильно! Строки в JavaScript неизменяемы. Попытка изменить отдельный символ не изменит саму строку.",
  },
  "js-logical-boolean-quiz": {
    id: "js-logical-boolean-quiz",
    question: 'Каким будет результат выражения Boolean("false")?',
    options: ["true", "false"],
    correctAnswer: 0,
    successMessage: "Правильно! Любая не пустая строка преобразуется в true.",
  },
  "js-logical-and-null-quiz": {
    id: "js-logical-and-null-quiz",
    question: "Каким будет результат выражения?",
    options: ["true", "false", "null"],
    correctAnswer: 2,
    successMessage:
      "Правильно! null является ложным значением, поэтому оператор && возвращает его, не вычисляя правый операнд.",
  },
  "js-logical-and-string-number-quiz": {
    id: "js-logical-and-string-number-quiz",
    question: "Каким будет результат выражения?",
    options: ["0", "false", '"false"'],
    correctAnswer: 0,
    successMessage:
      'Отлично! Строка "false" является истинной (true), поэтому оператор переходит к следующему операнду 0, который является ложным, и возвращает его.',
  },
  "js-logical-and-strings-quiz": {
    id: "js-logical-and-strings-quiz",
    question: "Каким будет результат выражения?",
    options: ['"Mango"', '"Poly"', "true"],
    correctAnswer: 1,
    successMessage:
      "Абсолютно верно! Оба операнда являются истинными. В этом случае возвращается значение последнего операнда.",
  },
  "js-logical-or-null-quiz": {
    id: "js-logical-or-null-quiz",
    question: "Каким будет результат выражения?",
    options: ["null", "true", "false"],
    correctAnswer: 1,
    successMessage:
      "Правильно! Оператор || находит первое истинное значение и возвращает его.",
  },
  "js-logical-or-string-number-quiz": {
    id: "js-logical-or-string-number-quiz",
    question: "Каким будет результат выражения?",
    options: ["0", "false", '"false"'],
    correctAnswer: 2,
    successMessage:
      'Верно! Строка "false" является истинной (true), поэтому оператор || возвращает её сразу же.',
  },
  "js-logical-or-strings-quiz": {
    id: "js-logical-or-strings-quiz",
    question: "Каким будет результат выражения?",
    options: ['"Mango"', '"Poly"', "true"],
    correctAnswer: 0,
    successMessage:
      'Правильно! К первому операнду "Mango" применимо преобразование в true, поэтому он и возвращается.',
  },
  "js-functions-implicit-return": {
    id: "js-functions-implicit-return",
    question: "Какое значение вернет вызов функции makeMessage в коде выше?",
    options: ["undefined", '"Hello Jacob"', "null", '"Hello username"'],
    correctAnswer: 0,
    successMessage:
      "Правильно! Если функция не имеет оператора return, она возвращает undefined.",
  },
  "js-functions-execution-order": {
    id: "js-functions-execution-order",
    question: "Каким будет порядок логов в инструментах разработчика?",
    options: ["A > B > C > D", "A > C > B > D", "A > C > D > B"],
    correctAnswer: 1,
    successMessage:
      "Правильно! Сначала выполняется код до вызова функции, затем код внутри функции, и после — код после вызова функции.",
  },
  "js-logical-not-zero-quiz": {
    id: "js-logical-not-zero-quiz",
    question: "Каким будет результат выражения?",
    options: ["true", "false", "1"],
    correctAnswer: 0,
    successMessage:
      'Правильно! В примере выше !0 — 0 преобразуется в false, а оператор "НЕ" инвертирует его в true.',
  },
  "js-logical-not-string-quiz": {
    id: "js-logical-not-string-quiz",
    question: "Каким будет результат выражения?",
    options: ["true", "false", "0"],
    correctAnswer: 1,
    successMessage:
      'Правильно! Любая не пустая строка преобразуется в true. Оператор "НЕ" меняет true на false.',
  },
  "css-hover-quiz": {
    id: "css-hover-quiz",
    question: "Для чего используется псевдокласс :hover?",
    options: [
      "Для изменения стиля элемента при наведении курсора.",
      "Для выделения активной ссылки.",
      "Для изменения стиля первой буквы текста.",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Псевдокласс :hover применяется, когда пользователь наводит курсор на элемент.",
  },
  "css-active-quiz": {
    id: "css-active-quiz",
    question:
      "В чем разница между состояниями :hover и :active при их применении к элементу кнопки?",
    options: [
      "Состояние :hover инициирует изменения в цвете текста кнопки, а состояние :active инициирует изменения в цвете фона кнопки.",
      "Состояние :hover инициирует изменения в виде кнопки при наведении, а состояние :active инициирует изменения в виде кнопки при нажатии.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! :hover срабатывает при наведении курсора, а :active — в момент нажатия (активации).",
  },
  "css-focus-quiz": {
    id: "css-focus-quiz",
    question: "Какое действие активирует эффект :focus? (1 правильный ответ)",
    options: [
      "Наведение мыши на элемент",
      "Выбор элемента при навигации с помощью Tab",
      "Клик на элемент",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! :focus часто используется для доступности, позволяя видеть активный элемент при навигации с клавиатуры.",
  },
  "css-equal-specificity-quiz-1": {
    id: "css-equal-specificity-quiz-1",
    question: `
      <h3>Прочитай фрагмент кода</h3>
      <div class="code-editor-container">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <pre><code class="language-css">#personal-info .link {
  color: blue;
}

body .my-portfolio {
  color: red;
}

ul .my-portfolio {
  color: green;
}

ul > li .social-nets {
  color: gray;
}</code></pre>
      </div>
      <p class="mt-sm">Какой элемент имеет свойства с равной специфичностью, которые конфликтуют? (1 правильный ответ)</p>
    `,
    options: [
      "Элемент с классом link",
      "Элемент с класом my-portfolio",
      "Элемент с классом social-nets",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Правила для `.my-portfolio` (body .my-portfolio и ul .my-portfolio) имеют одинаковую специфичность.",
  },
  "css-equal-specificity-quiz-2": {
    id: "css-equal-specificity-quiz-2",
    question: `
      <h3>Изучи фрагмент кода</h3>
      <div class="code-editor-container">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <pre><code class="language-css">#personal-info .link {
  color: blue;
}

body .my-portfolio {
  color: red;
}

ul .my-portfolio {
  color: green;
}

ul > li .social-nets {
  color: gray;
}</code></pre>
      </div>
      <p class="mt-sm">Какой цвет будет у элемента с классом my-portfolio в браузере? (1 правильный ответ)</p>
    `,
    options: ["red", "green"],
    correctAnswer: 1,
    successMessage:
      "Верно! При равной специфичности побеждает последнее правило в коде (green).",
  },
  "css-important-quiz": {
    id: "css-important-quiz",
    question: `
      <h3>Изучи примеры 1-3</h3>
      <div class="code-editor-container">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <pre><code class="language-css">/* Пример 1 */
p {
  color: !important orange;
}

/* Пример 2 */
p {
  !important color: orange;
}

/* Пример 3 */
p {
  color: orange !important;
}</code></pre>
      </div>
      <p class="mt-sm">В каком из примеров ключевое слово !important использовано синтаксически верно? (1 правильный ответ)</p>
    `,
    options: ["Пример 1", "Пример 2", "Пример 3"],
    correctAnswer: 2,
    successMessage:
      "Верно! Ключевое слово `!important` ставится в конце объявления, перед точкой с запятой.",
  },
  "css-current-color-quiz": {
    id: "css-current-color-quiz",
    question:
      "Какие свойства элемента можно задавать с помощью currentColor? (1 правильный ответ)",
    options: [
      "Только цвет текста ссылки",
      "Цвет и отступы ссылок",
      "Различные свойства, связанные с цветом",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! `currentColor` можно использовать для любых свойств, принимающих цвет (border-color, background-color, box-shadow и т.д.).",
  },
  "css-text-align-quiz": {
    id: "css-text-align-quiz",
    question: "В чем основной недостаток использования text-align: justify?",
    options: [
      "Текст прижимается только к левому краю.",
      "Ухудшается читабельность из-за неравномерных пробелов.",
      "Текст становится жирным.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Неравномерные пробелы между словами затрудняют чтение, поэтому justify стоит использовать с осторожностью.",
  },
  "css-text-decoration-quiz": {
    id: "css-text-decoration-quiz",
    question:
      "Какое значение свойства text-decoration по умолчанию установлено у ссылок (тег <a>)?",
    options: ["none", "underline", "line-through"],
    correctAnswer: 1,
    successMessage: "Правильно! Ссылки по умолчанию подчеркнуты (underline).",
  },
  "css-text-transform-quiz": {
    id: "css-text-transform-quiz",
    question:
      "Какое свойство и значение нужно использовать, чтобы сделать все буквы заглавными (верхний регистр)?",
    options: [
      "text-style: uppercase",
      "font-weight: bold",
      "text-transform: uppercase",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! text-transform: uppercase переводит все символы в верхний регистр.",
  },
  "css-global-styles-quiz": {
    id: "css-global-styles-quiz",
    question: "Для чего нужны глобальные стили?",
    options: [
      "Чтобы настроить свойства, которые будут использоваться для большинства элементов.",
      "Чтобы быстро найти все свойства, используемые в HTML-документе.",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Глобальные стили позволяют задать общие правила (шрифт, цвет) для всего документа сразу.",
  },
  "css-heading-color-quiz-1": {
    id: "css-heading-color-quiz-1",
    question: `
      <p>Изучи фрагмент кода</p>
      <div class="code-editor-container">
        <div class="code-editor-header">
           <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <pre><code class="language-css">body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
  color: darkgray;
  background-color: white;
}

h1, h2, h3 {
  font-family: 'Tahoma';
  color: red;
}</code></pre>
      </div>
      <p class="mt-sm">Определи, какого цвета будет текст заголовка второго уровня?</p>
    `,
    options: ["darkgray", "red"],
    correctAnswer: 1,
    successMessage:
      "Верно! Для заголовков h1-h3 явно задан красный цвет, который переопределяет наследуемый darkgray.",
  },
  "css-heading-color-quiz-2": {
    id: "css-heading-color-quiz-2",
    question: `
      <p>Изучи фрагмент кода.</p>
      <div class="code-editor-container">
        <div class="code-editor-header">
           <div class="code-editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
        </div>
        <pre><code class="language-css">body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
  color: darkgray;
  background-color: white;
}

h1, h2, h3 {
  font-family: 'Tahoma';
  color: red;
}</code></pre>
      </div>
      <p class="mt-sm">Определи, какого цвета будет текст заголовка четвертого уровня?</p>
    `,
    options: ["darkgray", "red"],
    correctAnswer: 0,
    successMessage:
      "Верно! h4 не входит в групповой селектор h1-h3, поэтому он наследует цвет darkgray от body.",
  },
  "css-normalization-quiz": {
    id: "css-normalization-quiz",
    question: "Что является целью улучшения кроссбраузерности веб-страницы?",
    options: [
      "Нормализация стилей для лучшего отображения страницы в поисковых системах.",
      "Одинаковое отображение стилей разными браузерами.",
    ],
    correctAnswer: 1,
    successMessage:
      "Именно так! Мы хотим, чтобы сайт выглядел одинаково везде.",
  },
  "css-variables-quiz": {
    id: "css-variables-quiz",
    question: "Как правильно объявить глобальную CSS-переменную?",
    options: [
      "var --main-color: black; внутри селектора body",
      "--main-color: black; внутри селектора :root",
      "$main-color: black; внутри селектора :root",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Глобальные переменные объявляются в псевдоклассе :root с префиксом --.",
  },
  "js-array-literal-syntax": {
    id: "js-array-literal-syntax",
    question: "Выберите правильный синтаксис литерала массива",
    options: ["<>", "[]", "{}", "()"],
    correctAnswer: 1,
    successMessage:
      "Абсолютно точно! В синтаксисе литерала массива используются квадратные скобки.",
  },
  "js-array-first-element-index": {
    id: "js-array-first-element-index",
    question: "Какой индекс у первого элемента массива?",
    options: ["-1", "0", "1"],
    correctAnswer: 1,
    successMessage:
      "Верно! Индексация массивов в JavaScript начинается с нуля.",
  },
  "js-arrays-iteration-break": {
    id: "js-arrays-iteration-break",
    question: "Что делает оператор break в цикле?",
    options: [
      "Прерывает текущую итерацию",
      "Прерывает выполнение всего цикла",
      "Ничего не делает",
    ],
    correctAnswer: 1,
    successMessage: "Верно! break полностью останавливает выполнение цикла.",
  },
  "js-arrays-loop-condition": {
    id: "js-arrays-loop-condition",
    question:
      "Что в примере выше используется в условии для остановки цикла во время итераций по массиву?",
    options: ["Значение длины массива", "Значение элементов массива"],
    correctAnswer: 0,
    successMessage:
      "Именно так! Условием выхода из цикла во время итерации по массиву является значение длины массива. В примере выше код тела цикла будет выполняться, пока i < planets.length.",
  },
  "js-arrays-includes": {
    id: "js-arrays-includes",
    question: "Что возвращает метод includes?",
    options: [
      "Индекс элемента или -1",
      "Значение элемента или undefined",
      "Булево true или false",
    ],
    correctAnswer: 2,
    successMessage:
      "Правильно! Метод includes возвращает true, если элемент найден, и false, если нет.",
  },
  "js-arrays-for-of-counter": {
    id: "js-arrays-for-of-counter",
    question: "Можно ли получить доступ к счетчику в цикле for...of?",
    options: ["Да", "Нет"],
    correctAnswer: 1,
    successMessage:
      "Верно! Цикл for...of предназначен для перебора значений, а не индексов.",
  },
  "js-functions-call": {
    id: "js-functions-call",
    question:
      "Выбери правильный синтаксис вызова уже объявленной функции function greetClient() {}",
    options: [
      "function greetClient[]",
      "greetClient()",
      "greetClient",
      "greetClient[]",
    ],
    correctAnswer: 1,
    successMessage: "Верно! Функция вызывается по имени с круглыми скобками.",
  },
  "js-functions-params": {
    id: "js-functions-params",
    question:
      "Как называются значения 5 и 8, передаваемые функции во время её вызова?",
    options: ["Параметры", "Аргументы"],
    correctAnswer: 1,
    successMessage:
      "Правильно! Значения, которые передаются во время вызова функции, называются аргументами.",
  },
  "js-functions-arguments": {
    id: "js-functions-arguments",
    question:
      "Нужно ли объявлять переменную arguments в функции для доступа к ней?",
    options: [
      "Нет, она есть в каждой функции по умолчанию",
      "Да, её изначально нет в функции",
    ],
    correctAnswer: 0,
    successMessage:
      "Правильно! arguments автоматически создается внутри каждой функции.",
  },
  "js-functions-expression": {
    id: "js-functions-expression",
    question:
      "Функцию, созданную каким синтаксисом, можно вызывать до места её объявления?",
    options: ["Функциональный выраз", "Объявление функции"],
    correctAnswer: 1,
    successMessage:
      "Правильно! Объявление функции (function declaration) можно вызывать до места её создания в коде.",
  },
  "js-object-literal-quiz": {
    id: "js-object-literal-quiz",
    question: "Выбери синтаксис литерала объекта",
    options: ["[]", "{}", "()"],
    correctAnswer: 1,
    successMessage:
      "Да, ты все знаешь! Для объявления объекта используются фигурные скобки {}. Круглые скобки — для вызова функции, а квадратные — для массива.",
  },
  "js-object-property-separator-quiz": {
    id: "js-object-property-separator-quiz",
    question: "Выбери символ, которым разделяются имя и значение свойства",
    options: ["=", ";", ":", ","],
    correctAnswer: 2,
    successMessage:
      "Увы, нет. Имя и значение свойства разделяются : (двоеточием). Разные свойства разделяются , (запятой). После блока кода ставится ; (точка с запятой). А = используется для присваивания значения.",
  },
  "js-object-property-type-quiz": {
    id: "js-object-property-type-quiz",
    question:
      "Выбери типы данных, которые могут быть значениями свойства объекта",
    options: ["Массив", "Объект", "Строка", "Все варианты выше"],
    correctAnswer: 3,
    successMessage:
      "Не только он! Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции и т.д.",
  },
  "js-object-dot-notation-quiz": {
    id: "js-object-dot-notation-quiz",
    question: "Выбери синтаксис доступа к свойству firstName объекта user",
    options: [
      "user-firstName",
      "user.firstName",
      "user[firstName]",
      "user*firstName*",
    ],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-object-bracket-notation-quiz": {
    id: "js-object-bracket-notation-quiz",
    question:
      "Выбери правильный синтаксис обращения к свойству firstName объекта user",
    options: ["user[firstName]", 'user"firstName"', 'user["firstName"]'],
    correctAnswer: 2,
    successMessage: "Правильно!",
  },
  "js-for-in-quiz": {
    id: "js-for-in-quiz",
    question: "С помощью каких циклов можно перебрать объект?",
    options: ["for", "for...of", "while", "for...in"],
    correctAnswer: 3,
    successMessage: "Правильно!",
  },
  "js-object-keys-quiz": {
    id: "js-object-keys-quiz",
    question: "Что возвращает метод Object.keys()?",
    options: ["Массив имен свойств объекта", "Массив значений свойств объекта"],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-object-values-quiz": {
    id: "js-object-values-quiz",
    question: "Что возвращает метод Object.values()?",
    options: ["Массив имен свойств объекта", "Массив значений свойств объекта"],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-object-this-quiz": {
    id: "js-object-this-quiz",
    question:
      "Какое ключевое слово внутри метода объекта содержит ссылку на объект, который его вызвал?",
    options: ["obj", "that", "this", "here"],
    correctAnswer: 2,
    successMessage: "Правильно!",
  },
  "js-rest-parameters-quiz": {
    id: "js-rest-parameters-quiz",
    question:
      'Что будет выведено в консоль при вызове функции?\n\nfunction foo(...args) {\n  console.log(args);\n}\nfoo("a", "b");',
    options: ["'a', 'b'", "['a', 'b']", "Ошибка"],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-spread-object-quiz": {
    id: "js-spread-object-quiz",
    question:
      "Каким будет значение переменной result?\n\nconst objA = {\n  x: 1,\n  y: 2,\n};\n\nconst objB = {\n  y: 3,\n};\n\nconst result = {\n  x: 5,\n  ...objA,\n  y: 10,\n  ...objB,\n  z: 15\n}",
    options: [
      "{ x: 1, y: 3, z: 15 }",
      "{ x: 5, y: 10, z: 15 }",
      "{ x: 1, y: 2, z: 10 }",
    ],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-callback-syntax-quiz": {
    id: "js-callback-syntax-quiz",
    question:
      "Выбери правильный синтаксис передачи колбек-функции `updateEmail` для функции `makeAction`",
    options: [
      "makeAction(updateEmail())",
      "updateEmail(makeAction)",
      "makeAction(updateEmail)",
      "updateEmail(makeAction())",
    ],
    correctAnswer: 2,
    successMessage: "Правильно!",
  },
  "js-foreach-return-quiz": {
    id: "js-foreach-return-quiz",
    question: "Что возвращает метод forEach?",
    options: [
      "Новый массив",
      "Возвращает undefined",
      "То, что указано в колбек-функции",
    ],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-arrow-arguments-quiz": {
    id: "js-arrow-arguments-quiz",
    question:
      "Можно ли использовать переменную arguments в стрелочной функции?",
    options: ["Да", "Нет"],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-arrow-callbacks-quiz": {
    id: "js-arrow-callbacks-quiz",
    question: "Почему стрелочные функции удобны для использования как колбеки?",
    options: [
      "Благодаря их более короткому синтаксису",
      "Потому что они работают быстрее, чем обычные",
    ],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-iterating-methods-params-quiz": {
    id: "js-iterating-methods-params-quiz",
    question:
      "Каким по порядку параметром будет в колбек-функции счетчик (индекс) текущей итерации?",
    options: ["Первым", "Вторым", "Третьим"],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-map-return-quiz": {
    id: "js-map-return-quiz",
    question: "Что возвращает метод map(callback)?",
    options: ["Массив", "Объект", "Произвольное значение"],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-filter-return-quiz": {
    id: "js-filter-return-quiz",
    question: "Что возвращает метод filter()?",
    options: ["Объект", "Массив", "Произвольное значение"],
    correctAnswer: 1,
    successMessage: "Точно так! Метод filter() возвращает новый массив.",
  },
  "js-filter-length-quiz": {
    id: "js-filter-length-quiz",
    question: "Массив какой длины возвращает метод filter()?",
    options: [
      "Всегда такой же, как и массив, к которому он был применен",
      "Произвольной, зависит от условия колбек-функции",
      "На единицу меньше длины массива, к которому он был применен",
    ],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-find-return-quiz": {
    id: "js-find-return-quiz",
    question: "Что возвращает метод find()?",
    options: ["Массив", "Объект", "Элемент, который ищем"],
    correctAnswer: 2,
    successMessage: "Правильно!",
  },
  "js-find-undefined-quiz": {
    id: "js-find-undefined-quiz",
    question:
      "Что вернет метод find(), если ни один элемент не удовлетворил критерий поиска?",
    options: ["undefined", "null", "[]", "false"],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-sort-comparator-quiz": {
    id: "js-sort-comparator-quiz",
    question: "Какой из колбеков используется для сортировки чисел?",
    options: ["(a, b) => a.localeCompare(b)", "(a, b) => a - b"],
    correctAnswer: 1,
    successMessage:
      "Правильно! Для числовой сортировки используется (a, b) => a - b. Метод localeCompare() используется для сортировки строк.",
  },
  "js-this-context-quiz": {
    id: "js-this-context-quiz",
    question: "Каким будет значение this во время вызова метода user.showName()?",
    options: [
      "Ссылка на массив, который мы передаем ей аргументом",
      "Ссылка на объект, который мы передаем ей аргументом",
      "Ссылка на объект, в контексте которого она была вызвана",
    ],
    correctAnswer: 2,
    successMessage: "Правильно!",
  },
  "js-this-determination-quiz": {
    id: "js-this-determination-quiz",
    question: "Чем определяется this в НЕ стрелочных функциях?",
    options: [
      "Тем, как функцию вызвали",
      "Тем, где функцию объявили",
      "Тем, когда функцию вызвали",
    ],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-call-method-quiz": {
    id: "js-call-method-quiz",
    question: "Что делает метод call()?",
    options: [
      "Вызывает функцию, передавая ей аргументы через массив",
      "Вызывает функцию в определённом контексте и передаёт список аргументов",
      "Удаляет все объекты в массиве",
      "Определяет количество элементов в массиве",
    ],
    correctAnswer: 1,
    successMessage: "Правильно!",
  },
  "js-object-create-prototype-quiz": {
    id: "js-object-create-prototype-quiz",
    question: "Что делает метод Object.create(obj)?",
    options: [
      "Клонирует объект obj",
      "Создает новый объект с копией всех свойств obj",
      "Создает новый объект и устанавливает ему прототип obj",
      "Создает пустой объект без прототипа",
    ],
    correctAnswer: 2,
    successMessage:
      "Правильно! Object.create(obj) создает новый объект и связывает его с obj через прототип.",
  },
  "js-prototype-link-quiz": {
    id: "js-prototype-link-quiz",
    question: "Как называется служебное свойство, которое хранит ссылку на прототип?",
    options: ["Prototype", "[Prototype]", "[[Prototype]]", "proto"],
    correctAnswer: 2,
    successMessage:
      "Правильно! Именно [[Prototype]] используется движком для связи объекта с его прототипом.",
  },
  "js-is-prototype-of-quiz": {
    id: "js-is-prototype-of-quiz",
    question: "Что возвращает выражение x.isPrototypeOf(y)?",
    options: [
      "true, если x является прототипом для y, и false в противном случае",
      "true, если y является прототипом для x, и false в противном случае",
      "true, если x и y — ссылки на один и тот же объект",
    ],
    correctAnswer: 0,
    successMessage: "Правильно!",
  },
  "js-inherited-property-quiz": {
    id: "js-inherited-property-quiz",
    question: "Что такое унаследованное свойство объекта obj?",
    options: [
      "Свойство любого другого объекта, кроме obj",
      "Свойство из прототипа объекта obj",
      "Любое свойство объекта obj",
    ],
    correctAnswer: 1,
    successMessage:
      "Правильно! Унаследованное свойство находится не в самом объекте, а в его прототипе.",
  },
  "js-private-property-symbol-quiz": {
    id: "js-private-property-symbol-quiz",
    question: "С какого символа должно начинаться имя приватного свойства?",
    options: ["*", "#", "_", "$"],
    correctAnswer: 1,
    successMessage:
      "Верно! Имя приватного свойства начинается с символа #.",
  },
  "js-static-property-instance-access-quiz": {
    id: "js-static-property-instance-access-quiz",
    question: "Что будет выведено в консоль при обращении к instance.b?",
    options: ["5", "10", "ошибка", "undefined"],
    correctAnswer: 3,
    successMessage:
      "Верно! Статическое свойство доступно классу, но не его экземпляру.",
  },
  "js-child-constructor-super-quiz": {
    id: "js-child-constructor-super-quiz",
    question:
      "Что будет, если не вызвать super в конструкторе дочернего класса?",
    options: [
      "Будет ошибка при попытке доступа к this в его конструкторе",
      "Будет ошибка при попытке доступа к this в его методах",
      "Будет ошибка при наследовании класса",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! В конструкторе дочернего класса сначала нужно вызвать super, а уже потом использовать this.",
  },
  "js-dom-root-element-quiz": {
    id: "js-dom-root-element-quiz",
    question: "Какой элемент является корневым в DOM-дереве?",
    options: ["window", "document", "html", "body"],
    correctAnswer: 1,
    successMessage:
      "Верно! В DOM-дереве document является корневым элементом.",
  },
  "js-text-content-value-quiz": {
    id: "js-text-content-value-quiz",
    question: "Что хранит свойство textContent?",
    options: [
      "URL-адрес текущей страницы",
      "HTML-код содержимого элемента",
      "Текстовое содержимое элемента без HTML-тегов",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! textContent хранит текстовое содержимое элемента без HTML-тегов.",
  },
  "js-class-list-add-quiz": {
    id: "js-class-list-add-quiz",
    question: "Как можно добавить новый класс к списку классов элемента element?",
    options: [
      'element.addClass("new-class");',
      'element.classList.add("new-class");',
      'element.updateClass("new-class");',
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Метод classList.add(className) добавляет класс к списку классов элемента.",
  },
  "js-class-list-remove-quiz": {
    id: "js-class-list-remove-quiz",
    question: "Как можно удалить класс из списка классов элемента element?",
    options: [
      'element.removeClass("some-class");',
      'element.classList.remove("some-class");',
      'element.classList.delete("some-class");',
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Метод classList.remove(className) удаляет класс из списка классов элемента.",
  },
  "js-dom-has-attribute-quiz": {
    id: "js-dom-has-attribute-quiz",
    question: "Какой метод проверяет наличие определенного атрибута у элемента?",
    options: ["hasAttribute", "getAttribute", "setAttribute", "removeAttribute"],
    correctAnswer: 0,
    successMessage:
      "Верно! Метод hasAttribute(nameAttribute) проверяет, есть ли атрибут на элементе.",
  },
  "js-dom-dataset-access-quiz": {
    id: "js-dom-dataset-access-quiz",
    question:
      "Как получить доступ к значению data-атрибута data-type элемента element?",
    options: [
      "element.dataset.type",
      'element.data["type"]',
      'element["type"]',
      "element.dataset.dataType",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Для data-атрибутов используется dataset, а имя атрибута пишется без data-.",
  },
  "js-dom-create-element-tag-quiz": {
    id: "js-dom-create-element-tag-quiz",
    question:
      "При создании нового <div>-элемента с помощью document.createElement(), какое имя элемента нужно передать аргументом?",
    options: ['"paragraph"', '"div"', '"p"', '"text"'],
    correctAnswer: 1,
    successMessage:
      'Верно! Для создания <div>-элемента нужно передать строку "div".',
  },
  "js-dom-append-position-quiz": {
    id: "js-dom-append-position-quiz",
    question:
      "Куда будет добавлен элемент newElem при выполнении elem.append(newElem)?",
    options: [
      "Перед элементом elem",
      "После элемента elem",
      "В начало elem перед всеми его детьми",
      "В конец elem после всех его детей",
    ],
    correctAnswer: 3,
    successMessage:
      "Верно! append() добавляет элемент в конец выбранного элемента, после всех его детей.",
  },
  "js-dom-remove-element-quiz": {
    id: "js-dom-remove-element-quiz",
    question: "Какой код удалит элемент element из DOM-дерева?",
    options: [
      "element.delete()",
      "element.remove()",
      "document.remove(element)",
      "document.delete(element)",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Метод element.remove() удаляет элемент из DOM-дерева.",
  },
  "js-dom-inner-html-purpose-quiz": {
    id: "js-dom-inner-html-purpose-quiz",
    question: "Что делает свойство innerHTML в JavaScript?",
    options: [
      "Устанавливает или получает атрибуты элемента.",
      "Устанавливает или получает HTML-содержимое элемента.",
      "Изменяет CSS-стили элемента.",
      "Запрещает взаимодействие с HTML-элементами.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Свойство innerHTML устанавливает или получает HTML-содержимое элемента.",
  },
  "js-dom-inner-html-type-quiz": {
    id: "js-dom-inner-html-type-quiz",
    question: "Какой тип данных возвращает свойство innerHTML?",
    options: [
      "Число (number)",
      "Строку (string)",
      "Массив (array)",
      "Объект (object)",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Свойство innerHTML возвращает строку (string).",
  },
  "js-dom-add-event-listener-quiz": {
    id: "js-dom-add-event-listener-quiz",
    question:
      'Как назначить функцию myFunction обработчиком события "click" для элемента myElement?',
    options: [
      'addEventListener(myElement, "click", myFunction)',
      'myElement.addEventListener("click", myFunction)',
      'click.addEventListener(myElement, myFunction)',
    ],
    correctAnswer: 1,
    successMessage:
      'Верно! Метод addEventListener() вызывается на элементе, первым аргументом принимает имя события, вторым — обработчик.',
  },
  "js-dom-remove-event-listener-quiz": {
    id: "js-dom-remove-event-listener-quiz",
    question:
      'Как удалить обработчик события myFunction с элемента myElement для события "click"?',
    options: [
      'removeEventListener(myElement, "click", myFunction)',
      'myElement.removeEventListener("click", myFunction)',
      "click.removeEventListener(myElement, myFunction)",
    ],
    correctAnswer: 1,
    successMessage:
      'Верно! Метод removeEventListener() вызывается на элементе с тем же событием и той же функцией-обработчиком.',
  },
  "js-dom-event-object-quiz": {
    id: "js-dom-event-object-quiz",
    question: "Что представляет собой объект события?",
    options: [
      "Он содержит данные об объекте, к которому привязано событие.",
      "Он содержит информацию о самом событии, например тип события и элемент, который его вызвал.",
      "Он содержит все объекты на веб-странице.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Объект события содержит информацию о событии и автоматически передается в обработчик.",
  },
  "js-dom-keydown-practice-quiz": {
    id: "js-dom-keydown-practice-quiz",
    question:
      "Почему на практике при работе с событиями клавиатуры чаще слушают событие keydown?",
    options: [
      "Потому что это главное событие клавиатуры.",
      "Оно срабатывает чаще, поэтому ввод можно обработать точнее.",
      "Оно срабатывает раньше, и можно быстрее обработать ввод пользователя.",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! keydown срабатывает при нажатии клавиши, поэтому результат можно обработать раньше.",
  },
  "js-dom-submit-prevent-default-quiz": {
    id: "js-dom-submit-prevent-default-quiz",
    question:
      "Как можно отменить действие браузера по умолчанию при обработке события submit?",
    options: [
      "Установить свойство event.preventSubmit в true.",
      "Вызвать метод event.preventDefault() в обработчике события.",
      "Невозможно отменить действие браузера по умолчанию.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Метод event.preventDefault() отменяет действие браузера по умолчанию.",
  },
  "js-dom-change-text-input-quiz": {
    id: "js-dom-change-text-input-quiz",
    question: "Когда происходит событие change для текстового поля?",
    options: [
      "Во время ввода каждого нового символа.",
      "Когда элемент теряет фокус после изменения значения.",
      "Когда элемент получает фокус.",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Для текстовых полей и textarea событие change происходит после изменения значения и потери фокуса.",
  },
  "js-dom-input-frequency-quiz": {
    id: "js-dom-input-frequency-quiz",
    question:
      "Если пользователь вводит текст в текстовое поле, какое событие будет срабатывать чаще всего?",
    options: ["click", "input", "change", "submit"],
    correctAnswer: 1,
    successMessage:
      "Верно! input происходит при каждом изменении значения текстового поля.",
  },
  "js-dom-blur-event-quiz": {
    id: "js-dom-blur-event-quiz",
    question: "Когда происходит событие blur?",
    options: [
      "Когда элемент получает фокус.",
      "Во время ввода в текстовое поле.",
      "Когда элемент теряет фокус.",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! blur происходит, когда элемент теряет фокус.",
  },
  "js-event-propagation-order-quiz": {
    id: "js-event-propagation-order-quiz",
    question: "В каком порядке событие проходит фазы во время распространения?",
    options: [
      "Таргетинг > Захват > Всплытие",
      "Захват > Таргетинг > Всплытие",
      "Распространение > Таргетинг > Захват",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Сначала происходит захват, затем таргетинг и после этого всплытие.",
  },
  "js-event-bubbling-start-quiz": {
    id: "js-event-bubbling-start-quiz",
    question: "От какого элемента начинается всплытие события?",
    options: [
      "От самого верхнего элемента в иерархии",
      "От элемента, на котором произошло событие",
      "От ближайшего предка элемента, на котором произошло событие",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Всплытие начинается от элемента, на котором произошло событие, и поднимается вверх по иерархии.",
  },
  "js-event-target-element-quiz": {
    id: "js-event-target-element-quiz",
    question: "Что такое целевой элемент?",
    options: [
      "Элемент, на котором сработал обработчик события",
      "Элемент, на котором произошло событие",
      "Элемент, до которого всплыло событие",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Целевой элемент — это элемент, на котором произошло событие.",
  },
  "js-event-target-check-quiz": {
    id: "js-event-target-check-quiz",
    question: "Зачем проверять целевой элемент события при делегировании?",
    options: [
      "Чтобы исключить обработку событий для неподходящих типов элементов",
      "Такую проверку не нужно делать",
      "Чтобы остановить всплытие события",
    ],
    correctAnswer: 0,
    successMessage:
      "Верно! Целевой элемент проверяют, чтобы обработчик не срабатывал для неподходящих элементов.",
  },
  "js-library-definition-quiz": {
    id: "js-library-definition-quiz",
    question: "Что такое библиотека?",
    options: [
      "Код, который нужно написать самостоятельно для каждого проекта",
      "Набор заранее написанного кода, готового к использованию в проекте",
      "Любой файл скрипта проекта",
    ],
    correctAnswer: 1,
    successMessage:
      "Верно! Библиотека — это набор готового кода, который можно использовать в проекте.",
  },
  "js-destructuring-object-syntax-quiz": {
    id: "js-destructuring-object-syntax-quiz",
    question:
      "Выбери правильный синтаксис деструктуризации объекта у переменной profile.",
    options: [
      "const profile = {}",
      "const profile = ()",
      "const {} = profile",
      "const () = profile",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! Правильный синтаксис деструктуризации объекта: const {} = profile.",
  },
  "js-destructuring-missing-property-quiz": {
    id: "js-destructuring-missing-property-quiz",
    question:
      "Какое значение получит переменная, если при деструктуризации в объекте нет свойства с таким именем?",
    options: ["Будет ошибка", "null", "undefined", "false"],
    correctAnswer: 2,
    successMessage:
      "Верно! Если свойства нет в объекте, переменная получит undefined.",
  },
  "js-destructuring-rename-quiz": {
    id: "js-destructuring-rename-quiz",
    question:
      "Выбери правильный синтаксис переименования переменной при деструктуризации свойства username из объекта profile.",
    options: [
      "const { coolName: username } = profile",
      "const { username = coolName } = profile",
      "const { username: coolName } = profile",
      "const { username - coolName } = profile",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! Сначала пишем имя свойства, затем через двоеточие новое имя переменной.",
  },
  "js-array-destructuring-syntax-quiz": {
    id: "js-array-destructuring-syntax-quiz",
    question:
      "Выбери правильный синтаксис деструктуризации массива у переменной fruits.",
    options: [
      "const {} = fruits",
      "const fruits = []",
      "const [] = fruits",
      "const fruits []",
    ],
    correctAnswer: 2,
    successMessage:
      "Верно! Для деструктуризации массива используются квадратные скобки: const [] = fruits.",
  },
  "js-array-destructuring-default-quiz": {
    id: "js-array-destructuring-default-quiz",
    question:
      'Выбери правильный синтаксис для присвоения строки "A fruit" как значения по умолчанию при деструктуризации массива fruits.',
    options: [
      'const ["A fruit" = firstFruit] = fruits',
      'const [firstFruit = "A fruit"] = fruits',
      'const [firstFruit: "A fruit"] = fruits',
      'const [firstFruit, "A fruit"] = fruits',
    ],
    correctAnswer: 1,
    successMessage:
      'Верно! Значение по умолчанию записывается после имени переменной: const [firstFruit = "A fruit"] = fruits.',
  },
};
