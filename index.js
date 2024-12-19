"use strict";
function appendList(elem, ls) {
    ls.forEach((value) => elem.appendChild(value));
}
function createBR() {
    return document.createElement('br');
}
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const title = document.createElement('h1');
    title.innerHTML = "ニェンの<ruby>洞窟<rt>どうくつ</rt></ruby>";
    title.style.color = "beige";
    title.style.marginBottom = "1em";
    title.style.backdropFilter = "blur(10px)";
    title.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    title.style.borderRadius = "10px";
    title.style.color = "rgb(221, 206, 255)";
    title.style.padding = "30px";
    title.style.width = "max-content";
    title.style.marginLeft = "auto";
    title.style.marginRight = "auto";
    // Create the div with paragraph
    const div = document.createElement('div');
    div.className = 'div_';
    const imp = document.createElement('p');
    imp.innerHTML = `
    我はニェン、そしてカナダに住んでいて<br>
    レズビアンでまして<br>
    プログラミングとゲームをすることがすきです<br>
  `;
    imp.style.marginLeft = "1em";
    imp.style.marginBottom = "1em";
    div.appendChild(imp);
    appendList(body, [
        createBR(),
        title,
        createBR(),
        div,
        createBR(),
    ]);
    // Create collapsible sections
    createCollapsible(body, 'ソーシャル', `
      <ul>
        ${li_GetListElement(`Discord/ ashita_nian`)},
        ${li_GetListElement(`Github/ ${a_GetAElement("https://github.com/Nian0Bussou", "Nian0Bussou")}`)}
        ${li_GetListElement(`Twitter/ ${a_GetAElement("https://x.com/NianToshi", "NianToshi")}`)}
        ${li_GetListElement(`Bluesky/ ${a_GetAElement("https://bsky.app/profile/ashita-nian.bsky.social", "ashita-nian")}`)}
      </ul>
      <sub><b><i> I have no other way of being contacted</i></b></sub>
    `, 0);
    createCollapsible(body, '読める言語', `<ul>
      <li>フランス語 (native)</li>
      <li>英語</li>
      <li>日本語</li>
    </ul>`, 1);
    createCollapsible(body, 'プログラミング言語の経験順にランキング', `<ol>
    ${nameIcon('Go        ', 'go')}
    ${nameIcon('C#        ', 'c--4')}
    ${nameIcon('HTML      ', 'html')}
    ${nameIcon('Unity     ', 'unity')}
    ${nameIcon('CSS       ', 'css')}
    ${nameIcon('Rust      ', 'rust')}
    ${nameIcon('F#        ', 'fsharp')}
    ${nameIcon('Haskell   ', 'haskell')}
    ${nameIcon('C++       ', 'c++')}
    ${nameIcon('C         ', 'c')}
    ${nameIcon('OCamL     ', 'ocaml')}
    ${nameIcon('Python    ', 'python')}
    ${nameIcon('Ecmascript', 'js')}
    </ol>`, 2);
    createCollapsible(body, '好きです', `<ul>
    ${li_GetListElement('Arcane')}
    ${li_GetListElement("Arknights' lore")}
    ${li_GetListElement("Wis'adel")}
    ${li_GetListElement('Overwatch 2')}
    </ul>`, 3);
    createCollapsible(body, '好きない', `<ul>
    ${li_GetListElement('人')}
    ${li_GetListElement('LoL')}
    </ul>`, 4);
    createCollapsible(body, '連関（れんかん）', `<ul>
    ${li_GetListElement('Arcane')}
    ${li_GetListElement("Arknights' lore")}
    ${li_GetListElement("Wis'adel")}
    ${li_GetListElement('Overwatch 2')}
    </ul>`, 3);
});
function createCollapsible(body, title, content, index) {
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
    body.appendChild(button);
    const contentDiv = document.createElement('div');
    contentDiv.className = `content${index} div_`;
    contentDiv.innerHTML = content;
    contentDiv.style.marginLeft = "2em";
    contentDiv.style.marginBottom = "1em";
    body.appendChild(contentDiv);
    button.addEventListener('click', () => { contentDiv.classList.toggle('open'); });
    body.appendChild(document.createElement('br'));
}
function nameIcon(name, icon) {
    return li_GetListElement(`${name} <img class="icon" src="/svgs/${icon}.svg" alt=" icon" />`);
}
function li_GetListElement(str) {
    return `<li>${str}</li>`;
}
function a_GetAElement(link, name) {
    return `<a href="${link}" target="_blank">${name}</a>`;
}
