"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.appendChild(document.createElement('br'));
    body.appendChild(document.createElement('br'));
    // Create the div with paragraph
    const div = document.createElement('div');
    div.className = 'div_';
    const imp = document.createElement('p');
    imp.innerHTML = `
    !! 私は無言症 !!<br />
    私はニアンです.<br />
    女性<br />
    カナダ出身です<br />
    私は女性なので、他の女性を見るとパニックに陥る<br />
    私はOverwatch2やLoLのようなゲームで人生を無駄にしてる<br />
    通常はCDawgVA、Ludwig、DougDoug、Theprimeagen、Flatsなどのストリーマーを見ながらプログラミングやゲームをする<br />
  `;
    div.appendChild(imp);
    body.appendChild(div);
    body.appendChild(document.createElement('br'));
    // Create collapsible sections
    createCollapsible(body, 'Contacts', `
      <ul>
        <li>
          Discord:<a href="https://discordapp.com/users/488805334954147853" target="_blank">@yumeno_no_yuri</a>
        </li>
        <li>
          Github<a href="https://github.com/Nian0Bussou" target="_blank">/Nian0Bussou</a>
        </li>
        <li>
          Twitter<a href="https://x.com/NianToshi" target="_blank">/NianToshi</a>
        </li>
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
    </ul>`, 4);
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
    button.textContent = title;
    body.appendChild(button);
    const contentDiv = document.createElement('div');
    contentDiv.className = `content${index} div_`;
    contentDiv.innerHTML = content;
    body.appendChild(contentDiv);
    button.addEventListener('click', () => {
        contentDiv.classList.toggle('open');
    });
    body.appendChild(document.createElement('br'));
}
function nameIcon(name, icon) {
    return li_GetListElement(`${name} <img class="icon" src="/svgs/${icon}.svg" alt=" icon" />`);
}
function li_GetListElement(str) {
    return `<li>${str}</li>`;
}
// ensure the html page is serve from a server and not statically
fetch('/data')
    .then((response) => response.text())
    .then((data) => {
    const hbut = document.getElementById('homeButton');
    if (data == '69') {
        hbut.style.display = 'block';
        console.log('got the data, showing home button');
    }
    else {
        hbut.style.display = 'none';
        console.log('did not get the data, not showing home button');
    }
})
    .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
});
