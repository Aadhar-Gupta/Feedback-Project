.
window.onload = function () {
    filterMU();
    feedbackCounter();
    let selector = document.getElementById("filter");

    selector.addEventListener("change", () => {
        switch (selector.value) {
            case "leastupvotes":
                filterLU();
                break;
            case "mostcomments":
                filterMC();
                break;
            case "leastcomments":
                filterLC();
                break;
            case "mostupvote":
                filterMU();
                break;
            default:
                filterMU();
                break;
        }
    });
}
function feedbackCounter() {
    // debugger
    const list = document.getElementById("Feedback-list");
    const listLength = list.getElementsByTagName("li").length;
    document.getElementById("count").textContent = listLength + " suggestions";
}
$(".add").on("click", function getData() {
    debugger
    const title = document.getElementById("title");
    const des = document.getElementById("des");
    const selection = document.getElementById("catagory");
    var randomDecimal = Math.floor((Math.random() * 100) + 1);
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    var NumberClass = Math.random();

    const data = {
        objectid: NumberClass,
        comments_count: randomNumber,
        upvotes: randomDecimal,
        title: title.value,
        des: des.value,
        category: selection.value
    }
    let temp = JSON.parse(localStorage.getItem("data"));
    let Final = temp ? temp : [];
    Final.push(data);
    localStorage.setItem("data", JSON.stringify(Final));
});
function CreateFeedback(filter) {
    const list = document.getElementById("Feedback-list");
    list.innerHTML = "";
    let tempList = JSON.parse(localStorage.getItem(filter));
    let DataList = tempList ? tempList : [];
    DataList.forEach(e => {
        const NewList = document.createElement("li");
        NewList.setAttribute("id", `${e.objectid}`);
        NewList.setAttribute("class", "feedList");

        NewList.innerHTML = `
        <a  style="text-decoration: none;" href="Details.html?objectId=${e.objectid}" >
        <div class="items">
        <div class="counter">
        <p id=votes >${e.upvotes}</p>
        </div>
        <div class="details">
        <p>${e.title}</p>
        <p>${e.des}</p>
        <button>${e.category}</button>
        </div>
        <div class="comment">
        <img src="messenger_1370907.png" alt="">
        <p>${e.comments_count}</p>
        </div>
        </div>
        </a>
`
        list.appendChild(NewList);

    });
    const Item = document.querySelectorAll(".feedList");
    // for (var i = 0; i < Item.length; i++) {
    //     Item[i].addEventListener("click", showDetails);
    // }
    Item.forEach((e) => {
        e.addEventListener("click", (ele) => {
            showDetails(ele);
        })
    });
    // document.getElementById(NumberClass).onclick = showDetails();
    // document.getElementById("NumberClass").addEventListener("Click", showDetails);
}
function filterMU() {
    // debugger;
    let temp = JSON.parse(localStorage.getItem("data"));
    let Final = temp ? temp : [];
    var sortedData = Final.sort(function (a, b) {
        return b.upvotes - a.upvotes
    });
    let abc = sortedData;

    localStorage.setItem("MUSorted", JSON.stringify(abc));
    CreateFeedback("MUSorted");
}
function filterLU() {
    // debugger;
    let temp = JSON.parse(localStorage.getItem("data"));
    let Final = temp ? temp : [];
    var sortedData = Final.sort(function (a, b) {
        return a.upvotes - b.upvotes
    });
    let abcd = sortedData;
    console.log(abcd);
    localStorage.setItem("LUSorted", JSON.stringify(abcd));
    CreateFeedback("LUSorted");
}
function filterLC() {
    // debugger;
    let temp = JSON.parse(localStorage.getItem("data"));
    let Final = temp ? temp : [];
    var sortedData = Final.sort(function (a, b) {
        return a.comments_count - b.comments_count
    });
    let abcdef = sortedData;
    console.log(abcdef);
    localStorage.setItem("LCSorted", JSON.stringify(abcdef));
    CreateFeedback("LCSorted");
}
function filterMC() {
    // debugger;
    let temp = JSON.parse(localStorage.getItem("data"));
    let Final = temp ? temp : [];
    var sortedData = Final.sort(function (a, b) {
        return b.comments_count - a.comments_count
    });
    let abcde = sortedData;
    console.log(abcde);
    localStorage.setItem("MCSorted", JSON.stringify(abcde));
    CreateFeedback("MCSorted");
}
$(".filter2").on("click", function filterList(event) {
    let final = JSON.parse(localStorage.getItem("data")) || [];
    const target = event.currentTarget.id;
    const list = document.getElementById("Feedback-list");
    sorting();

    final.forEach(item => {
        const element = document.getElementById(item.objectid);
        if (element) {
            if (item.category !== target) {
                list.removeChild(element);
            }
        }
    });
 feedbackCounter();
});
function sorting() {

    let selector = document.getElementById("filter");
    switch (selector.value) {
        case "leastupvotes":
            filterLU();
            break;
        case "mostcomments":
            filterMC();
            break;
        case "leastcomments":
            filterLC();
            break;
        case "mostupvote":
            filterMU();
            break;
        default:
            filterMU();
            break;
    }

}
$(".filter3").on("click", function filterList(event) {
    sorting();
    feedbackCounter();
});
