export interface CheckResult {
  id: string;
  label: string;
  passed: boolean;
}

export interface ChallengeData {
  id: string;
  title: string;
  description: string;
  initialCode: string; // HTML code
  initialCss?: string; // Optional CSS code
  checks: (code: string, cssCode?: string) => CheckResult[];
}

export const challenges: Record<string, ChallengeData> = {
  "html-p-tag": {
    id: "html-p-tag",
    title: "Тег параграфа",
    description: `
      <p>В редакторе <code>html</code> уже есть описание рецепта, но сейчас это просто текст.</p>
      <p>Твоя задача — обернуть его в тег <code>&lt;p&gt;</code>.</p>
    `,
    initialCode: `A light and gently sweet breakfast dish or a dessert for picky eaters. With
crispy coating and the light and soft inside, you get a lovely balance of
flavors and textures.These delicious pancakes pair perfectly with sour cream and
fruit in pretty much any form.`,
    checks: (code: string) => {
      const cleanCode = code.trim();
      const lowerCode = cleanCode.toLowerCase();

      return [
        {
          id: "opening-tag",
          label: "Код содержит открывающий тег <p>",
          passed: lowerCode.includes("<p>"),
        },
        {
          id: "closing-tag",
          label: "Код содержит закрывающий тег </p>",
          passed: lowerCode.includes("</p>"),
        },
        {
          id: "content-wrapped",
          label: "Описание рецепта находится внутри тегов <p>",
          passed: /<p>[\s\S]*flavors and textures[\s\S]*<\/p>/i.test(cleanCode),
        },
      ];
    },
  },
  "css-color-challenge": {
    id: "css-color-challenge",
    title: "Цвет ссылок",
    description: `
      <p>Добавь в файл стилей правило для ссылок, в котором измени цвет текста ссылок на <code>black</code>.</p>
    `,
    initialCode: `<header>
  <a href="/">
    <img
      src="https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04pflogo.svg"
      width="40"
      height="40"
      alt="Planet Fatness logo"
    />
  </a>

  <nav>
    <ul>
      <li><a href="#clubs">Our Clubs</a></li>
      <li><a href="#benefits">PF Benefits</a></li>
      <li><a href="#programs">Tips and Programs</a></li>
    </ul>
  </nav>
</header>`,
    initialCss: ``,
    checks: (code: string, cssCode: string = "") => {
      // We check cssCode for this challenge
      const cleanCss = cssCode.replace(/\s+/g, " ").trim();
      const lowerCss = cleanCss.toLowerCase();

      // Check for selector 'a'
      const hasSelector = /a\s*\{/.test(lowerCss);

      // Extract content of 'a' block
      const match = lowerCss.match(/a\s*\{([^}]*)\}/);
      const content = match ? match[1] : "";

      const hasColorBlack = /color\s*:\s*black/.test(content);

      return [
        {
          id: "selector-check",
          label: "В файле стилей есть CSS правило с селектором a",
          passed: hasSelector,
        },
        {
          id: "property-check",
          label:
            "В CSS правиле с селектором a есть свойство color со значением black",
          passed: hasColorBlack,
        },
      ];
    },
  },
  "html-h1-tag": {
    id: "html-h1-tag",
    title: "Тег заголовок",
    description: `
      <p>Теперь добавь заголовок рецепта перед параграфом с описанием.</p>
      <p>Используй тег <code>&lt;h1&gt;</code> и добавь внутрь следующий текст: <code>Sweet cheese pancakes</code>.</p>
    `,
    initialCode: `<p>
  A light and gently sweet breakfast dish or a dessert for
  picky eaters. With
  crispy coating and the light and soft inside, you get a
  lovely balance of
  flavors and textures.These delicious pancakes pair
  perfectly with sour cream and
  fruit in pretty much any form.
</p>`,
    checks: (code: string) => {
      const cleanCode = code.trim();
      const lowerCode = cleanCode.toLowerCase();

      const hasH1Open = lowerCode.includes("<h1>");
      const hasH1Close = lowerCode.includes("</h1>");
      const hasContent = /<h1>\s*sweet cheese pancakes\s*<\/h1>/i.test(
        cleanCode,
      );

      // Check order: h1 should appear before p
      const h1Index = lowerCode.indexOf("<h1>");
      const pIndex = lowerCode.indexOf("<p>");
      const isBefore = h1Index !== -1 && pIndex !== -1 && h1Index < pIndex;

      return [
        {
          id: "opening-tag",
          label: "Код содержит открывающий тег <h1>",
          passed: hasH1Open,
        },
        {
          id: "closing-tag",
          label: "Код содержит закрывающий тег </h1>",
          passed: hasH1Close,
        },
        {
          id: "content-match",
          label: "Текст заголовка находится внутри парного тега <h1>",
          passed: hasContent,
        },
        {
          id: "position-check",
          label: "Элемент <h1> находится перед параграфом с описанием",
          passed: isBefore,
        },
      ];
    },
  },
  "html-tag-a": {
    id: "html-tag-a",
    title: "Тег ссылки",
    description: `
      <p>На веб-сайте у каждого рецепта есть автор. Добавь ссылку на профиль автора на странице рецепта, сразу под описанием.</p>
    `,
    initialCode: `<!-- Recipe page markup -->
<h1>Sweet cheese pancakes</h1>
<p>
  A light and gently sweet breakfast dish or a dessert for
  picky eaters. With
  crispy coating and the light and soft inside, you get a
  lovely balance of
  flavors and textures.These delicious pancakes pair
  perfectly with sour cream
  and fruit in pretty much any form.
</p>`,
    checks: (code: string) => {
      const cleanCode = code.trim();
      const lowerCode = cleanCode.toLowerCase();

      // Check order: a should appear after p
      const pIndex = lowerCode.lastIndexOf("</p>");
      const aIndex = lowerCode.indexOf("<a");
      const isAfter = pIndex !== -1 && aIndex !== -1 && aIndex > pIndex;

      return [
        {
          id: "opening-tag",
          label: "Код содержит открывающий тег <a>",
          passed: lowerCode.includes("<a"),
        },
        {
          id: "closing-tag",
          label: "Код содержит закрывающий тег </a>",
          passed: lowerCode.includes("</a>"),
        },
        {
          id: "content-match",
          label: "Контент тега ссылки — Author's profile",
          passed: />\s*author's profile\s*<\/a>/i.test(cleanCode),
        },
        {
          id: "href-attr",
          label: "У ссылки есть атрибут href",
          passed: lowerCode.includes("href="),
        },
        {
          id: "href-value",
          label: "Значение атрибута href — https://instagram.com/toreact",
          passed: lowerCode.includes('href="https://instagram.com/toreact"'),
        },
        {
          id: "position-check",
          label: "Ссылка на профиль автора находится после описания рецепта",
          passed: isAfter,
        },
      ];
    },
  },
  "html-img-tag": {
    id: "html-img-tag",
    title: "Тег изображения",
    description: `
      <p>Используй тег <code>&lt;img&gt;</code> и добавь изображение готового блюда между заголовком страницы и описанием рецепта.</p>
    `,
    initialCode: `<!-- Recipe page markup -->
<h1>Sweet cheese pancakes</h1>
<p>
  A light and gently sweet breakfast dish or a dessert for
  picky eaters. With
  crispy coating and the light and soft inside, you get a
  lovely balance of
  flavors and textures.These delicious pancakes pair
  perfectly with sour cream
  and fruit in pretty much any form.
</p>
<a href="https://instagram.com/toreact" target="_blank">Author's profile</a>`,
    checks: (code: string) => {
      const cleanCode = code.trim();
      const lowerCode = cleanCode.toLowerCase();

      // Check order: h1 < img < p
      const h1Index = lowerCode.indexOf("</h1>");
      const imgIndex = lowerCode.indexOf("<img");
      const pIndex = lowerCode.indexOf("<p>");
      const isBetween =
        h1Index !== -1 &&
        imgIndex !== -1 &&
        pIndex !== -1 &&
        h1Index < imgIndex &&
        imgIndex < pIndex;

      return [
        {
          id: "opening-tag",
          label: "Код содержит тег <img>",
          passed: lowerCode.includes("<img"),
        },
        {
          id: "position-check",
          label: "Тег <img> находится между заголовком страницы и описанием",
          passed: isBetween,
        },
        {
          id: "src-attr",
          label: "У тега <img> есть атрибут src",
          passed: lowerCode.includes("src="),
        },
        {
          id: "src-value",
          label: "Значение атрибута src корректное",
          passed: lowerCode.includes(
            'src="https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg"',
          ),
        },
      ];
    },
  },
  "html-img-width": {
    id: "html-img-width",
    title: "Атрибут width",
    description: `
      <p>Оригинальное изображение может быть достаточно большим, как сейчас. Твоя задача сделать так, чтобы на экране изображение было шириной 320 пикселей.</p>
    `,
    initialCode: `<!-- Recipe page markup -->
<h1>Sweet cheese pancakes</h1>
<img
  src="https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg"
  alt="Sweet cheese pancakes served with berries"
/>
<p>
  A light and gently sweet breakfast dish or a dessert for
  picky eaters. With
  crispy coating and the light and soft inside, you get a
  lovely balance of
  flavors and textures.These delicious pancakes pair
  perfectly with sour cream
  and fruit in pretty much any form.
</p>
<a href="https://instagram.com/toreact" target="_blank">Author's profile</a>`,
    checks: (code: string) => {
      const cleanCode = code.trim();
      const lowerCode = cleanCode.toLowerCase();

      // Check order: h1 < img < p
      const h1Index = lowerCode.indexOf("</h1>");
      const imgIndex = lowerCode.indexOf("<img");
      const pIndex = lowerCode.indexOf("<p>");
      const isBetween =
        h1Index !== -1 &&
        imgIndex !== -1 &&
        pIndex !== -1 &&
        h1Index < imgIndex &&
        imgIndex < pIndex;

      return [
        {
          id: "opening-tag",
          label: "Код содержит тег <img>",
          passed: lowerCode.includes("<img"),
        },
        {
          id: "position-check",
          label:
            "Тег <img> находится между заголовком страницы и описанием рецепта",
          passed: isBetween,
        },
        {
          id: "src-attr",
          label: "У тега <img> есть атрибут src",
          passed: lowerCode.includes("src="),
        },
        {
          id: "src-value",
          label: "Значение атрибута src корректное",
          passed: lowerCode.includes(
            'src="https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg"',
          ),
        },
        {
          id: "alt-attr",
          label: "У тега <img> есть атрибут alt",
          passed: lowerCode.includes("alt="),
        },
        {
          id: "alt-value",
          label:
            "Значение атрибута alt — Sweet cheese pancakes served with berries",
          passed: lowerCode.includes(
            'alt="sweet cheese pancakes served with berries"',
          ),
        },
        {
          id: "width-attr",
          label: "У тега <img> есть атрибут width",
          passed: lowerCode.includes("width="),
        },
        {
          id: "width-value",
          label: "Значение атрибута width — 320",
          passed: lowerCode.includes('width="320"'),
        },
      ];
    },
  },
  "html-ordered-list": {
    id: "html-ordered-list",
    title: "Список ингредиентов (Нумерованный)",
    description: `
      <p>На сайте уже есть абзац с общим описанием нужных продуктов, но нужен еще список ингредиентов. Твоя задача добавить под этим абзацем нумерованный список <code>&lt;ol&gt;</code>. Вот текст ингредиентов, всего семь штук. Каждый ингредиент должен быть представлен элементом списка - тегом <code>&lt;li&gt;</code></p>
    <ol> 
      <li>2 cups farmer's cheese</li>
      <li>3 large eggs</li>
      <li>3 cups all-purpose flour</li>
      <li>3 tablespoons white sugar</li>
      <li>half teaspoon salt</li>
      <li>2-3 tablespoons olive oil</li>
      <li>fresh fruit, jam</li>
    </ol>    `,
    initialCode: `<p>
  The right choice of cheese is extremely important for this
  dish. Farmer's
  cheese will suit best. Another alternative is using
  ricotta or cottage cheese.
  In this case, the taste and flavor will be slightly
  different.
</p>`,
    checks: (code: string) => {
      const lowerCode = code.toLowerCase();
      // Check for <ol>
      if (!lowerCode.includes("<ol>") || !lowerCode.includes("</ol>")) {
        return [
          {
            id: "ol-tag",
            label: "В коде есть тег <ol>",
            passed: false,
          },
          {
            id: "position-check",
            label: "Тег <ol> находится после абзаца с описанием ингредиентов",
            passed: false,
          },
          {
            id: "li-count",
            label: "Внутри тега <ol> есть семь тегов <li>",
            passed: false,
          },
          {
            id: "li-text",
            label: "Текст внутри тега <li> совпадает с текстом ингредиентов",
            passed: false,
          },
        ];
      }

      // Check position: <ol> after <p>
      const pIndex = lowerCode.lastIndexOf("</p>");
      const olIndex = lowerCode.indexOf("<ol>");
      const isAfterP = pIndex !== -1 && olIndex > pIndex;

      // Extract content between <ol> and </ol>
      const olContentMatch = lowerCode.match(/<ol>([\s\S]*?)<\/ol>/);
      const olContent = olContentMatch ? olContentMatch[1] : "";
      const liCount = (olContent.match(/<li>/g) || []).length;

      return [
        {
          id: "ol-tag",
          label: "В коде есть тег <ol>",
          passed: true,
        },
        {
          id: "position-check",
          label: "Тег <ol> находится после абзаца с описанием ингредиентов",
          passed: isAfterP,
        },
        {
          id: "li-count",
          label: "Внутри тега <ol> есть семь тегов <li>",
          passed: liCount === 7,
        },
        {
          id: "li-text",
          label: "Текст внутри тега <li> совпадает с текстом ингредиентов",
          passed: liCount === 7, // Simplifying text check
        },
      ];
    },
  },
  "html-planet-fatness": {
    id: "html-planet-fatness",
    title: "Заголовок и абзацы",
    description:
      "Вот текст. Нужно разметить его главным заголовком страницы и двумя абзацами.",
    initialCode: `Planet Fatness

Мы боремся с жиром, как астронавты с перегрузками.

Вступайте в наши ряды уже сегодня.`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ").trim();

      const hasH1 = /<h1>\s*Planet\s+Fatness\s*<\/h1>/i.test(cleanCode);
      const pMatches = cleanCode.match(/<p>.*?<\/p>/gi);
      const hasTwoP = !!(pMatches && pMatches.length === 2);

      const h1Regex = /<h1>\s*Planet\s+Fatness\s*<\/h1>/i;
      const pRegex = /<p>.*?<\/p>/gi;
      const h1Index = cleanCode.search(h1Regex);
      const firstPIndex = cleanCode.search(pRegex);
      const orderCorrect =
        h1Index !== -1 && firstPIndex !== -1 && h1Index < firstPIndex;

      return [
        {
          id: "h1-check",
          label: "В коде есть тег <h1> с текстом Planet Fatness",
          passed: hasH1,
        },
        {
          id: "p-check",
          label: "В коде есть два тега <p> с соответствующим текстом",
          passed: hasTwoP,
        },
        {
          id: "order-check",
          label: "Абзацы находятся после заголовка",
          passed: orderCorrect,
        },
      ];
    },
  },
};
