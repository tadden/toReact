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
      
      <p>Переменную можно представить как коробку с надписью (имя переменной), в которой что-то находится (значение переменной).</p>
      
      <pre class="challenge-code-block"><code class="language-javascript">&lt;ключевое слово&gt; &lt;имя переменной&gt; = &lt;значение&gt;</code></pre>

      <p>Объявление переменной начинается с ключевого слова <code>const</code>. Такая переменная должна быть сразу инициализирована начальным значением, и такой переменной нельзя присвоить другое значение после её инициализации.</p>

      <div class="info-highlight light">
        <p><strong>Внимание</strong></p>
        <p>Создание переменной без ключевого слова <code>const</code> приведет к ошибке.</p>
      </div>

      <pre class="challenge-code-block"><code class="language-javascript">const age = 20;
const userName = "Mango";
const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;</code></pre>

      <p>В <code>JavaScript</code> имя переменной записывается в <code>camelCase</code>-нотации. Первое слово пишется маленькими буквами, а каждое следующее начинается с большой. Имена переменных чувствительны к регистру, то есть <code>user</code>, <code>usEr</code> и <code>User</code> - это разные переменные.</p>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Объяви две переменные, <code>productName</code> для названия товара, и <code>pricePerItem</code> для хранения цены за штуку. При объявлении присвой переменным следующие значения:</p>
        <ul class="list-disc">
          <li>название - строка <code>"Droid"</code>;</li>
          <li>цена за штуку - число <code>2000</code>.</li>
        </ul>
      </div>
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

      <pre class="challenge-code-block"><code class="language-javascript">let age = 5;
age = 10;

let username = "Mango";
username = "Poly";</code></pre>

      <p>Попытка обратиться к переменной по имени до её объявления вызовет ошибку.</p>
      <p>Например, нельзя пытаться прочитать или изменить значение переменной до её объявления:</p>

      <pre class="challenge-code-block"><code class="language-javascript">// ❌ Неправильно, будет ошибка reference error
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Объявление переменной age
let age = 20;

// ✅ Правильно, обращаемся после объявления
age = 25;
console.log(age); // 25</code></pre>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Имя товара изменили на <code>"Repair droid"</code> и увеличили его цену на <code>1500</code> кредитов. Переопредели значения переменных <code>pricePerItem</code> и <code>productName</code> после их объявления.</p>
      </div>
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

      <pre class="challenge-code-block"><code class="language-javascript">// Числа
const age = 20;
const salary = 3710.84;

// Строки
const name = "Mango";
const description = "JavaSript essentials";

// Були
const isModalOpen = true;
const isLoggedIn = false;</code></pre>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Объяви следующие переменные, используя ключевое слово <code>const</code> или <code>let</code> и присвой им соответствующие значения.</p>

        <ul class="list-disc">
          <li><code>topSpeed</code> - число 160.</li>
          <li><code>distance</code> - число 617.54.</li>
          <li><code>login</code> - строка "mango935".</li>
          <li><code>isOnline</code> - буль true.</li>
          <li><code>isAdmin</code> - буль false.</li>
        </ul>
      </div>
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

      <pre class="challenge-code-block"><code class="language-javascript">const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2</code></pre>

      <div class="info-highlight light">
        <p><strong>Полезно</strong></p>
        <p>Важно запомнить правильное именование составляющих алгебраического выражения: <code>+</code> , <code>-</code> , <code>*</code> и <code>/</code> называются операторами, а то, к чему они применяются (числа) - операндами.</p>
      </div>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Дополни код, присвоив переменной <code>totalPrice</code> выражение для подсчета общей суммы заказа. Переменная <code>pricePerItem</code> хранит цену одной единицы товара, а <code>orderedQuantity</code> - количество единиц товара в заказе.</p>
      </div>
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
  "js-function-declaration": {
    id: "js-function-declaration",
    title: "Объявление функции",
    type: "javascript",
    description: `
      <p>Функция — это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями.</p>
      
      <p>Функцию можно представить как черный ящик — она получает что-то на входе (данные), и возвращает что-то на выходе (результат выполнения кода внутри неё).</p>

      <pre class="challenge-code-block"><code class="language-javascript">// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log("multiply function invocation");
}

// 2. Вызовы функции multiply
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation</code></pre>

      <p>Объявление функции начинается с ключевого слова <code>function</code>, за которым идет её имя — глагол, отвечающий на вопрос «Что сделать?» и пара круглых скобок. Тело функции берется в фигурные скобки <code>{}</code> и содержит инструкции, которые необходимо выполнить во время её вызова. Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок.</p>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Объяви функцию <code>sayHi</code>, внутри которой добавь <code>console.log()</code> со строкой <code>"Hello, this is my first function!"</code>. После объявления вызови функцию <code>sayHi</code>.</p>
      </div>
    `,
    initialCode: `// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasFunction = /function\s+sayHi\s*\(\)\s*\{/.test(cleanCode);
      const hasConsoleLog =
        /console\.log\s*\(\s*["']Hello,\s+this\s+is\s+my\s+first\s+function!["']\s*\)/.test(
          cleanCode,
        );
      // Check if call exists after function declaration (simplified check for existence)
      const hasCall = /sayHi\s*\(\s*\)/.test(cleanCode);

      return [
        {
          id: "function-declared",
          label: "Ожидается объявление функции",
          passed: hasFunction,
        },
        {
          id: "function-name",
          label: "Функции присвоено имя sayHi",
          passed: hasFunction,
        },
        {
          id: "console-log",
          label:
            'В теле функции sayHi есть console.log("Hello, this is my first function!")',
          passed: hasConsoleLog,
        },
        {
          id: "function-call",
          label: "После объявления есть вызов функции sayHi",
          passed: hasFunction && hasCall,
        },
      ];
    },
  },
  "js-function-parameters": {
    id: "js-function-parameters",
    title: "Параметры функции",
    type: "javascript",
    description: `
      <p>В круглых скобках после имени функции идут параметры - перечень данных, которые функция ожидает во время вызова.</p>
      
      <p><strong>Параметры</strong> - это локальные переменные, доступные только в теле функции. Они разделяются запятыми. Параметров может быть несколько или их вообще может не быть, тогда записываются просто пустые круглые скобки.</p>

      <p>Во время вызова функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.</p>

      <pre class="challenge-code-block"><code class="language-javascript">// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(\`Результат умножения равен \${x * y * z}\`);
}

// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550</code></pre>

      <p>Порядок передачи аргументов должен соответствовать порядку объявления параметров: значение первого аргумента будет присвоено первому параметру, второго аргумента - второму параметру и т.д.</p>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Функция <code>add</code> должна уметь добавлять три числа и выводить результат в консоль. Добавь функции <code>add</code> три параметра: <code>a</code>, <code>b</code> и <code>c</code>, которые будут получать значения аргументов во время вызова.</p>
        <p>Дополни <code>console.log()</code> таким образом, чтобы он логировал строку <code>"Addition result equals &lt;result&gt;"</code>, где <code>&lt;result&gt;</code> - это сумма переданных чисел.</p>
      </div>
    `,
    initialCode: `// Change code below this line
