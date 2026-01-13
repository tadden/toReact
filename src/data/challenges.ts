export interface CheckResult {
  id: string;
  label: string;
  passed: boolean;
}

export interface ChallengeData {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  checks: (code: string) => CheckResult[];
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
        cleanCode
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
            'src="https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg"'
          ),
        },
      ];
    },
  },
};
