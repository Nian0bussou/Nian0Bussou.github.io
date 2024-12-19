"use strict";
let cl = console.log;
var Backgrounds;
(function (Backgrounds) {
    Backgrounds["Back1"] = "back-w-city-skyline.jpg";
    Backgrounds["Back2"] = "back.jpg";
    Backgrounds["Back3"] = "back1.png";
    Backgrounds["Back4"] = "backk.jpg";
})(Backgrounds || (Backgrounds = {}));
const defaultBackground = Backgrounds.Back1;
let background = defaultBackground;
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let cookie = UCookie.getCookieWithEnum();
    cl(cookie);
    if (cookie === null) {
        cl("setCookie to default");
        UCookie.setCookie(defaultBackground);
    }
    body.style.background = cookie !== null && cookie !== void 0 ? cookie : defaultBackground;
    const title = document.createElement('h1');
    title.innerHTML = "ニェンの<ruby>洞窟<rt>どうくつ</rt></ruby>";
    title.style.backdropFilter = "blur(10px)";
    title.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    title.style.borderRadius = "10px";
    title.style.color = "beige";
    title.style.color = "rgb(221, 206, 255)";
    title.style.marginBottom = "1em";
    title.style.marginLeft = "auto";
    title.style.marginRight = "auto";
    title.style.padding = "30px";
    title.style.width = "max-content";
    // Create the div with paragraph
    const div = document.createElement('div');
    div.className = 'div_';
    div.style.width = "35%";
    div.style.marginLeft = "1em";
    div.style.marginBottom = "1em";
    const imp = document.createElement('p');
    imp.innerHTML = `
    我はニェン、そしてカナダに住んでいます。レズビアンです。プログラミングとゲームをすることがすきです。
  `;
    div.appendChild(imp);
    UHTML.appendList(body, [
        UHTML.createBR(),
        title,
        UHTML.createBR(),
        div,
        UHTML.createBR(),
        // collapsible sections
        UHTML.createCollapsibleAndContent('ソーシャル', `<ul>
        ${UHTML.li_GetListElement(`Discord/ ashita_nian`)},
        ${UHTML.li_GetListElement(`Github/ ${UHTML.a_GetAElement("https://github.com/Nian0Bussou", "Nian0Bussou")}`)}
        ${UHTML.li_GetListElement(`Twitter/ ${UHTML.a_GetAElement("https://x.com/NianToshi", "NianToshi")}`)}
        ${UHTML.li_GetListElement(`Bluesky/ ${UHTML.a_GetAElement("https://bsky.app/profile/ashita-nian.bsky.social", "ashita-nian")}`)}
      </ul>
      <sub><b><i> I have no other way of being contacted</i></b></sub>
      `, 0),
        UHTML.createCollapsibleAndContent('読める言語', `<ul>
        ${UHTML.li_GetListElement("フランス語")}
        ${UHTML.li_GetListElement("英語")}
        ${UHTML.li_GetListElement("日本語")}
      </ul>`, 1),
        UHTML.createCollapsibleAndContent('プログラミング言語の経験順にランキング', `<ol>
        ${UHTML.nameIcon('Go        ', 'go')}
        ${UHTML.nameIcon('C#        ', 'c--4')}
        ${UHTML.nameIcon('HTML      ', 'html')}
        ${UHTML.nameIcon('Unity     ', 'unity')}
        ${UHTML.nameIcon('CSS       ', 'css')}
        ${UHTML.nameIcon('Rust      ', 'rust')}
        ${UHTML.nameIcon('F#        ', 'fsharp')}
        ${UHTML.nameIcon('Haskell   ', 'haskell')}
        ${UHTML.nameIcon('C++       ', 'c++')}
        ${UHTML.nameIcon('C         ', 'c')}
        ${UHTML.nameIcon('OCamL     ', 'ocaml')}
        ${UHTML.nameIcon('Python    ', 'python')}
        ${UHTML.nameIcon('Ecmascript', 'js')}
      </ol>`, 2),
        UHTML.createCollapsibleAndContent('好きです', `<ul>
        ${UHTML.li_GetListElement('Arcane')}
        ${UHTML.li_GetListElement("Arknights' lore")}
        ${UHTML.li_GetListElement("Wis'adel")}
        ${UHTML.li_GetListElement('Overwatch 2')}
      </ul>`, 3),
        UHTML.createCollapsibleAndContent('好きない', `<ul>
        ${UHTML.li_GetListElement('人')}
        ${UHTML.li_GetListElement('LoL')}
      </ul>`, 4),
        UHTML.createCollapsibleAndContent('便利（べんり）連関（れんかん）', `<ul>
        ${UHTML.li_GetListElement(`${UHTML.a_GetAElement("https://translate.google.com", "translate")}`)}
        ${UHTML.li_GetListElement(`${UHTML.a_GetAElement("https://www.reddit.com", "jlailu")}`)}
        ${UHTML.li_GetListElement(`${UHTML.a_GetAElement("https://jisho.org", "辞書")}`)}
        ${UHTML.li_GetListElement(`${UHTML.a_GetAElement("https://sapling.ai/lang/japanese", "sapling")}`)}
      </ul>`, 3),
        UHTML.createSelection(body)
    ]);
});
class UHTML {
    static createCollapsibleAndContent(title, content, index) {
        const style = document.createElement('style');
        style.textContent = `
                        .content${index} {
                            display: none; /* Start hidden */
                        }
                        .content${index}.open {
                            display: block; /* Show when open */
                        }
                        `;
        document.head.appendChild(style);
        const button = document.createElement('button');
        button.className = `collapsible${index} but_tits button_`;
        button.style.marginLeft = "1em";
        button.style.marginBottom = "1em";
        button.textContent = title;
        const contentDiv = document.createElement('div');
        contentDiv.className = `content${index} div_`;
        contentDiv.innerHTML = content;
        contentDiv.style.marginLeft = "2em";
        contentDiv.style.marginBottom = "1em";
        button.addEventListener('click', () => { contentDiv.classList.toggle('open'); });
        const div = document.createElement('div');
        UHTML.appendList(div, [button, contentDiv, UHTML.createBR()]);
        return div;
    }
    static nameIcon(name, icon) {
        return this.li_GetListElement(`${name} <img class="icon" src="/svgs/${icon}.svg" alt=" icon" />`);
    }
    static li_GetListElement(str) {
        return `<li>${str}</li>`;
    }
    static a_GetAElement(link, name) {
        return `<a href="${link}" target="_blank">${name}</a>`;
    }
    static appendList(elem, ls) {
        ls.forEach((value) => elem.appendChild(value));
    }
    static createBR() {
        return document.createElement('br');
    }
    static createSelection(body) {
        const select = document.createElement('select');
        for (const value in Backgrounds) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        }
        select.addEventListener('change', (evt) => {
            let smth = evt.target;
            let value = smth.value;
            const decodedValue = value;
            background = decodedValue;
            this.changeBackground(body, background);
        });
        return select;
    }
    static changeBackground(body, b) {
        console.log(b);
        body.style.setProperty('background', b, 'important');
        UCookie.setCookie(b);
    }
}
class UCookie {
    static setCookie(value) {
        const name = "background";
        const date = new Date();
        date.setTime(date.getTime() + 100 * 24 * 60 * 60 * 1000); // Calculate expiry date
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
    static getCookieWithEnum() {
        const name = "background";
        const cookieArray = document.cookie.split(';');
        for (const cookie of cookieArray) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                console.log("Cookie Value:", value);
                const decodedValue = decodeURIComponent(value);
                if (Object.values(Backgrounds).includes(decodedValue)) { // Ensure it's a valid enum value
                    return decodedValue;
                }
            }
        }
        return null; // Return null if not found or invalid
    }
}
