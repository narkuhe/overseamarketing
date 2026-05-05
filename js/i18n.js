// i18n translations
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "hero.title": "Cross-border Traffic Research",
        "hero.subtitle": "Sharing insights on SEO, growth hacking, and traffic acquisition",
        "articles.title": "Latest Articles",
        "articles.hello.title": "Hello World - Welcome to My Blog",
        "articles.hello.excerpt": "Welcome to my blog! Here I share insights on cross-border traffic acquisition...",
        "footer.rights": "All rights reserved."
    },
    zh: {
        "nav.home": "首页",
        "nav.about": "关于",
        "hero.title": "出海流量玄学研究",
        "hero.subtitle": "分享 SEO、增长黑客和流量获取的深度洞察",
        "articles.title": "最新文章",
        "articles.hello.title": "你好世界 - 欢迎来到我的博客",
        "articles.hello.excerpt": "欢迎来到我的博客！这里我会分享出海流量获取的策略和案例...",
        "footer.rights": "保留所有权利。"
    }
};

// Language detection and switching
function switchLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
    if (lang === 'zh') {
        window.location.pathname = '/zh/';
    } else {
        window.location.pathname = '/';
    }
}

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferred-language') || 'en';
    // Update static i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[preferredLang] && translations[preferredLang][key]) {
            el.textContent = translations[preferredLang][key];
        }
    });
});
