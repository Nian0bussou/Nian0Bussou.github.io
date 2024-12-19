
enum Backgrounds {
  Back1 = "back-w-city-skyline.jpg",
  Back2 = "back.jpg",
  Back3 = "back1.png",
  Back4 = "backk.jpg",
}


function appendList(elem: HTMLElement, ls: HTMLElement[]) {
  ls.forEach((value) => elem.appendChild(value))
}
function createBR() {
  return document.createElement('br')
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body

  const title = document.createElement('h1')
  title.innerHTML = "ニェンの<ruby>洞窟<rt>どうくつ</rt></ruby>"
  title.style.backdropFilter = "blur(10px)";
  title.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  title.style.borderRadius = "10px";
  title.style.color = "beige"
  title.style.color = "rgb(221, 206, 255)";
  title.style.marginBottom = "1em"
  title.style.marginLeft = "auto"
  title.style.marginRight = "auto"
  title.style.padding = "30px";
  title.style.width = "max-content";

  // Create the div with paragraph
  const div = document.createElement('div')
  div.className = 'div_'
  div.style.width = "35%";
  div.style.marginLeft = "1em"
  div.style.marginBottom = "1em"
  const imp = document.createElement('p')
  imp.innerHTML = `
    我はニェン、そしてカナダに住んでいます。レズビアンです。プログラミングとゲームをすることがすきです。
  `
  div.appendChild(imp)


  appendList(body, [
    createBR(),
    title,
    createBR(),
    div,
    createBR(),
    // collapsible sections
    createCollapsibleAndContent('ソーシャル', `<ul>
        ${li_GetListElement(`Discord/ ashita_nian`)},
        ${li_GetListElement(`Github/ ${a_GetAElement("https://github.com/Nian0Bussou", "Nian0Bussou")}`)}
        ${li_GetListElement(`Twitter/ ${a_GetAElement("https://x.com/NianToshi", "NianToshi")}`)}
        ${li_GetListElement(`Bluesky/ ${a_GetAElement("https://bsky.app/profile/ashita-nian.bsky.social", "ashita-nian")}`)}
      </ul>
      <sub><b><i> I have no other way of being contacted</i></b></sub>
      `, 0
    ),
    createCollapsibleAndContent('読める言語', `<ul>
        ${li_GetListElement("フランス語")}
        ${li_GetListElement("英語")}
        ${li_GetListElement("日本語")}
      </ul>`, 1
    ),
    createCollapsibleAndContent('プログラミング言語の経験順にランキング', `<ol>
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
      </ol>`, 2
    ),
    createCollapsibleAndContent('好きです', `<ul>
        ${li_GetListElement('Arcane')}
        ${li_GetListElement("Arknights' lore")}
        ${li_GetListElement("Wis'adel")}
        ${li_GetListElement('Overwatch 2')}
      </ul>`, 3
    ),
    createCollapsibleAndContent('好きない', `<ul>
        ${li_GetListElement('人')}
        ${li_GetListElement('LoL')}
      </ul>`, 4
    ),
    createCollapsibleAndContent('便利（べんり）連関（れんかん）', `<ul>
        ${li_GetListElement(`${a_GetAElement("https://translate.google.com", "translate")}`)}
        ${li_GetListElement(`${a_GetAElement("https://www.reddit.com", "jlailu")}`)}
        ${li_GetListElement(`${a_GetAElement("https://jisho.org", "辞書")}`)}
        ${li_GetListElement(`${a_GetAElement("https://sapling.ai/lang/japanese", "sapling")}`)}
      </ul>`, 3
    )])
})


function createCollapsibleAndContent(title: string, content: string, index: number): HTMLElement {
  const style = document.createElement('style')
  style.textContent = `
                        .content${index} {
                            display: none; /* Start hidden */
                        }
                        .content${index}.open {
                            display: block; /* Show when open */
                        }
                        `
  document.head.appendChild(style)

  const button = document.createElement('button')
  button.className = `collapsible${index} but_tits button_`
  button.style.marginLeft = "1em";
  button.style.marginBottom = "1em";
  button.textContent = title

  const contentDiv = document.createElement('div')
  contentDiv.className = `content${index} div_`
  contentDiv.innerHTML = content
  contentDiv.style.marginLeft = "2em"
  contentDiv.style.marginBottom = "1em"
  button.addEventListener('click', () => { contentDiv.classList.toggle('open') })

  const div = document.createElement('div')
  appendList(div, [button, contentDiv, createBR()])

  return div

}
function nameIcon(name: string, icon: string) {
  return li_GetListElement(
    `${name} <img class="icon" src="/svgs/${icon}.svg" alt=" icon" />`
  )
}
function li_GetListElement(str: string) {
  return `<li>${str}</li>`
}
function a_GetAElement(link: string, name: string) {
  return `<a href="${link}" target="_blank">${name}</a>`
}
function setCookie(name: string, value: Backgrounds, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Calculate expiry date
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function getCookieWithEnum(name: string): Backgrounds | null {
  const cookieArray = document.cookie.split(';');
  for (const cookie of cookieArray) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) {
      const decodedValue = decodeURIComponent(value) as Backgrounds;
      if (Object.values(Backgrounds).includes(decodedValue)) { // Ensure it's a valid enum value
        return decodedValue;
      }
    }
  }
  return null; // Return null if not found or invalid
}
