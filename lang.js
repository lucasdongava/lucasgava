const translations = {
  pt: {
    home: "home",
    about: "sobre",
    thoughts: "pensamentos",
    contact: "contato",
    nav_cv: "cv",
    nav_socialmedia: "redes sociais",

    about_title: "sobre mim",
    about_description:
      "desenvolvedor brasileiro focado em criar produtos eficientes.",

    thoughts_title: "pensamentos",
    thoughts_intro: "coisas que escrevo às vezes.",

    contact_title: "contato",
    contact_message: "me envie um e-mail sempre que quiser.",
  },

  en: {
    home: "home",
    about: "about",
    thoughts: "thoughts",
    contact: "contact",
    nav_cv: "cv",
    nav_socialmedia: "social media",

    about_title: "about me",
    about_description:
      "brazilian developer focused on building efficient products.",

    thoughts_title: "thoughts",
    thoughts_intro: "things I write sometimes.",

    contact_title: "contact",
    contact_message: "send me an email anytime.",
  },

  es: {
    home: "inicio",
    about: "sobre mí",
    thoughts: "pensamientos",
    contact: "contacto",
    nav_cv: "cv",
    nav_socialmedia: "redes sociales",

    about_title: "sobre mí",
    about_description:
      "desarrollador brasileño enfocado en crear productos eficientes.",

    thoughts_title: "pensamientos",
    thoughts_intro: "cosas que escribo a veces.",

    contact_title: "contacto",
    contact_message: "envíame un correo cuando quieras.",
  },

  zh: {
    home: "主页",
    about: "关于",
    thoughts: "想法",
    contact: "联系",
    nav_cv: "简历",
    nav_socialmedia: "社交媒体",

    about_title: "关于我",
    about_description: "专注于创建高效产品的巴西开发者。",

    thoughts_title: "想法",
    thoughts_intro: "我有时写的东西。",

    contact_title: "联系",
    contact_message: "随时给我发电子邮件。",
  },
};

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  const switcher = document.getElementById("lang-switcher");
  if (!switcher) return;

  switcher.value = savedLang;

  switcher.addEventListener("change", () => {
    const lang = switcher.value;
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
  });
});
