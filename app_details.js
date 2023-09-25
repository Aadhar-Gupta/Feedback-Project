const urlParams = new URLSearchParams(window.location.search);
const objectID = urlParams.get('objectId');
window.onload = function () {
    let Temp = JSON.parse(localStorage.getItem("data"));

    let final = Temp ? Temp : [];

    if (final.length > 0) {
        for (var i = 0; i <= final.length - 1; i++) {
            if (final[i].objectid == objectID) {
                makeDiv(final[i])
            }
        }
    }

    function makeDiv(data) {
        const target = document.getElementById("target");
        target.innerHTML = "";
        const newElement = document.createElement("div");
        newElement.setAttribute("style", "display: contents;")
        newElement.innerHTML = `                         
  <div class="voteComponent_suggestionVoteContainer__Xvij+ tag-vote"><svg width="10" height="7"
    xmlns="http://www.w3.org/2000/svg" stroke="#4661E6">
    <path d="M1 6l4-4 4 4" stroke="current" stroke-width="2" fill="none" fill-rule="evenodd">
    </path>
</svg>
<h4 >${data.upvotes}</h4>
</div>
<div  class="suggestionCard_cardBody__Or-3e">
<div class="suggestionCard_content__dlsh7">
    <h3 class="dark-font">${data.title}</h3>
    <p class="body-2 light-font">${data.des}</p>
        <div class="suggestionCard_tagContainer__9bR9s tag-vote"><span class="tag">${data.category}</span></div>
    </div>
    <div class="suggestionCard_commentCount__2TuIK"><svg width="18" height="16"
        xmlns="http://www.w3.org/2000/svg">
        <path
        d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
        fill="#CDD2EE" fill-rule="nonzero"></path>
    </svg>
<h4 id="suggestionCard_commentCount__2TuIK">${data.comments_count}</h4>
</div>
</div>`

        target.appendChild(newElement);

    }

    CharacterCount()
}
function CharacterCount() {
    const target = document.getElementById("count");
    var count = 250;
  $("#area").on("keydown", function (e) {
        if (e.key !== "Backspace") {
            count = count > 0 ? count - 1 : count + 0;
            target.innerHTML = count + " characters left";
        }
        else {
            console.log("Backspace detected");
            count = count < 250 ? count + 1 : count + 0;
            target.innerHTML = count + " characters left";
        }
    })
}