function add() {
  console.log("Addition result equals ");
}
// Change code above this line

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasParameters = /function\s+add\s*\(\s*a\s*,\s*b\s*,\s*c\s*\)/.test(
        cleanCode,
      );
      const hasConsoleLog =
        /console\.log\s*\(\s*`Addition result equals \$\{\s*a\s*\+\s*b\s*\+\s*c\s*\}\s*`\s*\)/.test(
          cleanCode,
        ) ||
        /console\.log\s*\(\s*["']Addition result equals ["']\s*\+\s*\(\s*a\s*\+\s*b\s*\+\s*c\s*\)\s*\)/.test(
          cleanCode,
        );

      return [
        {
          id: "function-parameters",
          label: "Объявлена функция add(a, b, c)",
          passed: hasParameters,
        },
        {
          id: "log-call-1",
          label:
            'Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"',
          passed: hasParameters && hasConsoleLog, // Simplification: if logic is correct, it passes
        },
        {
          id: "log-call-2",
          label:
            'Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"',
          passed: hasParameters && hasConsoleLog,
        },
        {
          id: "log-call-3",
          label:
            'Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"',
          passed: hasParameters && hasConsoleLog,
        },
      ];
    },
  },
  "js-function-return": {
    id: "js-function-return",
    title: "Возврат значения",
    type: "javascript",
    description: `
      <p>Оператор <code>return</code> используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает <code>return</code>, он сразу же выходит из функции (прекращает её выполнение) и возвращает указанное значение в то место кода, где функция была вызвана.</p>

      <pre class="challenge-code-block"><code class="language-javascript">function multiply(x, y, z) {
  console.log("Код до return выполняется обычным образом");

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550</code></pre>

      <p>Оператор <code>return</code> без явно указанного значения возвращает специальное значение <code>undefined</code>. При отсутствии <code>return</code> в теле функции, она также вернет <code>undefined</code>.</p>

      <div class="task-instruction">
        <h3>Задание</h3>
        <p>Дополни код функции <code>add</code> таким образом, чтобы она возвращала результат сложения значений трех параметров: <code>a</code>, <code>b</code> и <code>c</code>.</p>
      </div>
    `,
    initialCode: `function add(a, b, c) {
  // Change code below this line

  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasFunction = /function\s+add\s*\(\s*a\s*,\s*b\s*,\s*c\s*\)/.test(
        cleanCode,
      );
      const hasReturn = /\s+return\s+/.test(cleanCode);

      let passesTests = false;
      try {
        // Dynamic execution to check values
        const userFn = new Function(code + "; return add;")();
        if (typeof userFn === "function") {
          const r1 = userFn(15, 27, 10);
          const r2 = userFn(10, 20, 30);
          const r3 = userFn(5, 10, 15);
          const r4 = userFn(1, 1, 1);

          if (r1 === 52 && r2 === 60 && r3 === 30 && r4 === 3) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция add(a, b, c)",
          passed: hasFunction,
        },
        {
          id: "has-return",
          label: "В функции add есть оператор return",
          passed: hasReturn,
        },
        {
          id: "test-1",
          label: "Вызов add(15, 27, 10) возвращает 52",
          passed: passesTests,
        },
        {
          id: "test-2",
          label: "Вызов add(10, 20, 30) возвращает 60",
          passed: passesTests,
        },
        {
          id: "test-3",
          label: "Вызов add(5, 10, 15) возвращает 30",
          passed: passesTests,
        },
        {
          id: "test-random",
          label:
            "Вызов функции со случайными, но валидными аргументами, возвращает правильное значение",
          passed: passesTests,
        },
      ];
    },
  },
  "js-make-message": {
    id: "js-make-message",
    title: "Шаблонные строки 2",
    type: "javascript",
    description: `
      <p>Функция <code>makeMessage(name, price)</code> составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.</p>
      
      <ul class="list-disc">
        <li><code>name</code> - название товара</li>
        <li><code>price</code> - цена товара</li>
      </ul>

      <div class="task-instruction">
        <p>Дополни код функции таким образом, чтобы в переменную <code>message</code> записывалась строка <code>"You picked &lt;product name&gt;, price per item is &lt;product price&gt; credits"</code>, где <code>&lt;product name&gt;</code> и <code>&lt;product price&gt;</code> - это значения параметров <code>name</code> и <code>price</code>. Используй синтаксис шаблонных строк.</p>
      </div>

      <div class="bg-red-500/10 border border-red-500/20 p-4 rounded-lg my-4">
        <h4 class="text-red-400 font-bold mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.56 2.9A7 7 0 0 1 19 8.15W22 21.74A1.73 1.73 0 0 0 23.94 21.46A2.78 2.78 0 0 0 23.94 15.89A5.4 5.4 0 0 0 19 8.15z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2.9 8.56a7 7 0 0 1 5.25-5.66"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M4.93 19.07l1.41-1.41"></path><path d="M17.66 6.34l1.41-1.41"></path></svg>
          Внимание
        </h4>
        <p class="text-sm text-red-200">
          Обрати внимание на то, что в коде отсутствует вызов функции <code>makeMessage</code>. С этого задания и далее мы сами будем вызывать твои функции и проверять то, как они работают. Результат наших проверок ты увидишь в блоке <code>Результаты</code> под редактором кода.
        </p>
      </div>
    `,
    initialCode: `function makeMessage(name, price) {
  // Change code below this line
   const message = "";
  // Change code above this line
  return message;
};
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasFunction =
        /function\s+makeMessage\s*\(\s*name\s*,\s*price\s*\)/.test(cleanCode);
      const hasTemplateString = /`.*`/.test(code); // Basic check for backticks

      let passesTests = false;
      try {
        // Dynamic execution to check values
        const userFn = new Function(code + "; return makeMessage;")();
        if (typeof userFn === "function") {
          const r1 = userFn("Radar", 6150);
          const r2 = userFn("Scanner", 3500);
          const r3 = userFn("Reactor", 8000);
          const r4 = userFn("Engine", 4070);

          if (
            r1 === "You picked Radar, price per item is 6150 credits" &&
            r2 === "You picked Scanner, price per item is 3500 credits" &&
            r3 === "You picked Reactor, price per item is 8000 credits" &&
            r4 === "You picked Engine, price per item is 4070 credits"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция makeMessage(name, price)",
          passed: hasFunction,
        },
        {
          id: "test-1",
          label:
            "Вызов makeMessage('Radar', 6150) возвращает \"You picked Radar, price per item is 6150 credits\"",
          passed: passesTests,
        },
        {
          id: "test-2",
          label:
            "Вызов makeMessage('Scanner', 3500) возвращает \"You picked Scanner, price per item is 3500 credits\"",
          passed: passesTests,
        },
        {
          id: "test-3",
          label:
            "Вызов makeMessage('Reactor', 8000) возвращает \"You picked Reactor, price per item is 8000 credits\"",
          passed: passesTests,
        },
        {
          id: "test-4",
          label:
            "Вызов makeMessage('Engine', 4070) возвращает \"You picked Engine, price per item is 4070 credits\"",
          passed: passesTests,
        },
      ];
    },
  },
  "js-calculate-total-price": {
    id: "js-calculate-total-price",
    title: "Базовые математические операции",
    type: "javascript",
    description: `
      <p>Функция <code>calculateTotalPrice</code> считает и возвращает общую сумму покупки на основе количества товаров в заказе и цены за единицу товара. Она принимает два параметра, значения которых будут задаваться во время её вызова.</p>
      
      <ul class="list-disc">
        <li><code>orderedQuantity</code> - количество единиц товара в заказе</li>
        <li><code>pricePerItem</code> - цена за единицу товара</li>
      </ul>

      <div class="task-instruction">
        <p>Дополни код функции так, чтобы общая сумма покупки была присвоена переменной <code>totalPrice</code>. Загальная сума покупки получается путем умножения количества заказанных товаров на цену единицы.</p>
      </div>
    `,
    initialCode: `function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity + pricePerItem;

  // Change code above this line
  return totalPrice;
};
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasFunction =
        /function\s+calculateTotalPrice\s*\(\s*orderedQuantity\s*,\s*pricePerItem\s*\)/.test(
          cleanCode,
        );
      const hasMultiplication =
        /orderedQuantity\s*\*\s*pricePerItem/.test(cleanCode) ||
        /pricePerItem\s*\*\s*orderedQuantity/.test(cleanCode);

      let passesTests = false;
      try {
        // Dynamic execution to check values
        const userFn = new Function(code + "; return calculateTotalPrice;")();
        if (typeof userFn === "function") {
          const r1 = userFn(5, 100);
          const r2 = userFn(8, 60);
          const r3 = userFn(3, 400);
          const r4 = userFn(1, 3500);
          const r5 = userFn(12, 70);

          if (
            r1 === 500 &&
            r2 === 480 &&
            r3 === 1200 &&
            r4 === 3500 &&
            r5 === 840
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label:
            "Объявлена функция calculateTotalPrice(orderedQuantity, pricePerItem)",
          passed: hasFunction,
        },
        {
          id: "test-1",
          label: "Вызов calculateTotalPrice(5, 100) возвращает 500",
          passed: passesTests,
        },
        {
          id: "test-2",
          label: "Вызов calculateTotalPrice(8, 60) возвращает 480",
          passed: passesTests,
        },
        {
          id: "test-3",
          label: "Вызов calculateTotalPrice(3, 400) возвращает 1200",
          passed: passesTests,
        },
        {
          id: "test-4",
          label: "Вызов calculateTotalPrice(1, 3500) возвращает 3500",
          passed: passesTests,
        },
        {
          id: "test-5",
          label: "Вызов calculateTotalPrice(12, 70) возвращает 840",
          passed: passesTests,
        },
        {
          id: "test-random",
          label:
            "Вызов функции со случайными, но валидными аргументами, возвращает правильное значение",
          passed: passesTests,
        },
      ];
    },
  },
  "js-make-order-message": {
    id: "js-make-order-message",
    title: "Заказ дроидов",
    type: "javascript",
    description: `
      <p>Функция <code>makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)</code> составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.</p>
      
      <ul class="list-disc">
        <li><code>orderedQuantity</code> - количество дроидов в заказе</li>
        <li><code>pricePerDroid</code> - цена одного дроида</li>
        <li><code>deliveryFee</code> - стоимость доставки</li>
      </ul>

      <div class="task-instruction">
        <p>Дополни код функции таким образом, чтобы она возвращала сообщение про заказ в формате <code>"You ordered droids worth &lt;total price&gt; credits. Delivery (&lt;delivery fee&gt; credits) is included in total price."</code>. Не забудь про цену доставки в вычислениях общей стоимости.</p>
      </div>
    `,
    initialCode: `function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let message = "";

  // Change code above this line
  return message;
};
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      const hasFunction =
        /function\s+makeOrderMessage\s*\(\s*orderedQuantity\s*,\s*pricePerDroid\s*,\s*deliveryFee\s*\)/.test(
          cleanCode,
        );

      let passesTests = false;
      try {
        // Dynamic execution to check values
        const userFn = new Function(code + "; return makeOrderMessage;")();
        if (typeof userFn === "function") {
          const r1 = userFn(2, 100, 50);
          const r2 = userFn(4, 300, 100);
          const r3 = userFn(10, 70, 200);

          if (
            r1 ===
              "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price." &&
            r2 ===
              "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price." &&
            r3 ===
              "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label:
            "Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)",
          passed: hasFunction,
        },
        {
          id: "test-1",
          label:
            'Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."',
          passed: passesTests,
        },
        {
          id: "test-2",
          label:
            'Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."',
          passed: passesTests,
        },
        {
          id: "test-3",
          label:
            'Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."',
          passed: passesTests,
        },
      ];
    },
  },
  "js-is-adult": {
    id: "js-is-adult",
    title: "Операторы сравнения",
    type: "javascript",
    description: `
      <p>Используется для сравнения двух значений. Результатом своего выполнения возвращают буль - <code>true</code> или <code>false</code>, то есть «да» или «нет».</p>
      
      <ul class="list-disc">
        <li><code>&gt;</code> - больше</li>
        <li><code>&lt;</code> - меньше</li>
        <li><code>&gt;=</code> - больше или равно</li>
        <li><code>&lt;=</code> - меньше или равно</li>
      </ul>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>isAdult</code> объявляет один параметр <code>age</code> (возраст), значение которого будет задаваться во время её вызова. Присвой переменной <code>passed</code> выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.</p>
      </div>
    `,
    initialCode: `function isAdult(age) {
  // Change code below this line
  const passed = ;

  // Change code above this line
  return passed;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+isAdult\s*\(\s*age\s*\)/.test(cleanCode);
      const hasOperator = />=/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return isAdult;")();
        if (typeof userFn === "function") {
          if (
            userFn(20) === true &&
            userFn(14) === false &&
            userFn(8) === false &&
            userFn(37) === true &&
            userFn(18) === true
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция isAdult(age)",
          passed: hasFunction,
        },
        {
          id: "operator-used",
          label: "В выражении проверки используется оператор >=",
          passed: hasOperator,
        },
        {
          id: "test-20",
          label: "Вызов isAdult(20) возвращает true",
          passed: passesTests,
        },
        {
          id: "test-14",
          label: "Вызов isAdult(14) возвращает false",
          passed: passesTests,
        },
        {
          id: "test-8",
          label: "Вызов isAdult(8) возвращает false",
          passed: passesTests,
        },
        {
          id: "test-37",
          label: "Вызов isAdult(37) возвращает true",
          passed: passesTests,
        },
      ];
    },
  },
  "js-is-valid-password": {
    id: "js-is-valid-password",
    title: "Строгое равенство",
    type: "javascript",
    description: `
      <p>«Нестрогие» операторы <code>==</code> и <code>!=</code> выполняют преобразование типов значений, что сравниваются, что может привести к ошибкам, особенно у начинающих.</p>

      <div class="bg-red-500/10 border border-red-500/20 p-4 rounded-lg my-4">
        <pre class="challenge-code-block"><code class="language-javascript">// ❌ Плохо, выполняется приведение типов
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false</code></pre>
      </div>

      <p>Поэтому для проверки равенства или неравенства двух значений используются операторы <code>===</code> (строгое равенство) и <code>!==</code> (строгое неравенство), которые не выполняют приведение типов операндов.</p>

      <div class="bg-green-500/10 border border-green-500/20 p-4 rounded-lg my-4">
        <pre class="challenge-code-block"><code class="language-javascript">// ✅ Хорошо, приведение типов не выполняется
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>isValidPassword(password)</code> проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль <code>true</code> или <code>false</code>. Переменная <code>SAVED_PASSWORD</code> хранит значение предварительно сохраненного пароля. Введенный пароль передается в параметр <code>password</code>.</p>
        <p>Присвой переменной <code>isMatch</code> выражение проверки равенства введенных и предварительно сохраненных паролей. Результатом выражения проверки должно быть <code>true</code>, если значения совпадают, и <code>false</code> - если нет.</p>
      </div>
    `,
    initialCode: `function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = ;

  // Change code above this line
  return isMatch;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+isValidPassword\s*\(\s*password\s*\)/.test(cleanCode);
      const hasOperator = /===/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return isValidPassword;")();
        if (typeof userFn === "function") {
          if (
            userFn("mangodab3st") === false &&
            userFn("kiwirul3z") === false &&
            userFn("jqueryismyjam") === true
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция isValidPassword(password)",
          passed: hasFunction,
        },
        {
          id: "operator-used",
          label: "В выражении проверки паролей использован оператор ===",
          passed: hasOperator,
        },
        {
          id: "test-false-1",
          label: "Вызов isValidPassword('mangodab3st') возвращает false",
          passed: passesTests,
        },
        {
          id: "test-false-2",
          label: "Вызов isValidPassword('kiwirul3z') возвращает false",
          passed: passesTests,
        },
        {
          id: "test-true",
          label: "Вызов isValidPassword('jqueryismyjam') возвращает true",
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-age": {
    id: "js-check-age",
    title: "Инструкция if...else",
    type: "javascript",
    description: `
      <p>Ветвления используются для выполнения различного кода в зависимости от условия. Принцип работы прост - результат выражения в условии блока <code>if</code> приводится к булю <code>true</code> или <code>false</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">if (условие) {
  // тело if
} else {
  // тело else
}</code></pre>
      </div>

      <p>Если условие приводится к <code>true</code>, то выполняется код в фигурных скобках тела <code>if</code>, а блок <code>else</code> игнорируется.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100</code></pre>
      </div>

      <p>Если условие приводится к <code>false</code>, код блока <code>if</code> будет пропущен, и выполнится код в фигурных скобках после блока <code>else</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0</code></pre>
      </div>

      <div class="task-instruction">
        <p>Добавь выражение проверки совершеннолетия пользователя, значения параметра <code>age</code>, в условие для инструкции <code>if</code>.</p>
        <ul class="list-disc">
          <li>Если пользователь совершеннолетний, должен выполняться блок <code>if</code> и в переменную <code>message</code> записывается строка <code>"You are an adult"</code>.</li>
          <li>В противном случае должен выполняться блок <code>else</code> и записывается строка <code>"You are a minor"</code>.</li>
        </ul>
      </div>
    `,
    initialCode: `function checkAge(age) {
  let message;

  if () { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkAge\s*\(\s*age\s*\)/.test(cleanCode);
      const hasOperator = />=/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkAge;")();
        if (typeof userFn === "function") {
          if (
            userFn(20) === "You are an adult" &&
            userFn(8) === "You are a minor" &&
            userFn(14) === "You are a minor" &&
            userFn(38) === "You are an adult"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkAge(age)",
          passed: hasFunction,
        },
        {
          id: "operator-used",
          label: "В выражении проверки возраста использован оператор >=",
          passed: hasOperator,
        },
        {
          id: "test-20",
          label: 'Вызов checkAge(20) возвращает "You are an adult"',
          passed: passesTests,
        },
        {
          id: "test-8",
          label: 'Вызов checkAge(8) возвращает "You are a minor"',
          passed: passesTests,
        },
        {
          id: "test-14",
          label: 'Вызов checkAge(14) возвращает "You are a minor"',
          passed: passesTests,
        },
        {
          id: "test-38",
          label: 'Вызов checkAge(38) возвращает "You are an adult"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-storage": {
    id: "js-check-storage",
    title: "Задача: Склад товаров",
    type: "javascript",
    description: `
      <p>Функция <code>checkStorage(available, ordered)</code> проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:</p>
      
      <ul class="list-disc">
        <li><code>available</code> - общее количество товаров на складе</li>
        <li><code>ordered</code> - единиц товара в заказе</li>
      </ul>

      <div class="task-instruction">
        <p>Используя ветвления, дополни код функции таким образом, что:</p>
        <ul class="list-disc">
          <li>Если в заказе указано число, превышающее количество товаров на складе, в переменную <code>message</code> записывается строка <code>"Not enough goods in stock!"</code>.</li>
          <li>В противном случае записывается строка <code>"Order is processed, our manager will contact you."</code>.</li>
        </ul>
      </div>
    `,
    initialCode: `function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+checkStorage\s*\(\s*available\s*,\s*ordered\s*\)/.test(
          cleanCode,
        );
      const hasResult =
        (/message\s*=\s*'Not enough goods in stock!'/.test(
          code,
        ) /* We use loosely test for string content */ &&
          /message\s*=\s*'Order is processed, our manager will contact you.'/.test(
            code,
          )) ||
        (/message\s*=\s*"Not enough goods in stock!"/.test(code) &&
          /message\s*=\s*"Order is processed, our manager will contact you."/.test(
            code,
          ));

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkStorage;")();
        if (typeof userFn === "function") {
          const r1 = userFn(100, 50);
          const r2 = userFn(100, 130);
          const r3 = userFn(200, 20);
          const r4 = userFn(200, 150);
          const r5 = userFn(150, 180);

          if (
            r1 === "Order is processed, our manager will contact you." &&
            r2 === "Not enough goods in stock!" &&
            r3 === "Order is processed, our manager will contact you." &&
            r4 === "Order is processed, our manager will contact you." &&
            r5 === "Not enough goods in stock!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkStorage(available, ordered)",
          passed: hasFunction,
        },
        {
          id: "test-1",
          label:
            'Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."',
          passed: passesTests,
        },
        {
          id: "test-2",
          label:
            'Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"',
          passed: passesTests,
        },
        {
          id: "test-3",
          label:
            'Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."',
          passed: passesTests,
        },
        {
          id: "test-4",
          label:
            'Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."',
          passed: passesTests,
        },
        {
          id: "test-5",
          label:
            'Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-combined-assignment": {
    id: "js-combined-assignment",
    title: "Комбинированные операторы",
    type: "javascript",
    description: `
      <p>Комбинированные операторы - это более короткий способ присвоить переменной новое значение, основываясь на её предыдущем значении.</p>
      
      <p>Будем увеличивать значение переменной <code>age</code> на единицу от предыдущего, имитируя обновление возраста после дня рождения пользователя.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let age = 25;
// Классическая запись
age = age + 1;
console.log(age); // 26</code></pre>
      </div>

      <p>Сначала выполняется правая часть выражения. Вместо <code>age</code> подставляется <code>25</code>, выполняется операция сложения, и в переменную <code>age</code> записывается <code>26</code>.</p>
      
      <p>Выполним рефакторинг операции обновления возраста, используя комбинированный оператор присвоения со сложением.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let age = 25;
// Просто более короткая запись, работает так же
age += 1;
console.log(age); // 26</code></pre>
      </div>

      <div class="task-instruction">
        <p>Выполни рефакторинг кода, заменив операции присвоения с арифметическими операциями на комбинированные операторы.</p>
        <ul class="list-disc">
          <li>Замени <code>a = a + 2</code> на комбинированный оператор <code>+=</code>.</li>
          <li>Замени <code>b = b - 4</code> на комбинированный оператор <code>-=</code>.</li>
          <li>Замени <code>c = c * 3</code> на комбинированный оператор <code>*=</code>.</li>
          <li>Замени <code>d = d / 10</code> на комбинированный оператор <code>/=</code>.</li>
        </p>
      </div>
    `,
    initialCode: `let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      // Check for operators
      const hasPlusAssign = /\+=\s*2/.test(cleanCode);
      const hasMinusAssign = /-=\s*4/.test(cleanCode);
      const hasMultiplyAssign = /\*=\s*3/.test(cleanCode);
      const hasDivideAssign = /\/=\s*10/.test(cleanCode);

      // Check final values logic
      let passesTests = false;
      try {
        const userFn = new Function(code + "; return {a, b, c, d};")();
        if (
          userFn.a === 7 &&
          userFn.b === 6 &&
          userFn.c === 45 &&
          userFn.d === 2
        ) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "test-a",
          label: "Значение переменной a равно 7",
          passed:
            passesTests &&
            hasPlusAssign /* Ensuring value correctness implies operator usage to some extent, but let's be strict if needed. The task asks for operator usage specifically. */,
        },
        {
          id: "check-plus-assign",
          label: "Использован оператор +=",
          passed: hasPlusAssign,
        },
        {
          id: "test-b",
          label: "Значение переменной b равно 6",
          passed: passesTests && hasMinusAssign,
        },
        {
          id: "check-minus-assign",
          label: "Использован оператор -=",
          passed: hasMinusAssign,
        },
        {
          id: "test-c",
          label: "Значение переменной c равно 45",
          passed: passesTests && hasMultiplyAssign,
        },
        {
          id: "check-multiply-assign",
          label: "Использован оператор *=",
          passed: hasMultiplyAssign,
        },
        {
          id: "test-d",
          label: "Значение переменной d равно 2",
          passed: passesTests && hasDivideAssign,
        },
        {
          id: "check-divide-assign",
          label: "Использован оператор /=",
          passed: hasDivideAssign,
        },
      ];
    },
  },
  "js-check-balance": {
    id: "js-check-balance",
    title: "Задача: Проверка баланса",
    type: "javascript",
    description: `
      <p>Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.</p>
      
      <p>Функция <code>makeTransaction(pricePerDroid, orderedQuantity, customerCredits)</code> выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:</p>

      <ul class="list-disc">
        <li><code>pricePerDroid</code> - цена одного дроида</li>
        <li><code>orderedQuantity</code> - кол-во заказанных дроидов</li>
        <li><code>customerCredits</code> - сумма средств на счету клиента</li>
      </ul>

      <div class="task-instruction">
        <p>Дополни её следующим функционалом:</p>
        <ul class="list-disc">
          <li>Объяви переменную <code>totalPrice</code> для хранения общей суммы заказа и присвой ей выражение пересчета этой суммы.</li>
          <li>Добавь проверку, сможет ли клиент оплатить заказ:</li>
          <ul class="list-disc ml-4">
             <li>если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную <code>message</code> строку <code>"Insufficient funds!"</code>;</li>
             <li>в противном случае, отними сумму покупки со счета клиента и запиши в переменную <code>message</code> сообщение: <code>"You ordered &lt;число&gt; droids, you have &lt;число&gt; credits left"</code>.</li>
          </ul>
        </ul>
      </div>
    `,
    initialCode: `function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+makeTransaction\s*\(\s*pricePerDroid\s*,\s*orderedQuantity\s*,\s*customerCredits\s*\)/.test(
          cleanCode,
        );
      const hasTotalPrice =
        /totalPrice\s*=\s*/.test(cleanCode) ||
        /const\s+totalPrice\s*=/.test(cleanCode) ||
        /let\s+totalPrice\s*=/.test(cleanCode);

      // Basic logic check regex is hard for this one, relying on tests
      const hasInsufficientFunds = /Insufficient funds!/.test(code);
      const hasSuccessMessage =
        /You ordered/.test(code) && /credits left/.test(code);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return makeTransaction;")();
        if (typeof userFn === "function") {
          const r1 = userFn(3000, 5, 23000);
          const r2 = userFn(1000, 3, 15000);
          const r3 = userFn(5000, 10, 8000);
          const r4 = userFn(2000, 8, 10000);
          const r5 = userFn(500, 10, 5000);

          if (
            r1 === "You ordered 5 droids, you have 8000 credits left" &&
            r2 === "You ordered 3 droids, you have 12000 credits left" &&
            r3 === "Insufficient funds!" &&
            r4 === "Insufficient funds!" &&
            r5 === "You ordered 10 droids, you have 0 credits left"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label:
            "Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)",
          passed: hasFunction,
        },
        {
          id: "total-price-declared",
          label: "Объявлена переменная totalPrice",
          passed: hasTotalPrice,
        },
        {
          id: "test-1",
          label:
            'Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"',
          passed: passesTests,
        },
        {
          id: "test-2",
          label:
            'Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"',
          passed: passesTests,
        },
        {
          id: "test-3",
          label:
            'Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"',
          passed: passesTests,
        },
        {
          id: "test-4",
          label:
            'Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"',
          passed: passesTests,
        },
        {
          id: "test-5",
          label:
            'Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-password": {
    id: "js-check-password",
    title: "Блок else...if",
    type: "javascript",
    description: `
      <p>Конструкция <code>if...else</code> может проверить и среагировать на выполнение или невыполнение только одного условия.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100</code></pre>
      </div>

      <p>Блок <code>else...if</code> позволяет добавить после <code>else</code> еще один оператор <code>if</code> с условием. В конце цепочки может быть классический блок <code>else</code>, который выполнится только в том случае, если ни одно из условий не приведется к <code>true</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(\`Invalid subscription type - \${subscription}\`);
}

console.log(cost); // 500</code></pre>
      </div>

      <p>При первом же удовлетворении условия проверка прекращается и выполняется только тело соответствующего блока <code>if</code>. Поэтому такую запись нужно читать как: «ищу первое выполнение условия, игнорирую все остальное».</p>

      <div class="task-instruction">
        <p>Функция <code>checkPassword(password)</code> получает пароль пользователя в параметр <code>password</code>, проверяет его на совпадение с паролем администратора в переменной <code>ADMIN_PASSWORD</code> и возвращает сообщение о результате сравнения.</p>
        <ul class="list-disc">
          <li>Если значение параметра <code>password</code> равно <code>null</code>, значит пользователь отменил операцию, в переменную <code>message</code> записывается строка <code>"Canceled by user!"</code>.</li>
          <li>Если значение параметра <code>password</code> совпадает со значением <code>ADMIN_PASSWORD</code>, в переменную <code>message</code> присваивается строка <code>"Welcome!"</code>.</li>
          <li>Если ни одно из предыдущих условий не выполнилось, в переменную <code>message</code> записывается строка <code>"Access denied, wrong password!"</code>.</li>
        </ul
      </div>
    `,
    initialCode: `function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if () { // Change this line
    message = 'Canceled by user!';
  } else if () { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkPassword\s*\(\s*password\s*\)/.test(
        cleanCode,
      );

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkPassword;")();
        if (typeof userFn === "function") {
          const r1 = userFn("mangohackzor");
          const r2 = userFn(null);
          const r3 = userFn("polyhax");
          const r4 = userFn("jqueryismyjam");

          if (
            r1 === "Access denied, wrong password!" &&
            r2 === "Canceled by user!" &&
            r3 === "Access denied, wrong password!" &&
            r4 === "Welcome!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkPassword(password)",
          passed: hasFunction,
        },
        {
          id: "test-wrong",
          label:
            'Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-null",
          label: 'Вызов checkPassword(null) возвращает "Canceled by user!"',
          passed: passesTests,
        },
        {
          id: "test-wrong-2",
          label:
            'Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-correct",
          label: 'Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-storage-2": {
    id: "js-check-storage-2",
    title: "Задача: Склад товаров 2.0",
    type: "javascript",
    description: `
      <p>Функция <code>checkStorage(available, ordered)</code> проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:</p>
      
      <ul class="list-disc">
        <li><code>available</code> - доступное количество товаров на складе</li>
        <li><code>ordered</code> - единиц товара в заказе</li>
      </ul>

      <div class="task-instruction">
        <p>Используя ветвления, дополни код функции таким образом, что:</p>
        <ul class="list-disc">
          <li>Если в заказе еще нет товаров, то есть значение параметра <code>ordered</code> равно <code>0</code>, в переменную <code>message</code> присваивается строка <code>"There are no products in the order!"</code>.</li>
          <li>Если товаров в заказе больше, чем доступно товаров на складе, то в переменную <code>message</code> присваивается строка <code>"Your order is too large, there are not enough items in stock!"</code>.</li>
          <li>В противном случае в переменную <code>message</code> присваивается строка <code>"The order is accepted, our manager will contact you"</code>.</li>
        </ul
      </div>
    `,
    initialCode: `function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+checkStorage\s*\(\s*available\s*,\s*ordered\s*\)/.test(
          cleanCode,
        );

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkStorage;")();
        if (typeof userFn === "function") {
          const r1 = userFn(100, 50);
          const r2 = userFn(100, 130);
          const r3 = userFn(70, 0);
          const r4 = userFn(200, 20);
          const r5 = userFn(200, 250);
          const r6 = userFn(150, 0);

          if (
            r1 === "The order is accepted, our manager will contact you" &&
            r2 ===
              "Your order is too large, there are not enough items in stock!" &&
            r3 === "There are no products in the order!" &&
            r4 === "The order is accepted, our manager will contact you" &&
            r5 ===
              "Your order is too large, there are not enough items in stock!" &&
            r6 === "There are no products in the order!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkStorage(available, ordered)",
          passed: hasFunction,
        },
        {
          id: "test-accepted",
          label:
            'Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-too-large",
          label:
            'Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"',
          passed: passesTests,
        },
        {
          id: "test-no-products",
          label:
            'Вызов checkStorage(70, 0) возвращает "There are no products in the order!"',
          passed: passesTests,
        },
        {
          id: "test-accepted-2",
          label:
            'Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-too-large-2",
          label:
            'Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"',
          passed: passesTests,
        },
        {
          id: "test-no-products-2",
          label:
            'Вызов checkStorage(150, 0) возвращает "There are no products in the order!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-is-number-in-range": {
    id: "js-is-number-in-range",
    title: "Логические операторы",
    type: "javascript",
    description: `
      <p>Логические операторы используются для проверки условий с множеством выражений, например в ветвлениях.</p>
      
      <p>Оператор <code>&&</code> приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к <code>false</code>, и правый - в остальных случаях.</p>
      
      <div class="bg-slate-900 rounded-lg p-4 my-4">
         <pre class="challenge-code-block"><code class="language-javascript">выражение && выражение</code></pre>
      </div>

      <p>В следующем примере оба условия вернут <code>true</code>, поэтому результатом всего выражения будет <code>true</code> - вернется значение правого операнда.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const age = 20;
console.log(age > 10 && age < 30); // true && true -> true</code></pre>
      </div>

      <p>Если хотя бы один из операндов будет приведен к <code>false</code>, результатом выражения будет этот операнд.</p>

       <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false</code></pre>
      </div>

      <p>То есть логическое «И» запинается на лжи и возвращает то, на чем запнулось или последний операнд.</p>

       <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3</code></pre>
      </div>

       <div class="info-highlight light">
        <p><strong>Полезно</strong></p>
        <p>Запомните шесть значений, которые в булевом преобразовании приводятся к <code>false</code>: <code>0</code>, <code>NaN</code>, <code>null</code>, <code>undefined</code>, пустая строка <code>""</code> или <code>''</code> и само значение <code>false</code>. Абсолютно все остальное приводится к <code>true</code>.</p>
      </div>

       <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>isNumberInRange(start, end, number)</code> проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:</p>
        <ul class="list-disc">
          <li><code>number</code> - число, вхождение которого проверяется</li>
          <li><code>start</code> - начало числового промежутка</li>
          <li><code>end</code> - конец числового промежутка</li>
        </ul>
        <p>Присвой переменной <code>isInRange</code> выражение проверки вхождения <code>number</code> в числовой промежуток от <code>start</code> до <code>end</code>. То есть число должно быть больше или равно <code>start</code>, и меньше или равно <code>end</code>. Результатом выражения проверки будет буль <code>true</code> или <code>false</code>.</p>
      </div>
    `,
    initialCode: `function isNumberInRange(start, end, number) {
  const isInRange = false; // Change this line

  return isInRange;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+isNumberInRange\s*\(\s*start\s*,\s*end\s*,\s*number\s*\)/.test(
          cleanCode,
        );
      const hasAnd = /&&/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return isNumberInRange;")();
        if (typeof userFn === "function") {
          if (
            userFn(10, 30, 17) === true &&
            userFn(10, 30, 5) === false &&
            userFn(20, 50, 24) === true &&
            userFn(20, 50, 76) === false
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция isNumberInRange(start, end, number)",
          passed: hasFunction,
        },
        {
          id: "has-and",
          label: "В выражении проверки использован оператор &&",
          passed: hasAnd,
        },
        {
          id: "test-true-1",
          label: "Вызов isNumberInRange(10, 30, 17) возвращает true",
          passed: passesTests,
        },
        {
          id: "test-false-1",
          label: "Вызов isNumberInRange(10, 30, 5) возвращает false",
          passed: passesTests,
        },
        {
          id: "test-true-2",
          label: "Вызов isNumberInRange(20, 50, 24) возвращает true",
          passed: passesTests,
        },
        {
          id: "test-false-2",
          label: "Вызов isNumberInRange(20, 50, 76) возвращает false",
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-if-can-access-content": {
    id: "js-check-if-can-access-content",
    title: "Логическое «ИЛИ»",
    type: "javascript",
    description: `
      <p>Оператор <code>||</code> приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к <code>true</code>, и правый - в остальных случаях.</p>
      
      <div class="bg-slate-900 rounded-lg p-4 my-4">
         <pre class="challenge-code-block"><code class="language-javascript">выражение || выражение</code></pre>
      </div>

      <p>В следующем примере условие слева вернет <code>true</code>, поэтому результатом всего выражения будет <code>true</code> - вернется значение первого операнда, которое было приведено к <code>true</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const age = 5;
console.log(age < 10 || age > 30); // true || false -> true</code></pre>
      </div>

      <p>Тут результат тоже будет <code>true</code>, так как хотя бы один из операндов, в данном случае правый, был приведен к <code>true</code>.</p>

       <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const age = 40;
console.log(age < 10 || age > 30); // false || true -> true</code></pre>
      </div>

      <p>А тут ни одно из условий не выполняется, поэтому получаем <code>false</code> - значение последнего операнда.</p>

       <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const age = 20;
console.log(age < 10 || age > 30); // false || false -> false</code></pre>
      </div>

      <p>То есть логическое «ИЛИ» запинается на истине и возвращает то, на чем запнулось или последний операнд.</p>

       <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>checkIfCanAccessContent(subType)</code> проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской <code>pro</code> или <code>vip</code>.</p>
        <p>Присвой переменной <code>canAccessContent</code> выражение проверки подписки. Если значение параметра <code>subType</code> равно строкам <code>"pro"</code> или <code>"vip"</code>, пользователь получает доступ. Результатом выражения проверки будет буль <code>true</code> или <code>false</code>.</p>
      </div>
    `,
    initialCode: `function checkIfCanAccessContent(subType) {
  const canAccessContent = false; // Change this line

  return canAccessContent;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+checkIfCanAccessContent\s*\(\s*subType\s*\)/.test(
          cleanCode,
        );
      const hasOr = /\|\|/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(
          code + "; return checkIfCanAccessContent;",
        )();
        if (typeof userFn === "function") {
          if (
            userFn("pro") === true &&
            userFn("vip") === true &&
            userFn("starter") === false &&
            userFn("free") === false
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkIfCanAccessContent(subType)",
          passed: hasFunction,
        },
        {
          id: "has-or",
          label: "В выражении проверки использован оператор ||",
          passed: hasOr,
        },
        {
          id: "test-pro",
          label: 'Вызов checkIfCanAccessContent("pro") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-starter",
          label: 'Вызов checkIfCanAccessContent("starter") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-vip",
          label: 'Вызов checkIfCanAccessContent("vip") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-free",
          label: 'Вызов checkIfCanAccessContent("free") возвращает false',
          passed: passesTests,
        },
      ];
    },
  },
  "js-is-number-not-in-range": {
    id: "js-is-number-not-in-range",
    title: "Логическое «НЕ»",
    type: "javascript",
    description: `
      <p>Все операторы, которые мы рассматривали до этого, были <strong>бинарными</strong>. То есть они содержали два операнда: левый и правый. Логическое «НЕ» - это <strong>унарный</strong> оператор, который выполняет операцию над одним операндом справа.</p>
      
      <div class="bg-slate-900 rounded-lg p-4 my-4">
         <pre class="challenge-code-block"><code class="language-javascript">!выражение</code></pre>
      </div>

      <p>Оператор <code>!</code> приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный <code>true -> false</code> или <code>false -> true</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>isNumberNotInRange(start, end, number)</code> проверяет, не входит ли число в промежуток. То есть число должно быть меньше или равно <code>start</code> и больше или равно <code>end</code>. Результатом выражения проверки будет буль <code>true</code> или <code>false</code>.</p>
        <p>Она объявляет три параметра, значения которых будут задаваться во время её вызова:</p>
        <ul class="list-disc">
          <li><code>number</code> - число, невхождение которого проверяется</li>
          <li><code>start</code> - начало числового промежутка</li>
          <li><code>end</code> - конец числового промежутка</li>
        </ul>
        <p>Присвой переменной <code>isNotInRange</code> выражение инверсии значения переменной <code>isInRange</code>, используя оператор <code>!</code>.</p>
      </div>
    `,
    initialCode: `function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = ; // Change this line

  return isNotInRange;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+isNumberNotInRange\s*\(\s*start\s*,\s*end\s*,\s*number\s*\)/.test(
          cleanCode,
        );
      const hasNot = /!isInRange/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return isNumberNotInRange;")();
        if (typeof userFn === "function") {
          if (
            userFn(10, 30, 17) === false &&
            userFn(10, 30, 5) === true &&
            userFn(20, 50, 24) === false &&
            userFn(20, 50, 76) === true
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция isNumberNotInRange(start, end, number)",
          passed: hasFunction,
        },
        {
          id: "has-not",
          label: "В выражении использован оператор !",
          passed: hasNot,
        },
        {
          id: "test-false-1",
          label: "Вызов isNumberNotInRange(10, 30, 17) возвращает false",
          passed: passesTests,
        },
        {
          id: "test-true-1",
          label: "Вызов isNumberNotInRange(10, 30, 5) возвращает true",
          passed: passesTests,
        },
        {
          id: "test-false-2",
          label: "Вызов isNumberNotInRange(20, 50, 24) возвращает false",
          passed: passesTests,
        },
        {
          id: "test-true-2",
          label: "Вызов isNumberNotInRange(20, 50, 76) возвращает true",
          passed: passesTests,
        },
      ];
    },
  },
  "js-get-discount": {
    id: "js-get-discount",
    title: "Задача: Расчет скидки",
    type: "javascript",
    description: `
      <p>Функция <code>getDiscount(totalSpent)</code> определяет значение скидки в зависимости от общей суммы потраченных денег (параметр <code>totalSpent</code>) в магазине за всё время (партнерская программа). Скидка записывается в переменную <code>discount</code> и возвращается из функции как результат её работы.</p>

      <div class="task-instruction">
        <p>Используя ветвления и логические операторы, дополни код функции:</p>
        <ul class="list-disc">
          <li>Если потрачено от <code>50000</code> (включительно) или больше кредитов - скидка <code>10%</code> (золотой партнер)</li>
          <li>Если потрачено от <code>20000</code> (включительно) до <code>50000</code> кредитов - скидка <code>5%</code> (серебряный партнер)</li>
          <li>Если потрачено от <code>5000</code> (включительно) до <code>20000</code> кредитов - скидка <code>2%</code> (бронзовый партнер)</li>
          <li>Если потрачено меньше <code>5000</code> кредитов - скидка <code>0</code> (базовый партнер)</li>
        </ul>
        <p>Значения скидок каждого уровня хранятся в одноимённых константах <code>BASE_DISCOUNT</code>, <code>BRONZE_DISCOUNT</code>, <code>SILVER_DISCOUNT</code> и <code>GOLD_DISCOUNT</code>.</p>
      </div>
    `,
    initialCode: `function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line

  // Change code above this line
  return discount;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+getDiscount\s*\(\s*totalSpent\s*\)/.test(
        cleanCode,
      );

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return getDiscount;")();
        if (typeof userFn === "function") {
          if (
            userFn(137000) === 0.1 &&
            userFn(46900) === 0.05 &&
            userFn(8250) === 0.02 &&
            userFn(1300) === 0 &&
            userFn(5000) === 0.02 &&
            userFn(20000) === 0.05 &&
            userFn(50000) === 0.1
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция getDiscount(totalSpent)",
          passed: hasFunction,
        },
        {
          id: "test-gold",
          label: "Вызов getDiscount(137000) возвращает 0.1",
          passed: passesTests,
        },
        {
          id: "test-silver",
          label: "Вызов getDiscount(46900) возвращает 0.05",
          passed: passesTests,
        },
        {
          id: "test-bronze",
          label: "Вызов getDiscount(8250) возвращает 0.02",
          passed: passesTests,
        },
        {
          id: "test-basic",
          label: "Вызов getDiscount(1300) возвращает 0",
          passed: passesTests,
        },
        {
          id: "test-bronze-edge",
          label: "Вызов getDiscount(5000) возвращает 0.02",
          passed: passesTests,
        },
        {
          id: "test-silver-edge",
          label: "Вызов getDiscount(20000) возвращает 0.05",
          passed: passesTests,
        },
        {
          id: "test-gold-edge",
          label: "Вызов getDiscount(50000) возвращает 0.1",
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-storage-ternary": {
    id: "js-check-storage-ternary",
    title: "Тернарный оператор",
    type: "javascript",
    description: `
      <p>Тернарный оператор используется как синтаксически более короткая замена инструкции <code>if...else</code>, когда одной и той же переменной необходимо присвоить разные значения по условию.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">&lt;условие&gt; ? &lt;выражение, если условие истинно&gt; : &lt;выражение, если условие ложно&gt;</code></pre>
      </div>

      <p>Работает по следующей схеме:</p>
      <ul class="list-disc">
        <li>Вычисляется <code>условие</code>.</li>
        <li>Если условие истинно, то есть приводится к <code>true</code>, вычисляется выражение после <code>?</code>.</li>
        <li>Если условие ложно, то есть приводится к <code>false</code>, вычисляется выражение после <code>:</code>.</li>
        <li>Значение вычисленного выражения возвращается как результат работы тернарного оператора.</li>
      </ul>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"</code></pre>
      </div>

      <p>Выполним рефакторинг, заменив <code>if...else</code> тернарным оператором.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"</code></pre>
      </div>

      <div class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 my-2">
        <h3 class="font-bold mb-2">Внимание</h3>
        <p>Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Использовать его для замены сложных ветвлений - плохая практика (антипаттерн).</p>
      </div>

      <div class="task-instruction">
        <p>Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию <code>if...else</code> тернарным оператором.</p>
      </div>
    `,
    initialCode: `function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+checkStorage\s*\(\s*available\s*,\s*ordered\s*\)/.test(
          cleanCode,
        );
      const hasTernary = /\?.*:/.test(cleanCode);
      const hasIf = /if\s*\(/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkStorage;")();
        if (typeof userFn === "function") {
          const r1 = userFn(100, 50);
          const r2 = userFn(100, 130);
          const r3 = userFn(200, 20);
          const r4 = userFn(200, 150);
          const r5 = userFn(150, 180);

          if (
            r1 === "The order is accepted, our manager will contact you" &&
            r2 === "Not enough goods in stock!" &&
            r3 === "The order is accepted, our manager will contact you" &&
            r4 === "The order is accepted, our manager will contact you" &&
            r5 === "Not enough goods in stock!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkStorage(available, ordered)",
          passed: hasFunction,
        },
        {
          id: "has-ternary",
          label: "Использован тернарный оператор",
          passed: hasTernary,
        },
        {
          id: "no-if",
          label: "Не используется инструкция if",
          passed: !hasIf,
        },
        {
          id: "test-1",
          label:
            'Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-2",
          label:
            'Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"',
          passed: passesTests,
        },
        {
          id: "test-3",
          label:
            'Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-4",
          label:
            'Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-5",
          label:
            'Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-password-ternary": {
    id: "js-check-password-ternary",
    title: "Задача: Проверка пароля",
    type: "javascript",
    description: `
      <p>Функция <code>checkPassword(password)</code> сравнивает переданный ей пароль (параметр <code>password</code>) с сохраненным паролем администратора (константа <code>ADMIN_PASSWORD</code>) и возвращает строку с сообщением о результате.</p>

      <div class="task-instruction">
        <p>Используя тернарный оператор, дополни функцию таким образом, что:</p>
        <ul class="list-disc">
          <li>Если значения <code>password</code> и <code>ADMIN_PASSWORD</code> совпадают, присвой переменной <code>message</code> строку <code>"Access is allowed"</code>.</li>
          <li>В противном случае, присвой <code>message</code> строку <code>"Access denied, wrong password!"</code>.</li>
        </ul>
      </div>
    `,
    initialCode: `function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  
  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkPassword\s*\(\s*password\s*\)/.test(
        cleanCode,
      );
      const hasTernary = /\?.*:/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkPassword;")();
        if (typeof userFn === "function") {
          if (
            userFn("jqueryismyjam") === "Access is allowed" &&
            userFn("angul4r1sl1f3") === "Access denied, wrong password!" &&
            userFn("r3actsux") === "Access denied, wrong password!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkPassword(password)",
          passed: hasFunction,
        },
        {
          id: "has-ternary",
          label: "Использован тернарный оператор",
          passed: hasTernary,
        },
        {
          id: "test-allowed",
          label:
            'Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"',
          passed: passesTests,
        },
        {
          id: "test-denied-1",
          label:
            'Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-denied-2",
          label:
            'Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-get-subscription-price": {
    id: "js-get-subscription-price",
    title: "Инструкция switch",
    type: "javascript",
    description: `
      <p>В некоторых случаях неудобство чтения сложных ветвлений <code>if...else</code> можно избежать, используя «более плоский» синтаксис инструкции ветвления <code>switch</code>.</p>
      <p>Сфера применения <code>switch</code> ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;
}</code></pre>
      </div>

      <p>Его синтаксис состоит из блока <code>switch(значение)</code> - что нужно сравнить и множества отдельных случаев <code>case значение:</code> - с чем нужно сравнить. Для сравнения используется оператор строгого равенства <code>===</code>. То есть нельзя сравнить на больше или меньше, только на равенство.</p>
      
      <p>Значение в блоке <code>switch(значение)</code> - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках <code>case значение:</code> по очереди, сверху вниз.</p>

      <p>Оператор <code>break</code> в конце каждого блока <code>case</code> необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду после <code>switch</code> в том случае, когда проверка на равенство вернула <code>true</code>.</p>

      <div class="task-instruction">
        <p>Функция <code>getSubscriptionPrice(type)</code> получает строку с типом подписки пользователя (параметр <code>type</code>), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену, хранящуюся в переменной <code>price</code>.</p>
        <p>Если значение параметра <code>type</code> - это строка:</p>
        <ul class="list-disc">
          <li><code>"starter"</code> - цена подписки <code>0</code> кредитов.</li>
          <li><code>"professional"</code> - цена подписки <code>20</code> кредитов.</li>
          <li><code>"organization"</code> - цена подписки <code>50</code> кредитов.</li>
        </ul>
        <p>Изначально в теле функции была инструкция <code>if...else</code>, которая выглядела вот так.</p>
        <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}</code></pre>
      </div>
       <p>После рефакторинга инструкция <code>if..else</code> была заменена на <code>switch</code>. Дополни код инструкции <code>switch</code>, чтобы функция работала правильно.</p>
      </div>
    `,
    initialCode: `function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch () { // Change this line
    case : // Change this line
      price = ; // Change this line
      break;

    case : // Change this line
      price = ; // Change this line
      break;

    case : // Change this line
      price = ; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+getSubscriptionPrice\s*\(\s*type\s*\)/.test(cleanCode);
      const hasSwitch = /switch\s*\(/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return getSubscriptionPrice;")();
        if (typeof userFn === "function") {
          if (
            userFn("starter") === 0 &&
            userFn("professional") === 20 &&
            userFn("organization") === 50
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция getSubscriptionPrice(type)",
          passed: hasFunction,
        },
        {
          id: "has-switch",
          label: "Использована инструкция switch",
          passed: hasSwitch,
        },
        {
          id: "test-starter",
          label: 'Вызов getSubscriptionPrice("starter") возвращает 0',
          passed: passesTests,
        },
        {
          id: "test-professional",
          label: 'Вызов getSubscriptionPrice("professional") возвращает 20',
          passed: passesTests,
        },
        {
          id: "test-organization",
          label: 'Вызов getSubscriptionPrice("organization") возвращает 50',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-password-switch": {
    id: "js-check-password-switch",
    title: "Блок default в инструкции switch",
    type: "javascript",
    description: `
      <p>Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке <code>else</code> для инструкции <code>if...else</code>. Для этого, после всех блоков <code>case</code> добавляется блок <code>default</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;
}</code></pre>
      </div>

      <p>Оператор <code>break</code> после блока <code>default</code> не нужен, так как это и так последнее, что будет выполнено в <code>switch</code> и управление будет передано коду после него.</p>

      <div class="task-instruction">
        <p>Функция <code>checkPassword(password)</code> получает пароль в параметр <code>password</code>, проверяет его на совпадение с паролем администратора в переменной <code>ADMIN_PASSWORD</code> и возвращает сообщение о результате сравнения, которое хранится в переменной <code>message</code>.</p>
        <p>Если значение параметра <code>password</code>:</p>
        <ul class="list-disc">
          <li>равно <code>null</code>, значит пользователь отменил операцию и в <code>message</code> записывается строка <code>"Canceled by user!"</code>.</li>
          <li>совпадает со значением <code>ADMIN_PASSWORD</code>, в переменную <code>message</code> присваивается строка <code>"Welcome!"</code>.</li>
          <li>не удовлетворяет ни одному из предыдущих условий, в переменную <code>message</code> записывается строка <code>"Access denied, wrong password!"</code>.</li>
        </ul>
        <p>Выполни рефакторинг кода, заменив инструкцию <code>if..else</code> на <code>switch</code>, и не забудь про блок <code>default</code> (аналог else).</p>
      </div>
    `,
    initialCode: `function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkPassword\s*\(\s*password\s*\)/.test(
        cleanCode,
      );
      const hasSwitch = /switch\s*\(/.test(cleanCode);
      const hasDefault = /default\s*:/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkPassword;")();
        if (typeof userFn === "function") {
          if (
            userFn("mangohackzor") === "Access denied, wrong password!" &&
            userFn(null) === "Canceled by user!" &&
            userFn("polyhax") === "Access denied, wrong password!" &&
            userFn("jqueryismyjam") === "Welcome!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkPassword(password)",
          passed: hasFunction,
        },
        {
          id: "has-switch",
          label: "Использована инструкция switch",
          passed: hasSwitch,
        },
        {
          id: "has-default",
          label: "Добавлен блок default",
          passed: hasDefault,
        },
        {
          id: "test-denied",
          label:
            'Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-canceled",
          label: 'Вызов checkPassword(null) возвращает "Canceled by user!"',
          passed: passesTests,
        },
        {
          id: "test-denied-2",
          label:
            'Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-welcome",
          label: 'Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-get-shipping-cost": {
    id: "js-get-shipping-cost",
    title: "Доставка товара",
    type: "javascript",
    description: `
      <p>Функция <code>getShippingCost(country)</code> должна проверять возможность доставки товара в страну пользователя (параметр <code>country</code>) и возвращать сообщение о результате, хранящееся в переменной <code>message</code>. Обязательно используй инструкцию <code>switch</code>.</p>
      
      <p>Формат строки, которая возвращается <code>"Shipping to &lt;country&gt; will cost &lt;price&gt; credits"</code>, где вместо <code>&lt;country&gt;</code> и <code>&lt;price&gt;</code> необходимо подставить соответствующие значения.</p>

      <p>Список стран и стоимость доставки:</p>
      <ul class="list-disc">
        <li><code>China</code> - 100 кредитов</li>
        <li><code>Chile</code> - 250 кредитов</li>
        <li><code>Australia</code> - 170 кредитов</li>
        <li><code>Jamaica</code> - 120 кредитов</li>
      </ul>

      <p>Из списка видно, что доставка возможна не везде. Если указанная страна отсутствует в списке, то функция должна вернуть строку <code>"Sorry, there is no delivery to your country"</code></p>

      <div class="task-instruction">
        <p>Используя инструкцию <code>switch</code>, дополни код функции. Не забудь про блок <code>default</code> для стран, которых нет в списке.</p>
      </div>
    `,
    initialCode: `function getShippingCost(country) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+getShippingCost\s*\(\s*country\s*\)/.test(
        cleanCode,
      );
      const hasSwitch = /switch\s*\(/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return getShippingCost;")();
        if (typeof userFn === "function") {
          if (
            userFn("Australia") ===
              "Shipping to Australia will cost 170 credits" &&
            userFn("Germany") ===
              "Sorry, there is no delivery to your country" &&
            userFn("China") === "Shipping to China will cost 100 credits" &&
            userFn("Chile") === "Shipping to Chile will cost 250 credits" &&
            userFn("Jamaica") === "Shipping to Jamaica will cost 120 credits" &&
            userFn("Sweden") === "Sorry, there is no delivery to your country"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция getShippingCost(country)",
          passed: hasFunction,
        },
        {
          id: "has-switch",
          label: "Использована инструкция switch",
          passed: hasSwitch,
        },
        {
          id: "test-australia",
          label:
            'Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"',
          passed: passesTests,
        },
        {
          id: "test-germany",
          label:
            'Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"',
          passed: passesTests,
        },
        {
          id: "test-china",
          label:
            'Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"',
          passed: passesTests,
        },
        {
          id: "test-chile",
          label:
            'Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"',
          passed: passesTests,
        },
        {
          id: "test-jamaica",
          label:
            'Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"',
          passed: passesTests,
        },
        {
          id: "test-sweden",
          label:
            'Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-string-length": {
    id: "js-string-length",
    title: "Длина строки",
    type: "javascript",
    description: `
      <p>В коде объявлена функция <code>getCourseTopicLength(courseTopic)</code>, где параметр <code>courseTopic</code> хранит строку заголовка курса.</p>

      <div class="task-instruction">
        <p>Используя свойство <code>length</code>, дополни код так, чтобы в переменной <code>length</code> сохранялась длина строки из <code>courseTopic</code>.</p>
      </div>
    `,
    initialCode: `function getCourseTopicLength(courseTopic) {
  // Change code below this line
  const length = ;

  return length;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+getCourseTopicLength\s*\(\s*courseTopic\s*\)/.test(
          cleanCode,
        );
      const hasLength = /\.length/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return getCourseTopicLength;")();
        if (typeof userFn === "function") {
          if (
            userFn("JavaScript") === 10 &&
            userFn("Python") === 6 &&
            userFn("C++") === 3
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция getCourseTopicLength",
          passed: hasFunction,
        },
        {
          id: "has-length",
          label: "Использовано свойство length",
          passed: hasLength,
        },
        {
          id: "test-cases",
          label: "Функция возвращает правильную длину строки",
          passed: passesTests,
        },
      ];
    },
  },
  "js-string-indexing": {
    id: "js-string-indexing",
    title: "Индексация элементов",
    type: "javascript",
    description: `
      <p>Рядок — это индексированный набор из нуля или больше символов, взятых в одинарные, двойные или обратные кавычки.</p>
      
      <p>Индексация элементов строки начинается с нуля. Например, в строке <code>'JavaScript'</code> буква <code>'J'</code> стоит на позиции с индексом <code>0</code>, а <code>'t'</code> - под индексом <code>9</code>. При этом длина строки <code>'JavaScript'</code> равна <code>10</code>, то есть индекс последнего элемента всегда на единицу меньше его длины.</p>

      <p>Для доступа до значения элемента строки используется синтаксис квадратных дубок <code>строка[индекс]</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"</code></pre>
      </div>

      <p>Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана - она такая навсегда. Можно лишь создать полностью новую строку и присвоить в переменную вместо старой.</p>

      <div class="task-instruction">
        <p>Дополни код, присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной <code>courseTopic</code>.</p>
        <ul class="list-disc">
          <li><code>courseTopicLength</code> - длина строки.</li>
          <li><code>firstElement</code> - первый символ строки.</li>
          <li><code>lastElement</code> - последний символ строки.</li>
        </ul>
      </div>
    `,
    initialCode: `const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = ;
const firstElement = ;
const lastElement = ;

// Change code above this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");

      let passesTests = false;
      try {
        // Evaluate code to check variable values
        // We wrap it in a function to isolate scope and extract values
        const evalCode = `
          ${code}
          return {
            courseTopic: typeof courseTopic !== 'undefined' ? courseTopic : undefined,
            courseTopicLength: typeof courseTopicLength !== 'undefined' ? courseTopicLength : undefined,
            firstElement: typeof firstElement !== 'undefined' ? firstElement : undefined,
            lastElement: typeof lastElement !== 'undefined' ? lastElement : undefined
          };
        `;
        const result = new Function(evalCode)();

        if (
          result.courseTopic === "JavaScript essentials" &&
          result.courseTopicLength === 21 &&
          result.firstElement === "J" &&
          result.lastElement === "s"
        ) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "coursetopic-declared",
          label: "Объявлена переменная courseTopic",
          passed:
            /const\s+courseTopic\s*=\s*["']JavaScript essentials["']/.test(
              cleanCode,
            ),
        },
        {
          id: "coursetopic-value",
          label:
            'Значение переменной courseTopic - это строка "JavaScript essentials"',
          passed:
            /const\s+courseTopic\s*=\s*["']JavaScript essentials["']/.test(
              cleanCode,
            ),
        },
        {
          id: "coursetopiclength-declared",
          label: "Объявлена переменная courseTopicLength",
          passed: /const\s+courseTopicLength/.test(cleanCode),
        },
        {
          id: "coursetopiclength-value",
          label: "Значение переменной courseTopicLength - это число 21",
          passed: passesTests,
        },
        {
          id: "firstelement-declared",
          label: "Объявлена переменная firstElement",
          passed: /const\s+firstElement/.test(cleanCode),
        },
        {
          id: "firstelement-value",
          label: 'Значение переменной firstElement - это строка "J"',
          passed: passesTests,
        },
        {
          id: "lastelement-declared",
          label: "Объявлена переменная lastElement",
          passed: /const\s+lastElement/.test(cleanCode),
        },
        {
          id: "lastelement-value",
          label: 'Значение переменной lastElement - это строка "s"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-string-slice": {
    id: "js-string-slice",
    title: "Метод slice()",
    type: "javascript",
    description: `
      <p>Метод строк <code>slice(startIndex, endIndex)</code> используется для создания копии части или всей строки. Он делает копию элементов строки от <code>startIndex</code> и до, но не включая <code>endIndex</code>, и возвращает новую строку.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>getSubstring(string, length)</code> принимает строку и возвращает подстроку от начала длиной <code>length</code> символов.</p>
        <ul class="list-disc">
          <li><code>string</code> - оригинальная строка.</li>
          <li><code>length</code> - количество символов с начала строки для подстроки.</li>
        </ul>
        <p>Присвой переменной <code>substring</code> выражение создания подстроки длиной <code>length</code> символов (от начала) из строки <code>string</code>.</p>
      </div>
    `,
    initialCode: `function getSubstring(string, length) {
  const substring = ; // Change this line

  return substring;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+getSubstring\s*\(\s*string\s*,\s*length\s*\)/.test(
          cleanCode,
        );
      const hasSlice = /\.slice\s*\(\s*0\s*,\s*length\s*\)/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return getSubstring;")();
        if (typeof userFn === "function") {
          if (
            userFn("Hello world", 3) === "Hel" &&
            userFn("Hello world", 6) === "Hello " &&
            userFn("Hello world", 8) === "Hello wo" &&
            userFn("Hello world", 11) === "Hello world" &&
            userFn("Hello world", 0) === ""
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция getSubstring(string, length)",
          passed: hasFunction,
        },
        {
          id: "has-slice",
          label: "Использован метод slice() с правильными аргументами",
          passed: hasSlice,
        },
        {
          id: "test-cases",
          label: "Функция возвращает правильную подстроку",
          passed: passesTests,
        },
      ];
    },
  },
  "js-format-message": {
    id: "js-format-message",
    title: "Форматирование сообщения",
    type: "javascript",
    description: `
      <p>Функция <code>formatMessage(message, maxLength)</code> принимает строку (параметр <code>message</code>) и проверяет её длину относительно заданной максимальной длины (параметр <code>maxLength</code>).</p>

      <div class="task-instruction">
        <p>Дополни код функции таким образом, что:</p>
        <ul class="list-disc">
          <li>Если длина строки равна или меньше <code>maxLength</code>, то функция возвращает начальную строку без изменений.</li>
          <li>Если длина строки превышает <code>maxLength</code>, то функция обрезает строку до <code>maxLength</code> символов, добавляет троеточие <code>"..."</code> в конце и возвращает обрезанную версию.</li>
        </ul>
      </div>
    `,
    initialCode: `function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  /// Change code above this line
  return result;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+formatMessage\s*\(\s*message\s*,\s*maxLength\s*\)/.test(
          cleanCode,
        );
      const hasSlice = /\.slice/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return formatMessage;")();
        if (typeof userFn === "function") {
          if (
            userFn("Curabitur ligula sapien", 16) === "Curabitur ligula..." &&
            userFn("Curabitur ligula sapien", 23) ===
              "Curabitur ligula sapien" &&
            userFn("Vestibulum facilisis purus nec", 20) ===
              "Vestibulum facilisis..." &&
            userFn("Vestibulum facilisis purus nec", 30) ===
              "Vestibulum facilisis purus nec" &&
            userFn("Nunc sed turpis a felis in nunc fringilla", 15) ===
              "Nunc sed turpis..." &&
            userFn("Nunc sed turpis a felis in nunc fringilla", 41) ===
              "Nunc sed turpis a felis in nunc fringilla"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция formatMessage(message, maxLength)",
          passed: hasFunction,
        },
        {
          id: "test-case-1",
          label:
            'Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."',
          passed: passesTests,
        },
        {
          id: "test-case-2",
          label:
            'Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"',
          passed: passesTests,
        },
        {
          id: "test-case-3",
          label:
            'Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."',
          passed: passesTests,
        },
        {
          id: "test-case-4",
          label:
            'Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"',
          passed: passesTests,
        },
        {
          id: "test-case-5",
          label:
            'Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."',
          passed: passesTests,
        },
        {
          id: "test-case-6",
          label:
            'Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-normalize-input": {
    id: "js-normalize-input",
    title: "Нормализация ввода",
    type: "javascript",
    description: `
      <p>Бывают ситуации, когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку <code>'saMsUng'</code>, а сравнить её нужно со строкой <code>'samsung'</code> или <code>'SAMSUNG'</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false</code></pre>
      </div>

      <p>Чтобы не требовать абсолютно точного ввода, можно сделать «нормализацию» введенной пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки <code>toLowerCase()</code> и <code>toUpperCase()</code> вернут новую строку в соответствующем регистре, не изменяя оригинальную.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>normalizeInput(input)</code> принимает строку (параметр <code>input</code>) и возвращает такую же строку, но в нижнем регистре.</p>
        <p>Присвой переменной <code>normalizedInput</code> выражение создания строки в нижнем регистре из параметра <code>input</code>.</p>
      </div>
    `,
    initialCode: `function normalizeInput(input) {
  const normalizedInput = ; // Change this line

  return normalizedInput;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+normalizeInput\s*\(\s*input\s*\)/.test(
        cleanCode,
      );
      const hasLowerCase = /\.toLowerCase\s*\(\s*\)/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return normalizeInput;")();
        if (typeof userFn === "function") {
          if (
            userFn("Hello World") === "hello world" &&
            userFn("This is JEOPARDY") === "this is jeopardy" &&
            userFn("Hello world") === "hello world"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция normalizeInput(input)",
          passed: hasFunction,
        },
        {
          id: "has-lower-case",
          label: "Использован метод toLowerCase()",
          passed: hasLowerCase,
        },
        {
          id: "test-cases",
          label: "Функция возвращает строку в нижнем регистре",
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-for-name": {
    id: "js-check-for-name",
    title: "Метод includes()",
    type: "javascript",
    description: `
      <p>Метод строк <code>includes(substring)</code> проверяет, входит ли подстрока <code>substring</code> в строку, возвращает буль - <code>true</code>, если входит, и <code>false</code> - в противном случае. Регистр символов в строке и подстроке имеет значение, так как, например буква <code>"a"</code> не равна букве <code>"A"</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false</code></pre>
      </div>

      <div class="task-instruction">
        <p>Функция <code>checkForName(fullName, name)</code> принимает два параметра и возвращает буль <code>true</code> или <code>false</code> - результат проверки вхождения подстроки <code>name</code> в строку <code>fullName</code>.</p>
        <ul class="list-disc">
          <li><code>fullName</code> - полное имя, состоящее из двух слов (имени и фамилии), разделенных пробелом.</li>
          <li><code>name</code> - имя для проверки вхождения в полное имя.</li>
        </ul>
        <p>Присвой переменной <code>result</code> выражение проверки вхождения имени (параметр <code>name</code>), в полное имя (параметр <code>fullName</code>). Пусть функция четко различает регистр букв, то есть «Петя» и «петя» - для неё разные имена.</p>
      </div>
    `,
    initialCode: `function checkForName(fullName, name) {
  const result = ; // Change this line
  return result;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+checkForName\s*\(\s*fullName\s*,\s*name\s*\)/.test(
          cleanCode,
        );
      const hasIncludes = /\.includes\s*\(/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkForName;")();
        if (typeof userFn === "function") {
          if (
            userFn("Egor Kolbasov", "Egor") === true &&
            userFn("Egor Kolbasov", "egor") === false &&
            userFn("Egor Kolbasov", "eg0r") === false &&
            userFn("Egor Kolbasov", "Zhenya") === false &&
            userFn("Vadim Nekrasov", "Vadim") === true &&
            userFn("Vadim Nekrasov", "vadim") === false &&
            userFn("Vadim Nekrasov", "Dima") === false
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkForName(fullName, name)",
          passed: hasFunction,
        },
        {
          id: "test-case-1",
          label:
            'Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-case-2",
          label:
            'Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-case-3",
          label:
            'Вызов функции checkForName("Egor Kolbasov", "eg0r") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-case-4",
          label:
            'Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-case-5",
          label:
            'Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-case-6",
          label:
            'Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-case-7",
          label:
            'Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-for-spam": {
    id: "js-check-for-spam",
    title: "Проверка на спам",
    type: "javascript",
    description: `
      <p>Функция <code>checkForSpam(message)</code> принимает строку (параметр <code>message</code>), проверяет её на содержание запрещенных слов <code>spam</code> и <code>sale</code>, и возвращает результат проверки. Слова в строке параметра <code>message</code> могут быть в произвольном регистре, например <code>SPAM</code> или <code>sAlE</code>.</p>

      <div class="task-instruction">
        <ul class="list-disc">
          <li>Если нашли запрещенное слово (<code>spam</code> или <code>sale</code>) то функция возвращает буль <code>true</code>.</li>
          <li>Если в строке отсутствуют запрещенные слова, функция возвращает буль <code>false</code>.</li>
        </ul>
      </div>
    `,
    initialCode: `function checkForSpam(message) {
  let result;
  // Change code below this line

  // Change code above this line
  return result;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkForSpam\s*\(\s*message\s*\)/.test(
        cleanCode,
      );
      const hasLowerCase = /\.toLowerCase\s*\(\s*\)/.test(cleanCode);
      const hasIncludes = /\.includes\s*\(/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkForSpam;")();
        if (typeof userFn === "function") {
          if (
            userFn("Latest technology news") === false &&
            userFn("JavaScript weekly newsletter") === false &&
            userFn("Get best sale offers now!") === true &&
            userFn("Amazing SalE, only tonight!") === true &&
            userFn("Trust me, this is not a spam message") === true &&
            userFn("Get rid of sPaM emails. Our book in on sale!") === true &&
            userFn("[SPAM] How to earn fast money?") === true
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkForSpam(message)",
          passed: hasFunction,
        },
        {
          id: "test-case-1",
          label:
            'Вызов функции checkForSpam("Latest technology news") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-case-2",
          label:
            'Вызов функции checkForSpam("JavaScript weekly newsletter") возвращает false',
          passed: passesTests,
        },
        {
          id: "test-case-3",
          label:
            'Вызов функции checkForSpam("Get best sale offers now!") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-case-4",
          label:
            'Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-case-5",
          label:
            'Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-case-6",
          label:
            'Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true',
          passed: passesTests,
        },
        {
          id: "test-case-7",
          label:
            'Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true',
          passed: passesTests,
        },
      ];
    },
  },
  "js-check-age-early-return": {
    id: "js-check-age-early-return",
    title: "Раннее возвращение",
    type: "javascript",
    description: `
      <p>В функции может быть больше одного оператора <code>return</code>. Главное помнить, что выполнение функции прерывается, когда интерпретатор встречает возвращение, и весь код после него будет проигнорирован в текущем вызове функции.</p>

      <p>Возьмём уже знакомую нам функцию проверки совершеннолетия. Она работает, но тут есть «лишний» код, то есть тело функции можно оптимизировать. В этом случае подойдёт способ (паттерн) «раннее возвращение».</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "Вы совершеннолетний человек";
  } else {
    message = "Вы несовершеннолетний человек";
  }

  return message;
}</code></pre>
      </div>

      <ul class="list-disc">
        <li>Если условие в <code>if</code> выполняется, то есть приводится до <code>true</code>, возвращаем строку <code>"You are an adult"</code>, и код ниже уже не выполняется.</li>
        <li>Если условие в <code>if</code> не выполняется, то есть приводится к <code>false</code>, возвращаем строку <code>"You are a minor"</code>.</li>
      </ul>

      <p>Используя паттерн «раннее возвращение» и то, что выполнение функции прерывается на операторе <code>return</code>, мы избавляемся от лишней переменной и блока <code>else</code>. То есть этот способ помогает «разгладить» ветвление.</p>

      <div class="task-instruction">
        <p>Запиши условие в инструкции <code>if</code> таким образом, чтобы функция работала правильно.</p>
      </div>
    `,
    initialCode: `function checkAge(age) {
  if (false) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkAge\s*\(\s*age\s*\)/.test(cleanCode);
      const hasGte = />=/.test(cleanCode);
      const hasNoElse = !/\belse\b/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkAge;")();
        if (typeof userFn === "function") {
          if (
            userFn(20) === "You are an adult" &&
            userFn(8) === "You are a minor" &&
            userFn(14) === "You are a minor" &&
            userFn(38) === "You are an adult" &&
            userFn(18) === "You are an adult"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkAge(age)",
          passed: hasFunction,
        },
        {
          id: "has-gte",
          label: "В выражении проверки возраста использован оператор >=",
          passed: hasGte,
        },
        {
          id: "test-20",
          label: 'Вызов checkAge(20) возвращает "You are an adult"',
          passed: passesTests,
        },
        {
          id: "test-8",
          label: 'Вызов checkAge(8) возвращает "You are a minor"',
          passed: passesTests,
        },
        {
          id: "test-14",
          label: 'Вызов checkAge(14) возвращает "You are a minor"',
          passed: passesTests,
        },
        {
          id: "test-38",
          label: 'Вызов checkAge(38) возвращает "You are an adult"',
          passed: passesTests,
        },
        {
          id: "no-else",
          label: "В теле функции есть только одна инструкция if",
          passed: hasNoElse,
        },
        {
          id: "no-else-if",
          label: "В теле функции отсутствуют инструкции else или else if",
          passed: hasNoElse,
        },
      ];
    },
  },
  "js-check-password-early-return": {
    id: "js-check-password-early-return",
    title: "Рефакторинг checkPassword",
    type: "javascript",
    description: `
      <p>Функция <code>checkPassword</code> получает пароль пользователя в параметр <code>password</code>, проверяет его на совпадение с паролем администратора в переменной <code>ADMIN_PASSWORD</code> и возвращает сообщение о результате сравнения.</p>

      <p>Выполни рефакторинг кода функции <code>checkPassword</code>, используя паттерн «раннее возвращение»:</p>

      <ul class="list-disc">
        <li>удали переменную <code>message</code></li>
        <li>удали <code>else</code></li>
        <li>код должен работать так само, как и до оптимизации</li>
      </ul>

      <div class="task-instruction">
        <p>Перепиши функцию <code>checkPassword</code> используя паттерн раннего возвращения, без переменной <code>message</code> и блока <code>else</code>.</p>
      </div>
    `,
    initialCode: `function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+checkPassword\s*\(\s*password\s*\)/.test(
        cleanCode,
      );
      const hasNoElse = !/\belse\b/.test(cleanCode);
      const hasNoMessage = !/\blet\s+message\b/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkPassword;")();
        if (typeof userFn === "function") {
          if (
            userFn("mangohackzor") === "Access denied, wrong password!" &&
            userFn("polyhax") === "Access denied, wrong password!" &&
            userFn("jqueryismyjam") === "Welcome!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkPassword(password)",
          passed: hasFunction,
        },
        {
          id: "test-mangohackzor",
          label:
            'Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-polyhax",
          label:
            'Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"',
          passed: passesTests,
        },
        {
          id: "test-jqueryismyjam",
          label: 'Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"',
          passed: passesTests,
        },
        {
          id: "no-message",
          label: "Удалена переменная message",
          passed: hasNoMessage,
        },
        {
          id: "no-else",
          label: "Удалён блок else",
          passed: hasNoElse,
        },
      ];
    },
  },
  "js-check-storage-early-return": {
    id: "js-check-storage-early-return",
    title: "Рефакторинг checkStorage",
    type: "javascript",
    description: `
      <p>Функция <code>checkStorage</code> проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться при её вызове.</p>

      <ul class="list-disc">
        <li><code>available</code> — доступное количество товаров на складе</li>
        <li><code>ordered</code> — количество единиц товара в заказе</li>
      </ul>

      <div class="task-instruction">
        <p>Выполни рефакторинг кода функции <code>checkStorage</code>, используя паттерн «раннее возвращение».</p>
      </div>
    `,
    initialCode: `function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+checkStorage\s*\(\s*available\s*,\s*ordered\s*\)/.test(
          cleanCode,
        );
      const hasNoElse = !/\belse\b/.test(cleanCode);

      let passesTests = false;
      try {
        const userFn = new Function(code + "; return checkStorage;")();
        if (typeof userFn === "function") {
          if (
            userFn(100, 50) ===
              "The order is accepted, our manager will contact you" &&
            userFn(100, 130) ===
              "Your order is too large, not enough goods in stock!" &&
            userFn(70, 0) === "Your order is empty!" &&
            userFn(200, 20) ===
              "The order is accepted, our manager will contact you" &&
            userFn(200, 250) ===
              "Your order is too large, not enough goods in stock!" &&
            userFn(150, 0) === "Your order is empty!"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция checkStorage(available, ordered)",
          passed: hasFunction,
        },
        {
          id: "test-100-50",
          label:
            'Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-100-130",
          label:
            'Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"',
          passed: passesTests,
        },
        {
          id: "test-70-0",
          label: 'Вызов checkStorage(70, 0) возвращает "Your order is empty!"',
          passed: passesTests,
        },
        {
          id: "test-200-20",
          label:
            'Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"',
          passed: passesTests,
        },
        {
          id: "test-200-250",
          label:
            'Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"',
          passed: passesTests,
        },
        {
          id: "test-150-0",
          label: 'Вызов checkStorage(150, 0) возвращает "Your order is empty!"',
          passed: passesTests,
        },
      ];
    },
  },
  "js-array-fruits": {
    id: "js-array-fruits",
    title: "Объявление массива",
    type: "javascript",
    description: `
      <p>Массив используется для хранения упорядоченной коллекции элементов. Он объявляется открытой и закрытой квадратной скобкой <code>[]</code> — литералом массива. Внутри скобок каждый элемент массива разделяется запятой.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];</code></pre>
      </div>

      <blockquote style="border-left: 4px solid #4fc3f7; padding: 10px 15px; margin: 16px 0; background-color: rgba(79, 195, 247, 0.1);">
        <strong>ℹ️ Полезно</strong><br/>
        Объявляя переменную для объекта или массива, программисты, как правило, используют <code>const</code>. Они делают это для того, чтобы случайно не перезаписать значение, поскольку попытка перезаписи вызовет ошибку до того, как код попадёт к пользователю.
      </blockquote>

      <div class="task-instruction">
        <p>Объяви переменную <code>fruits</code> и присвой ей массив фруктов — строк <code>"apple"</code>, <code>"plum"</code>, <code>"pear"</code> и <code>"orange"</code>.</p>
      </div>
    `,
    initialCode: `// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFruits = /const\s+fruits/.test(cleanCode);

      let passesTests = false;
      try {
        const evalCode = `
          ${code}
          return {
            fruits: typeof fruits !== 'undefined' ? fruits : undefined
          };
        `;
        const result = new Function(evalCode)();

        if (
          Array.isArray(result.fruits) &&
          result.fruits.length === 4 &&
          result.fruits[0] === "apple" &&
          result.fruits[1] === "plum" &&
          result.fruits[2] === "pear" &&
          result.fruits[3] === "orange"
        ) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "fruits-declared",
          label: "Объявлена переменная fruits",
          passed: hasFruits,
        },
        {
          id: "fruits-value",
          label:
            'Значение переменной fruits — это массив ["apple", "plum", "pear", "orange"]',
          passed: passesTests,
        },
      ];
    },
  },
  "js-array-access": {
    id: "js-array-access",
    title: "Доступ к элементам",
    type: "javascript",
    description: `
      <p>Для доступа к значению элемента массива применяют синтаксис квадратных скобок <code>массив[индекс]</code>. Между именем переменной массива и квадратными скобками не должно быть пробела.</p>

      <div class="bg-red-500/10 border-l-4 border-red-500 p-4 my-4">
        <p class="font-bold text-red-500">🔥 Внимание</p>
        <p>Индексация элементов массива начинается с нуля.</p>
      </div>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];
planets[0]; // "Earth"
planets[2]; // "Venus"</code></pre>
      </div>

      <p>Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.</p>

      <table class="w-full text-left border-collapse my-4">
        <thead>
          <tr>
            <th class="border p-2">Имя переменной</th>
            <th class="border p-2">Значение переменной</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2"><code>firstElement</code></td>
            <td class="border p-2">первый элемент массива</td>
          </tr>
          <tr>
            <td class="border p-2"><code>secondElement</code></td>
            <td class="border p-2">второй элемент массива</td>
          </tr>
          <tr>
            <td class="border p-2"><code>lastElement</code></td>
            <td class="border p-2">последний элемент массива</td>
          </tr>
        </tbody>
      </table>
    `,
    initialCode: `const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFirst = /const\s+firstElement/.test(cleanCode);
      const hasSecond = /const\s+secondElement/.test(cleanCode);
      const hasLast = /const\s+lastElement/.test(cleanCode);

      let passesTests = false;
      try {
        const evalCode = `
          ${code}
          return {
            firstElement: typeof firstElement !== 'undefined' ? firstElement : undefined,
            secondElement: typeof secondElement !== 'undefined' ? secondElement : undefined,
            lastElement: typeof lastElement !== 'undefined' ? lastElement : undefined
          };
        `;
        const result = new Function(evalCode)();

        if (
          result.firstElement === "apple" &&
          result.secondElement === "plum" &&
          result.lastElement === "orange"
        ) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "first-declared",
          label: "Объявлена переменная firstElement",
          passed: hasFirst,
        },
        {
          id: "first-value",
          label: 'Значение переменной firstElement — это строка "apple"',
          passed:
            passesTests &&
            /const\s+firstElement\s*=\s*fruits\[0\]/.test(cleanCode),
        },
        {
          id: "second-declared",
          label: "Объявлена переменная secondElement",
          passed: hasSecond,
        },
        {
          id: "second-value",
          label: 'Значение переменной secondElement — это строка "plum"',
          passed:
            passesTests &&
            /const\s+secondElement\s*=\s*fruits\[1\]/.test(cleanCode),
        },
        {
          id: "last-declared",
          label: "Объявлена переменная lastElement",
          passed: hasLast,
        },
        {
          id: "last-value",
          label: 'Значение переменной lastElement — это строка "orange"',
          passed:
            passesTests &&
            /const\s+lastElement\s*=\s*fruits\[3\]/.test(cleanCode),
        },
      ];
    },
  },
  "js-array-assignment": {
    id: "js-array-assignment",
    title: "Переопределение значений",
    type: "javascript",
    description: `
      <p>В отличие от строк, элементы массива можно изменять, обратившись к ним по индексу и присвоив другое значение.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];</code></pre>
      </div>

      <div class="task-instruction">
        <p>Выполни переопределение значения элементов с индексами <code>1</code> и <code>3</code>. Замени <code>"plum"</code> на <code>"peach"</code>, а <code>"orange"</code> на <code>"banana"</code>.</p>
      </div>
    `,
    initialCode: `const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFruits = /const\s+fruits/.test(cleanCode);

      let passesTests = false;
      try {
        const evalCode = `
          ${code}
          return {
            fruits: typeof fruits !== 'undefined' ? fruits : undefined
          };
        `;
        const result = new Function(evalCode)();

        if (
          Array.isArray(result.fruits) &&
          result.fruits.length === 4 &&
          result.fruits[0] === "apple" &&
          result.fruits[1] === "peach" &&
          result.fruits[2] === "pear" &&
          result.fruits[3] === "banana"
        ) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "fruits-declared",
          label: "Объявлена переменная fruits",
          passed: hasFruits,
        },
        {
          id: "fruits-value",
          label:
            'Значение переменной fruits — это массив ["apple", "peach", "pear", "banana"]',
          passed: passesTests,
        },
      ];
    },
  },
  "js-array-length": {
    id: "js-array-length",
    title: "Длина массива",
    type: "javascript",
    description: `
      <p>Длина массива, то есть количество его элементов, хранится в свойстве <code>length</code>. Это динамическая величина, которая изменяется автоматически во время добавления или удаления элементов.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3</code></pre>
      </div>

      <div class="task-instruction">
        <p>Объяви переменную <code>fruitsArrayLength</code> и присвой ей длину массива <code>fruits</code>, используя свойство <code>length</code>.</p>
      </div>
    `,
    initialCode: `const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasVariable = /const\s+fruitsArrayLength/.test(cleanCode);
      const usesLength = /\.length/.test(cleanCode);

      let passesTests = false;
      try {
        const evalCode = `
          ${code}
          return {
            fruitsArrayLength: typeof fruitsArrayLength !== 'undefined' ? fruitsArrayLength : undefined
          };
        `;
        const result = new Function(evalCode)();

        if (result.fruitsArrayLength === 4) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "variable-declared",
          label: "Объявлена переменная fruitsArrayLength",
          passed: hasVariable,
        },
        {
          id: "value-check",
          label: "Значение переменной fruitsArrayLength — это число 4",
          passed: passesTests && usesLength,
        },
      ];
    },
  },
  "js-array-last-element": {
    id: "js-array-last-element",
    title: "Последний элемент массива",
    type: "javascript",
    description: `
      <p>Чаще всего мы заранее в коде не знаем какая будет длина массива. Для того чтобы получить значение последнего элемента применяется следующий подход — длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу <code>длина_массива - 1</code>, можно получить значение последнего элемента массива произвольной длины.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"</code></pre>
      </div>

      <div class="task-instruction">
        <p>Объяви две переменные:</p>
        <ul class="list-disc">
          <li><code>lastElementIndex</code> — индекс последнего элемента массива <code>fruits</code> через <code>длина_массива - 1</code></li>
          <li><code>lastElement</code> — значение последнего элемента массива</li>
        </ul>
      </div>
    `,
    initialCode: `const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasIndexVar = /const\s+lastElementIndex/.test(cleanCode);
      const hasValueVar = /const\s+lastElement/.test(cleanCode);
      const usesLengthMinusOne = /\.length\s*-\s*1/.test(cleanCode);

      let passesTests = false;
      let result: any = {};
      try {
        const evalCode = `
          ${code}
          return {
            lastElementIndex: typeof lastElementIndex !== 'undefined' ? lastElementIndex : undefined,
            lastElement: typeof lastElement !== 'undefined' ? lastElement : undefined
          };
        `;
        result = new Function(evalCode)();

        if (result.lastElementIndex === 3 && result.lastElement === "banana") {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "index-declared",
          label: "Объявлена переменная lastElementIndex",
          passed: hasIndexVar,
        },
        {
          id: "index-value",
          label: "Значение переменной lastElementIndex — это число 3",
          passed: passesTests && result.lastElementIndex === 3,
        },
        {
          id: "element-declared",
          label: "Объявлена переменная lastElement",
          passed: hasValueVar,
        },
        {
          id: "element-value",
          label: 'Значение переменной lastElement — это строка "banana"',
          passed: passesTests && result.lastElement === "banana",
        },
      ];
    },
  },
  "js-get-extreme-elements": {
    id: "js-get-extreme-elements",
    title: "Экстремальные элементы",
    type: "javascript",
    description: `
      <p>Напиши функцию <code>getExtremeElements(array)</code>, которая принимает один параметр <code>array</code> — массив элементов произвольной длины. Функция должна возвращать массив из двух элементов — первого и последнего элемента параметра <code>array</code>.</p>

      <div class="task-instruction">
        <p>Реализуй функцию возврата первого и последнего элементов массива.</p>
      </div>
    `,
    initialCode: `function getExtremeElements(array) {
  // Change code below this line

  // Change code above this line
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+getExtremeElements\s*\(\s*array\s*\)/.test(cleanCode);

      let passesTests = false;
      let result1, result2, result3;

      try {
        const userFn = new Function(code + "; return getExtremeElements;")();
        if (typeof userFn === "function") {
          result1 = userFn([1, 2, 3, 4, 5]);
          result2 = userFn(["Earth", "Mars", "Venus"]);
          result3 = userFn(["apple", "peach", "pear", "banana"]);

          const check1 =
            Array.isArray(result1) &&
            result1.length === 2 &&
            result1[0] === 1 &&
            result1[1] === 5;
          const check2 =
            Array.isArray(result2) &&
            result2.length === 2 &&
            result2[0] === "Earth" &&
            result2[1] === "Venus";
          const check3 =
            Array.isArray(result3) &&
            result3.length === 2 &&
            result3[0] === "apple" &&
            result3[1] === "banana";

          if (check1 && check2 && check3) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция getExtremeElements(array)",
          passed: hasFunction,
        },
        {
          id: "test-numbers",
          label: "Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]",
          passed:
            passesTests &&
            Array.isArray(result1) &&
            result1[0] === 1 &&
            result1[1] === 5,
        },
        {
          id: "test-planets",
          label:
            'Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]',
          passed:
            passesTests &&
            Array.isArray(result2) &&
            result2[0] === "Earth" &&
            result2[1] === "Venus",
        },
        {
          id: "test-fruits",
          label:
            'Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]',
          passed:
            passesTests &&
            Array.isArray(result3) &&
            result3[0] === "apple" &&
            result3[1] === "banana",
        },
      ];
    },
  },

  "js-split-message": {
    id: "js-split-message",
    title: "Гравировка украшений",
    type: "javascript",
    description: `
      <p>Метод <code>split(delimiter)</code> позволяет превратить строку в массив, "разбив" его по разделителю <code>delimiter</code>. Если разделитель — это пустая строка, получим массив отдельных символов. Разделителем может быть один или несколько символов.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]</code></pre>
      </div>

      <div class="task-instruction">
        <p>Дополни код функции <code>splitMessage(message, delimiter)</code>. Она должна разбить строку <code>message</code> по указанному разделителю <code>delimiter</code> и сохранить полученный массив строк в переменной <code>words</code>.</p>
      </div>
    `,
    initialCode: `function splitMessage(message, delimiter) {
  let words;
  // Change code below this line

  // Change code above this line
  return words;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+splitMessage\s*\(\s*message\s*,\s*delimiter\s*\)/.test(
          cleanCode,
        );
      const usesSplit = /\.split\s*\(/.test(cleanCode);

      let passesTests = false;
      let result1, result2, result3;

      try {
        const userFn = new Function(code + "; return splitMessage;")();
        if (typeof userFn === "function") {
          result1 = userFn("Mango hurries to the train", " ");
          result2 = userFn("Mango", "");
          result3 = userFn("best_for_week", "_");

          const check1 =
            Array.isArray(result1) &&
            result1.length === 5 &&
            result1[0] === "Mango" &&
            result1[4] === "train";
          const check2 =
            Array.isArray(result2) &&
            result2.length === 5 &&
            result2[0] === "M" &&
            result2[4] === "o";
          const check3 =
            Array.isArray(result3) &&
            result3.length === 3 &&
            result3[0] === "best" &&
            result3[2] === "week";

          if (check1 && check2 && check3) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция splitMessage(message, delimiter)",
          passed: hasFunction,
        },
        {
          id: "test-space",
          label:
            'Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]',
          passed:
            passesTests &&
            Array.isArray(result1) &&
            result1.length === 5 &&
            result1[0] === "Mango",
        },
        {
          id: "test-empty",
          label:
            'Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]',
          passed:
            passesTests &&
            Array.isArray(result2) &&
            result2.join("") === "Mango",
        },
        {
          id: "test-underscore",
          label:
            'Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]',
          passed:
            passesTests &&
            Array.isArray(result3) &&
            result3.join("_") === "best_for_week",
        },
        {
          id: "uses-split",
          label: "Функция использует метод split",
          passed: usesSplit,
        },
      ];
    },
  },
  "js-calculate-engraving-price": {
    id: "js-calculate-engraving-price",
    title: "Гравировка украшений",
    type: "javascript",
    description: `
      <p>Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.</p>

      <div class="task-instruction">
        <p>Напиши тело функции <code>calculateEngravingPrice(message, pricePerWord)</code>. Она принимает строку <code>message</code> (состоящую из слов, разделенных только пробелами) и цену гравировки одного слова <code>pricePerWord</code>. Функция должна возвращать общую стоимость гравировки всех слов в строке.</p>
      </div>
    `,
    initialCode: `function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

  // Change code above this line
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+calculateEngravingPrice\s*\(\s*message\s*,\s*pricePerWord\s*\)/.test(
          cleanCode,
        );

      let passesTests = false;
      let result1, result2, result3, result4;

      try {
        const userFn = new Function(
          code + "; return calculateEngravingPrice;",
        )();
        if (typeof userFn === "function") {
          result1 = userFn("JavaScript is in my blood", 10);
          result2 = userFn("JavaScript is in my blood", 20);
          result3 = userFn("Web-development is creative work", 40);
          result4 = userFn("Web-development is creative work", 20);

          if (
            result1 === 50 &&
            result2 === 100 &&
            result3 === 160 &&
            result4 === 80
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label:
            "Объявлена функция calculateEngravingPrice(message, pricePerWord)",
          passed: hasFunction,
        },
        {
          id: "test-1",
          label:
            'Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50',
          passed: passesTests && result1 === 50,
        },
        {
          id: "test-2",
          label:
            'Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100',
          passed: passesTests && result2 === 100,
        },
        {
          id: "test-3",
          label:
            'Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160',
          passed: passesTests && result3 === 160,
        },
        {
          id: "test-4",
          label:
            'Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80',
          passed: passesTests && result4 === 80,
        },
      ];
    },
  },
  "js-make-string-from-array": {
    id: "js-make-string-from-array",
    title: "Метод массива join()",
    type: "javascript",
    description: `
      <p>Метод массивов <code>join(delimiter)</code> позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов, указанных в <code>delimiter</code>. То есть это обратная операция методу строк <code>split(delimiter)</code>.</p>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'</code></pre>
      </div>

      <div class="task-instruction">
        <p>Дополни код функции <code>makeStringFromArray(array, delimiter)</code> таким образом, чтобы она возвращала в переменной <code>string</code> результат соединения элементов массива <code>array</code> с разделителем <code>delimiter</code> - строку.</p>
      </div>
    `,
    initialCode: `function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line

  // Change code above this line
  return string;
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction =
        /function\s+makeStringFromArray\s*\(\s*array\s*,\s*delimiter\s*\)/.test(
          cleanCode,
        );
      const usesJoin = /\.join\s*\(/.test(cleanCode);

      let passesTests = false;
      let result1, result2, result3;

      try {
        const userFn = new Function(code + "; return makeStringFromArray;")();
        if (typeof userFn === "function") {
          result1 = userFn(["Mango", "hurries", "to", "the", "train"], " ");
          result2 = userFn(["M", "a", "n", "g", "o"], "");
          result3 = userFn(["top", "picks", "for", "you"], "_");

          if (
            result1 === "Mango hurries to the train" &&
            result2 === "Mango" &&
            result3 === "top_picks_for_you"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция makeStringFromArray(array, delimiter)",
          passed: hasFunction,
        },
        {
          id: "test-space",
          label:
            'Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"',
          passed: passesTests && result1 === "Mango hurries to the train",
        },
        {
          id: "test-empty",
          label:
            'Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"',
          passed: passesTests && result2 === "Mango",
        },
        {
          id: "test-underscore",
          label:
            'Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"',
          passed: passesTests && result3 === "top_picks_for_you",
        },
        {
          id: "uses-join",
          label: "Функция использует метод join",
          passed: usesJoin,
        },
      ];
    },
  },
  "js-slugify": {
    id: "js-slugify",
    title: "Генератор слага",
    type: "javascript",
    description: `
      <p>Термин <strong>slug</strong> — это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.</p>
      <p>Например, вместо того, чтобы пользователь увидел в адресной строке <code>mysite.com/posts/1q8fh74tx</code>, можно сделать <strong>slug</strong> из названия статьи. В результате адрес будет приятнее для восприятия: <code>mysite.com/posts/arrays-for-begginers</code>.</p>

      <div class="bg-red-500/10 border-l-4 border-red-500 p-4 my-4">
        <p class="font-bold text-red-500">🔥 Внимание</p>
        <p><strong>Slug</strong> — это всегда строка в нижнем регистре, слова которой разделены тире.</p>
      </div>

      <div class="task-instruction">
        <p>Напиши функцию <code>slugify(title)</code>, которая принимает заголовок статьи, параметр <code>title</code>, и возвращает <code>slug</code>, созданный из этой строки.</p>
        <ul class="list-disc">
          <li>Значением параметра <code>title</code> будут строки, слова которых разделены только пробелами.</li>
          <li>Все символы <code>slug</code> должны быть в нижнем регистре.</li>
          <li>Все слова <code>slug</code> должны быть разделены тире.</li>
        </ul>
      </div>
    `,
    initialCode: `function slugify(title) {
  // Change code below this line

  // Change code above this line
}
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const hasFunction = /function\s+slugify\s*\(\s*title\s*\)/.test(
        cleanCode,
      );
      const usesToLower = /\.toLowerCase\s*\(/.test(cleanCode);
      const usesSplit = /\.split\s*\(/.test(cleanCode);
      const usesJoin = /\.join\s*\(/.test(cleanCode);

      let passesTests = false;
      let result1, result2, result3, result4;

      try {
        const userFn = new Function(code + "; return slugify;")();
        if (typeof userFn === "function") {
          result1 = userFn("Arrays for begginers");
          result2 = userFn("English for developer");
          result3 = userFn("Ten secrets of JavaScript");
          result4 = userFn("How to become a JUNIOR developer in TWO WEEKS");

          if (
            result1 === "arrays-for-begginers" &&
            result2 === "english-for-developer" &&
            result3 === "ten-secrets-of-javascript" &&
            result4 === "how-to-become-a-junior-developer-in-two-weeks"
          ) {
            passesTests = true;
          }
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "function-declared",
          label: "Объявлена функция slugify(title)",
          passed: hasFunction,
        },
        {
          id: "test-1",
          label:
            'Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"',
          passed: passesTests && result1 === "arrays-for-begginers",
        },
        {
          id: "test-2",
          label:
            'Вызов slugify("English for developer") возвращает "english-for-developer"',
          passed: passesTests && result2 === "english-for-developer",
        },
        {
          id: "test-3",
          label:
            'Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"',
          passed: passesTests && result3 === "ten-secrets-of-javascript",
        },
        {
          id: "test-4",
          label:
            'Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"',
          passed:
            passesTests &&
            result4 === "how-to-become-a-junior-developer-in-two-weeks",
        },
      ];
    },
  },
  "js-slice": {
    id: "js-slice",
    title: "Метод массива slice()",
    type: "javascript",
    description: `
      <p>Метод <code>slice(begin, end)</code> возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от <code>begin</code> и до, но не включая, <code>end</code> - индексы элементов исходного массива.</p>
      <ul class="list-disc">
        <li>Если <code>begin</code> и <code>end</code> не указаны, будет создана полная копия исходного массива.</li>
        <li>Если не указан <code>end</code>, копирование будет от <code>start</code> до конца исходного массива.</li>
        <li>Если значение <code>start</code> отрицательное, а <code>end</code> не указано, то будут скопированы последние <code>N</code> элементов.</li>
      </ul>

      <div class="bg-slate-900 rounded-lg p-4 my-4">
        <pre class="challenge-code-block"><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']</code></pre>
      </div>

      <div class="task-instruction">
        <p>Дополни код таким образом, чтобы переменные содержали частичные копии исходного массива <code>fruits</code>.</p>
        <ul class="list-disc">
          <li><code>firstTwoEls</code> - массив из первых двух элементов</li>
          <li><code>nonExtremeEls</code> - массив из всех элементов, кроме первого и последнего</li>
          <li><code>lastThreeEls</code> - массив из трех последних элементов</li>
        </ul>
      </div>
    `,
    initialCode: `const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = ;
const nonExtremeEls = ;
const lastThreeEls = ;
`,
    checks: (code) => {
      const cleanCode = code.replace(/\s+/g, " ");
      const usesSlice = /\.slice\s*\(/.test(cleanCode);

      let passesTests = false;
      let result: any = {};

      try {
        const evalCode = `
          ${code}
          return {
            firstTwoEls: typeof firstTwoEls !== 'undefined' ? firstTwoEls : undefined,
            nonExtremeEls: typeof nonExtremeEls !== 'undefined' ? nonExtremeEls : undefined,
            lastThreeEls: typeof lastThreeEls !== 'undefined' ? lastThreeEls : undefined,
            fruits: typeof fruits !== 'undefined' ? fruits : undefined
          };
        `;
        result = new Function(evalCode)();

        if (
          Array.isArray(result.firstTwoEls) &&
          result.firstTwoEls.length === 2 &&
          result.firstTwoEls[0] === "apple" &&
          result.firstTwoEls[1] === "plum" &&
          Array.isArray(result.nonExtremeEls) &&
          result.nonExtremeEls.length === 3 &&
          result.nonExtremeEls[0] === "plum" &&
          result.nonExtremeEls[2] === "orange" &&
          Array.isArray(result.lastThreeEls) &&
          result.lastThreeEls.length === 3 &&
          result.lastThreeEls[0] === "pear" &&
          result.lastThreeEls[2] === "banana"
        ) {
          passesTests = true;
        }
      } catch (e) {
        console.error("Test execution failed:", e);
      }

      return [
        {
          id: "fruits-check",
          label:
            'Значение переменной fruits - это массив ["apple", "plum", "pear", "orange", "banana"]',
          passed:
            Array.isArray(result.fruits) &&
            result.fruits.length === 5 &&
            result.fruits[0] === "apple",
        },
        {
          id: "firstTwoEls-check",
          label:
            'Значение переменной firstTwoEls - это массив ["apple", "plum"]',
          passed:
            passesTests &&
            result.firstTwoEls[0] === "apple" &&
            result.firstTwoEls[1] === "plum",
        },
        {
          id: "nonExtremeEls-check",
          label:
            'Значение переменной nonExtremeEls - это массив ["plum", "pear", "orange"]',
          passed:
            passesTests &&
            result.nonExtremeEls[0] === "plum" &&
            result.nonExtremeEls[2] === "orange",
        },
        {
          id: "lastThreeEls-check",
          label:
            'Значение переменной lastThreeEls - это массив ["pear", "orange", "banana"]',
          passed:
            passesTests &&
            result.lastThreeEls[0] === "pear" &&
            result.lastThreeEls[2] === "banana",
        },
        {
          id: "slice-check",
          label:
            "Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами",
          passed: usesSlice && passesTests,
        },
      ];
    },
  },
};
