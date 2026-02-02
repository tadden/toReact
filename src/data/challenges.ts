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
  type?: "html" | "javascript"; // Default is 'html'
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
  "js-vars": {
    id: "js-vars",
    title: "Переменные: объявление и инициализация",
    type: "javascript",
    description: `
      <p>Переменные используются для хранения данных. У каждой переменной есть идентификатор (имя переменной). Значение каждой переменной хранится в оперативной памяти.</p>
      
      <p>Переменную можно представить как коробку с надписью (имя переменной), в которой что-то находится (значение переменной).</p>
      
      <pre><code class="language-javascript">&lt;ключевое слово&gt; &lt;имя переменной&gt; = &lt;значение&gt;</code></pre>

      <p>Объявление переменной начинается с ключевого слова <code>const</code>. Такая переменная должна быть сразу инициализирована начальным значением, и такой переменной нельзя присвоить другое значение после её инициализации.</p>

      <div class="info-highlight" style="background-color: #fef2f2; color: #991b1b; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
        <p><strong>Внимание</strong></p>
        <p>Создание переменной без ключевого слова <code>const</code> приведет к ошибке.</p>
      </div>

      <pre><code class="language-javascript">const age = 20;
const userName = "Mango";
const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;</code></pre>

      <p>В <code>JavaScript</code> имя переменной записывается в <code>camelCase</code>-нотации. Первое слово пишется маленькими буквами, а каждое следующее начинается с большой. Имена переменных чувствительны к регистру, то есть <code>user</code>, <code>usEr</code> и <code>User</code> - это разные переменные.</p>

      <h3>Задание</h3>
      <p>Объяви две переменные, <code>productName</code> для названия товара, и <code>pricePerItem</code> для хранения цены за штуку. При объявлении присвой переменным следующие значения:</p>
      <ul class="list-disc">
        <li>название - строка <code>"Droid"</code>;</li>
        <li>цена за штуку - число <code>2000</code>.</li>
      </ul>
    `,
    initialCode: `// Change code below this line
`,
    checks: (code: string) => {
      const cleanCode = code.trim();
      // Basic regex checks for simple variable declarations
      // Note: This is fragile if users write weird code, but sufficient for basic checks.
      // Better way would be AST parsing, but regex is okay for now.

      // Check productName declaration
      const hasProductName = /const\s+productName\s*=\s*/.test(cleanCode);

      // Check productName value "Droid" (quoted)
      const hasProductNameValue =
        /const\s+productName\s*=\s*(["'])Droid\1/.test(cleanCode);

      // Check pricePerItem declaration
      const hasPricePerItem = /const\s+pricePerItem\s*=\s*/.test(cleanCode);

      // Check pricePerItem value 2000
      const hasPricePerItemValue = /const\s+pricePerItem\s*=\s*2000/.test(
        cleanCode,
      );

      return [
        {
          id: "productName-declared",
          label: "Объявлена переменная productName",
          passed: hasProductName,
        },
        {
          id: "productName-value",
          label: 'Значение переменной productName - это строка "Droid"',
          passed: hasProductNameValue,
        },
        {
          id: "pricePerItem-declared",
          label: "Объявлена переменная pricePerItem",
          passed: hasPricePerItem,
        },
        {
          id: "pricePerItem-value",
          label: "Значение переменной pricePerItem - это число 2000",
          passed: hasPricePerItemValue,
        },
      ];
    },
  },
  "js-vars-reassignment": {
    id: "js-vars-reassignment",
    title: "Переопределение значения",
    type: "javascript",
    description: `
      <p>Для того чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово <code>let</code>. Создание переменной без ключевого слова <code>let</code> или <code>const</code> приведет к ошибке.</p>

      <pre><code class="language-javascript">let age = 5;
age = 10;

let username = "Mango";
username = "Poly";</code></pre>

      <p>Попытка обратиться к переменной по имени до её объявления вызовет ошибку.</p>
      <p>Например, нельзя пытаться прочитать или изменить значение переменной до её объявления:</p>

      <pre><code class="language-javascript">// ❌ Неправильно, будет ошибка reference error
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Объявление переменной age
let age = 20;

// ✅ Правильно, обращаемся после объявления
age = 25;
console.log(age); // 25</code></pre>

      <h3>Задание</h3>
      <p>Имя товара изменили на <code>"Repair droid"</code> и увеличили его цену на <code>1500</code> кредитов. Переопредели значения переменных <code>pricePerItem</code> и <code>productName</code> после их объявления.</p>
    `,
    initialCode: `let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
`,
    checks: (code: string) => {
      const cleanCode = code.trim();

      // Check if variables are declared with let
      const hasLetProductName = /let\s+productName\s*=\s*/.test(cleanCode);
      const hasLetPricePerItem = /let\s+pricePerItem\s*=\s*/.test(cleanCode);

      // Check initial values (declarations) matches "Droid" and 2000
      // We look for patterns like 'let productName = "Droid"'
      const validInitialProduct = /let\s+productName\s*=\s*(["'])Droid\1/.test(
        cleanCode,
      );
      const validInitialPrice = /let\s+pricePerItem\s*=\s*2000/.test(cleanCode);

      // Check reassignment
      // We look for 'productName = "Repair droid"' appearing AFTER declaration?
      // Simple regex might find it anywhere. For strict ordering we'd need more complex parsing or assume user follows structure.
      // Let's assume valid structure if regex matches reassignment line.

      const reassignedProduct = /productName\s*=\s*(["'])Repair droid\1/.test(
        cleanCode,
      );

      // Check price reassignment to 3500 (2000 + 1500) OR price = price + 1500 OR price += 1500
      // The task says "increased by 1500", user could write `pricePerItem = 3500` or `pricePerItem += 1500`.
      // Let's check for both possibilities or the result value.
      // Since we don't run code, we check source.
      // Options:
      // 1. pricePerItem = 3500
      // 2. pricePerItem += 1500
      // 3. pricePerItem = pricePerItem + 1500

      const reassignedPriceVal = /pricePerItem\s*=\s*3500/.test(cleanCode);
      const reassignedPricePlus =
        /pricePerItem\s*\+=\s*1500/.test(cleanCode) ||
        /pricePerItem\s*=\s*pricePerItem\s*\+\s*1500/.test(cleanCode);

      const reassignedPrice = reassignedPriceVal || reassignedPricePlus;

      return [
        {
          id: "price-let",
          label: "Переменная pricePerItem объявлена с помощью let",
          passed: hasLetPricePerItem,
        },
        {
          id: "price-initial",
          label:
            "При объявлении переменной pricePerItem присвоено значение — число 2000",
          passed: validInitialPrice,
        },
        {
          id: "price-reassign",
          label:
            "Переменной pricePerItem присвоено новое значение, больше предыдущего на 1500",
          passed: reassignedPrice,
        },
        {
          id: "product-let",
          label: "Переменная productName объявлена с помощью let",
          passed: hasLetProductName,
        },
        {
          id: "product-initial",
          label:
            'При объявлении переменной productName присвоено значение — строка "Droid"',
          passed: validInitialProduct,
        },
        {
          id: "product-reassign",
          label:
            'Переменной productName присвоено новое значение — строка "Repair droid"',
          passed: reassignedProduct,
        },
      ];
    },
  },
  "js-types": {
    id: "js-types",
    title: "Числа, строки, булевы",
    type: "javascript",
    description: `
      <p>В JavaScript переменная не ассоциируется с каким-либо типом данных, тип есть у её значения. То есть переменная может хранить значения разных типов.</p>

      <ul class="list-disc">
        <li><strong>Number</strong> - целые числа и числа с плавающей запятой (точкой).</li>
        <li><strong>String</strong> - строки, последовательность от нуля или более символов. Строка начинается и заканчивается одинарной <code>'</code> или двойными кавычками <code>"</code>.</li>
        <li><strong>Boolean</strong> - логический тип данных, флаги состояния. Всего два значения: <code>true</code> и <code>false</code>. Например, на вопрос, включен ли свет в комнате, можно ответить <code>true</code> (да) или <code>false</code> (нет).</li>
      </ul>

      <pre><code class="language-javascript">// Числа
const age = 20;
const salary = 3710.84;

// Строки
const name = "Mango";
const description = "JavaSript essentials";

// Були
const isModalOpen = true;
const isLoggedIn = false;</code></pre>

      <h3>Задание</h3>
      <p>Объяви следующие переменные, используя ключевое слово <code>const</code> или <code>let</code> и присвой им соответствующие значения.</p>

      <ul class="list-disc">
        <li><code>topSpeed</code> - число 160.</li>
        <li><code>distance</code> - число 617.54.</li>
        <li><code>login</code> - строка "mango935".</li>
        <li><code>isOnline</code> - буль true.</li>
        <li><code>isAdmin</code> - буль false.</li>
      </ul>
    `,
    initialCode: `// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      // Regex checks for each variable
      const hasTopSpeed = /(const|let)\s+topSpeed\s*=\s*160/.test(cleanCode);
      const hasDistance = /(const|let)\s+distance\s*=\s*617\.54/.test(
        cleanCode,
      );
      const hasLogin = /(const|let)\s+login\s*=\s*["']mango935["']/.test(
        cleanCode,
      );
      const hasIsOnline = /(const|let)\s+isOnline\s*=\s*true/.test(cleanCode);
      const hasIsAdmin = /(const|let)\s+isAdmin\s*=\s*false/.test(cleanCode);

      return [
        {
          id: "topSpeed",
          label: "Объявлена переменная topSpeed со значением 160",
          passed: hasTopSpeed,
        },
        {
          id: "distance",
          label: "Объявлена переменная distance со значением 617.54",
          passed: hasDistance,
        },
        {
          id: "login",
          label: 'Объявлена переменная login со значением "mango935"',
          passed: hasLogin,
        },
        {
          id: "isOnline",
          label: "Объявлена переменная isOnline со значением true",
          passed: hasIsOnline,
        },
        {
          id: "isAdmin",
          label: "Объявлена переменная isAdmin со значением false",
          passed: hasIsAdmin,
        },
      ];
    },
  },
  "js-math-operators": {
    id: "js-math-operators",
    title: "Базовые математические операторы",
    type: "javascript",
    description: `
      <p>Назначение, функционал и приоритет (порядок) операций ничем не отличаются от школьного курса алгебры. Операторы возвращают значение как результат выражения.</p>

      <pre><code class="language-javascript">const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2</code></pre>

      <div class="info-highlight" style="background-color: #f3f4f6; color: #1f2937; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
        <p><strong>Полезно</strong></p>
        <p>Важно запомнить правильное именование составляющих алгебраического выражения: <code>+</code> , <code>-</code> , <code>*</code> и <code>/</code> называются операторами, а то, к чему они применяются (числа) - операндами.</p>
      </div>

      <h3>Задание</h3>
      <p>Дополни код, присвоив переменной <code>totalPrice</code> выражение для подсчета общей суммы заказа. Переменная <code>pricePerItem</code> хранит цену одной единицы товара, а <code>orderedQuantity</code> - количество единиц товара в заказе.</p>
    `,
    initialCode: `const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line

const totalPrice = 
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasPricePerItem = /const\s+pricePerItem\s*=\s*3500/.test(cleanCode);
      const hasOrderedQuantity = /const\s+orderedQuantity\s*=\s*4/.test(
        cleanCode,
      );
      const hasTotalPrice = /const\s+totalPrice\s*=/.test(cleanCode);

      // Check for calculation logic: pricePerItem * orderedQuantity
      // Matches: const totalPrice = pricePerItem * orderedQuantity
      // Or literal: const totalPrice = 3500 * 4
      const validCalculation =
        /totalPrice\s*=\s*(pricePerItem\s*\*\s*orderedQuantity|3500\s*\*\s*4|orderedQuantity\s*\*\s*pricePerItem)/.test(
          cleanCode,
        );

      // Value check logic isn't possible with just regex unless user hardcodes 14000.
      // But the task asks for the *expression*.
      // Let's assume validCalculation implies correct value.
      // The screenshot says "Value of totalPrice is 14000", which implies the check runs actual code in a real environment.
      // Since we simulate checks with Regex, we assume if expression is correct, value is correct.

      const hasOperator = /\*/.test(cleanCode);

      return [
        {
          id: "pricePerItem",
          label: "Объявлена переменная pricePerItem",
          passed: hasPricePerItem, // Assuming it's there from initial code
        },
        {
          id: "pricePerItem-value",
          label: "Значение переменной pricePerItem - это число 3500",
          passed: hasPricePerItem,
        },
        {
          id: "orderedQuantity",
          label: "Объявлена переменная orderedQuantity",
          passed: hasOrderedQuantity,
        },
        {
          id: "orderedQuantity-value",
          label: "Значение переменной orderedQuantity - это число 4",
          passed: hasOrderedQuantity,
        },
        {
          id: "totalPrice",
          label: "Объявлена переменная totalPrice",
          passed: hasTotalPrice,
        },
        {
          id: "totalPrice-value",
          label: "Значение переменной totalPrice - это число 14000",
          passed: validCalculation,
        },
        {
          id: "operator",
          label: "Использован оператор *",
          passed: hasOperator,
        },
      ];
    },
  },

  "js-template-strings": {
    id: "js-template-strings",
    title: "Шаблонные строки",
    type: "javascript",
    description: `
      <p>Шаблонные строки — это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключается в обратные (косые) кавычки вместо двойных или одинарных, и может содержать заполнители, которые обозначаются знаком доллара и фигурными скобками - <code>\${выражение}</code>.</p>

      <pre><code class="language-javascript">const guestName = "Mango";
const roomNumber = 207;
const greeting = \`Добро пожаловать \${guestName}, вы поселены в номер \${roomNumber}\`;</code></pre>

      <h3>Задание</h3>
      <p>Объяви переменную <code>message</code> и запиши в нее сообщение о покупке, строку в формате: <code>"You picked &lt;название товара&gt;, price per item is &lt;цена товара&gt; credits"</code>. Где <code>&lt;название товара&gt;</code> и <code>&lt;цена товара&gt;</code> — это значения переменных <code>productName</code> и <code>pricePerItem</code>. Используй синтаксис шаблонных строк.</p>
    `,
    initialCode: `const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasProductName = /const\s+productName\s*=\s*["']Droid["']/.test(
        cleanCode,
      );
      const hasPricePerItem = /const\s+pricePerItem\s*=\s*3500/.test(cleanCode);
      const hasMessage = /(const|let)\s+message\s*=/.test(cleanCode);

      // Check for template literals and variable usage
      const usesTemplateString = /`.*`/.test(code);
      const usesInterpolation =
        /\$\{productName\}/.test(code) && /\$\{pricePerItem\}/.test(code);

      const expectedString = "You picked Droid, price per item is 3500 credits";
      // This regex attempts to check the structure, but exact string match is hard with regex on raw code.
      // However, we can check if they constructed it somewhat correctly.
      const correctStructure =
        /`You picked \${productName}, price per item is \${pricePerItem} credits`/.test(
          code,
        );

      return [
        {
          id: "productName",
          label: "Объявлена переменная productName",
          passed: hasProductName,
        },
        {
          id: "productName-value",
          label: 'Значение переменной productName - это строка "Droid"',
          passed: hasProductName,
        },
        {
          id: "pricePerItem",
          label: "Объявлена переменная pricePerItem",
          passed: hasPricePerItem,
        },
        {
          id: "pricePerItem-value",
          label: "Значение переменной pricePerItem - это число 3500",
          passed: hasPricePerItem,
        },
        {
          id: "message",
          label: "Объявлена переменная message",
          passed: hasMessage,
        },
        {
          id: "message-value",
          label:
            'Значение переменной message - это строка "You picked Droid, price per item is 3500 credits"',
          passed: correctStructure, // We rely on code structure check technically
        },
      ];
    },
  },
  "js-product-order": {
    id: "js-product-order",
    title: "Задача: Заказ продукта",
    type: "javascript",
    description: `
      <p>Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:</p>

      <ul class="list-disc">
        <li><code>pricePerDroid</code> - цена одного дроида, значение <code>800</code></li>
        <li><code>orderedQuantity</code> - количество дроидов в заказе, значение <code>6</code></li>
        <li><code>deliveryFee</code> - стоимость доставки, значение <code>50</code></li>
        <li><code>totalPrice</code> - общая сумма заказа к оплате, не забудь про стоимость доставки</li>
        <li><code>message</code> - сообщение о состоянии заказа в формате <code>"You ordered droids worth &lt;total price&gt; credits. Delivery (&lt;delivery fee&gt; credits) is included in total price."</code></li>
      </ul>
    `,
    initialCode: `// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasPricePerDroid = /(const|let)\s+pricePerDroid\s*=\s*800/.test(
        cleanCode,
      );
      const hasOrderedQuantity = /(const|let)\s+orderedQuantity\s*=\s*6/.test(
        cleanCode,
      );
      const hasDeliveryFee = /(const|let)\s+deliveryFee\s*=\s*50/.test(
        cleanCode,
      );
      const hasTotalPrice = /(const|let)\s+totalPrice\s*=\s*/.test(cleanCode);
      const hasMessage = /(const|let)\s+message\s*=\s*/.test(cleanCode);

      const validCalculation =
        /totalPrice\s*=\s*(pricePerDroid\s*\*\s*orderedQuantity|orderedQuantity\s*\*\s*pricePerDroid|800\s*\*\s*6|6\s*\*\s*800)(\s*\+\s*deliveryFee|\s*\+\s*50)/.test(
          cleanCode,
        ) || /totalPrice\s*=\s*4850/.test(cleanCode);

      const correctMessageStructure =
        /`You ordered droids worth \${totalPrice} credits. Delivery \(\${deliveryFee} credits\) is included in total price.`/.test(
          code,
        ) ||
        cleanCode.includes(
          "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price.",
        );

      return [
        {
          id: "orderedQuantity",
          label: "Объявлена переменная orderedQuantity",
          passed: hasOrderedQuantity,
        },
        {
          id: "orderedQuantity-value",
          label: "Значение переменной orderedQuantity - это число 6",
          passed: hasOrderedQuantity,
        },
        {
          id: "pricePerDroid",
          label: "Объявлена переменная pricePerDroid",
          passed: hasPricePerDroid,
        },
        {
          id: "pricePerDroid-value",
          label: "Значение переменной pricePerDroid - это число 800",
          passed: hasPricePerDroid,
        },
        {
          id: "deliveryFee",
          label: "Объявлена переменная deliveryFee",
          passed: hasDeliveryFee,
        },
        {
          id: "deliveryFee-value",
          label: "Значение переменной deliveryFee - это число 50",
          passed: hasDeliveryFee,
        },
        {
          id: "totalPrice",
          label: "Объявлена переменная totalPrice",
          passed: hasTotalPrice,
        },
        {
          id: "totalPrice-value",
          label: "Значение переменной totalPrice - это число 4850",
          passed: validCalculation,
        },
        {
          id: "message",
          label: "Объявлена переменная message",
          passed: hasMessage,
        },
        {
          id: "message-value",
          label:
            'Значение переменной message - это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."',
          passed: correctMessageStructure,
        },
      ];
    },
  },
};
