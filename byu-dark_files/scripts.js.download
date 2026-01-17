let pdfs = [
    {name: 'events.pdf'},
    {name:  'conditionals.pdf'},
    {name: 'head_element.pdf'}
];

function textTemplate(pdf){
    return `<a href="index.html" id="back">Back</a>
    <iframe 
        src="${pdf}.pdf#toolbar=1&navpanes=0&scrollbar=1" 
        style="border: none;"
        >
        Your browser does not support iframes.
        </iframe><a href="index.html" id="back">Back</a>`;
}

function renderJsText(pdf){
    let html = textTemplate(pdf);
    js_content_tab.innerHTML = html;
}
function renderHtmlText(pdf){
    let html = textTemplate(pdf);
    html_content_tab.innerHTML = html;
}

let btn = document.querySelectorAll('button');
let js_content_tab = document.querySelector('#js_content');
let html_content_tab = document.querySelector('#html_content');

let original = `<input type="radio" id="tab1" name="tabs" checked>
        <input type="radio" id="tab2" name="tabs">
      
        <div class="tabs">
          <label for="tab1" class="tab-label">JavaScript</label>
          <label for="tab2" class="tab-label">HTML/CSS</label>
        </div>
      
        <div class="tab-content" id="js_content">
          <h2>JS Topics</h2>
          <div class="flex">
            <button class='js' id="what_is_javascript">What is JS?</button>
            <button class='js' id="arrays">Arrays</button>
            <button class='js' id="conditionals">Conditionals</button>
            <button class='js' id="dom">DOM</button>
            <button class='js' id="events">Events</button>
            <button class='js' id="functions">Functions</button>
            <button class='js' id="objects">Objects</button>
            <button class='js' id="sorting">Sorting</button>
            <button class='js' id="variables_constants">Variables/Constants</button>
          </div>
        </div>
      
        <div class="tab-content" id="html_content">
          <h2>HTML/CSS Topics</h2>
          <div class="flex">
            <button class='html' id="accessibility">Accessibility</button>
            <button class='html' id="css_selectors">CSS Selectors</button>
            <button class='html' id="flexbox">Flexbox</button>
            <button class='html' id="forms">Forms</button>
            <button class='html' id="head_element">Head Element</button>
            <button class='html' id="mobile-first_media-queries">Mobile First/Media Queries</button>
            <button class='html' id="reset_normalize">Reset/Normalize</button>
          </div>
        </div>`;

// btn.forEach(button =>{
//     button.addEventListener('click', function(e){
//         let pdf = e.target.id;
//         console.log(pdf);
//         console.log(e.target.className);
//         if (e.target.className == 'ponder') {
//             js_content_tab.innerHTML = "";
//             renderJsText(pdf);
//         } else if (e.target.className == 'prove') {
//             html_content_tab.innerHTML = "";
//             renderHtmlText(pdf);
//         };        
//     })
// })

let year = new Date();
document.querySelector('#year').textContent = year.getFullYear();


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelectorAll(".button");
  
  
  toggleButton.forEach(button => {
    button.addEventListener("click", () => {
      const contentId = button.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      if (!content) {
        console.warn(`No content element found with ID: ${contentId}`);
        return;
      }

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      content.hidden = expanded;

    });
  })

  const copyBtn = document.querySelectorAll(".copy-button");

  copyBtn.forEach(function(copyBtn){
    copyBtn.addEventListener("click", () => {
    const codeBlock = copyBtn.nextElementSibling?.querySelector("code");
    if (!codeBlock) return;
    const codeText = codeBlock.innerText;

    
    navigator.clipboard.writeText(codeText).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {copyBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 0.4em;">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/>
              </svg>
              Copy Code
            `;
          }, 1500);
    }).catch(err => {
      console.error("Failed to copy code: ", err);
    });
    
  });
  })
  
})


