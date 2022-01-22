var content = [];
const datacount = 7;

//Seed Data
for (let i = 1; i <= datacount; i++) {
    content.push({ slno: i, title: `Title ${i}` })
}

//Function to swap current to previous
function up(idx) {
    let temp = content[idx - 1];
    content[idx - 1] = content[idx];
    content[idx] = temp;
    renderContent()
}

//Function to swap current to next
function down(idx) {
    let temp = content[idx + 1];
    content[idx + 1] = content[idx];
    content[idx] = temp;
    renderContent()
}

//render content
function renderContent() {
    // Title template
    var html = [`<div class="row row-header">
        <div class="Cell">Sl No</div>
        <div class="Cell">Title</div>
        <div class="Cell">Action</div>
        </div>`];
    var arrlen = content.length;
    content.forEach((elem, idx) => {
        let updisable = "";
        let downdisable = "";
        if (idx === 0) {
            updisable = "disabled"
        }
        if (idx === arrlen - 1) {
            downdisable = "disabled"
        }
        //Template for each row
        let line = `<div class="row">
            <div class="Cell">${elem.slno}</div>
            <div class="Cell"> ${elem.title}</div>
            <div class="Cell">
                    <button class="up" onclick="up(${idx});" ${updisable}>Up</button>
                    <button class="down" onclick="down(${idx});" ${downdisable}>Down</button>
            </div>
        </div>`;
        console.log(line);
        console.log("row added");
        html.push(line);
    });
    var canvas = document.getElementById('canvas');
    canvas.innerHTML = html.join(''); //Array to html and write into canvas
}