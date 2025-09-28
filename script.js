const kaydetBtn = document.getElementById("kaydet");
const silBtn = document.getElementById("sil");
const notTextArea = document.getElementById("not");



window.addEventListener("load", () => {
    const kayitNot = localStorage.getItem("not");
    if(kayitNot) {
        notTextArea.value =kayitNot
    }
})
// kaydet
kaydetBtn.addEventListener("click", () => {
    const not = notTextArea.value

    localStorage.setItem("not", not);
    
    const blob = new Blob([not], {type: "text/plain"});

    const url = URL.createObjectURL(blob)
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "not.txt";
    a.click();


    URL.revokeObjectURL(url);
})


silBtn.addEventListener("click", () => {
    notTextArea.value = "",
    localStorage.removeItem("not");
})


notTextArea.addEventListener("input", () => {
    localStorage.setItem("not", notTextArea.value)
})
