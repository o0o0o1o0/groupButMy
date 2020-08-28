//========================================攤商頁籤切換功能========================================//
function openClass(evt, className) {
    var i, x, tablinks;
    x = document.getElementsByClassName("class");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(className).style.display = "grid";
    evt.currentTarget.classList.add("active");
}
var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

//========================================動態消息勾選刪除功能========================================//
var input = document.querySelectorAll('.delete');
var len = input.length;
var btn = document.getElementById('del');
var allbtn = document.getElementById('check_all');
    allbtn.onclick = function(){
        input.forEach((e)=>{
            if(e.checked ==true){
                e.checked = false
            }
            else{
                e.checked = true
            }
        })
    }
    btn.onclick = function(){
        input.forEach((e,index)=>{
            if(e.checked){
                e.parentNode.remove();
            }
        })
    }
//========================================攤商會員訂單收合功能========================================//
$(document).ready(function(){
    $(document).on('click', '.veorder .veicon', function(){
        if ($(this).parents('.veorder').hasClass('scale')) {
            $(this).parents('.veorder').removeClass('scale').find('.veorderTitle').slideUp();
        } else {
            $(this).parents('.veorder').addClass('scale').find('.veorderTitle').slideDown();
        }
    })
})

//訂單tab
$(document).on("click",".btn-rect_pk2",function(){
    $("#order1").show();
    $("#order2").show();
    $("#order3").show();
})
$(document).on("click",".btn-rect_gr2",function(){
    $("#order1").hide();
    $("#order2").hide();
    $("#order3").show();
})
//========================================廣告JS========================================//
const imagePreview = document.querySelector('[data-target="image-preview"]');
const spinner = document.querySelector('[data-target="spinner"]');
const fileUploader = document.querySelector('[data-target="file-uploader"]');
fileUploader.addEventListener("change", handleFileUpload);

async function handleFileUpload(e) {
    try {
    const file = e.target.files[0];
    setUploading(true);
    if (!file) return;

    const beforeUploadCheck = await beforeUpload(file);
    if (!beforeUploadCheck.isValid) throw beforeUploadCheck.errorMessages;

    const arrayBuffer = await getArrayBuffer(file);
    const response = await uploadFileAJAX(arrayBuffer);
    
    alert("圖片上傳成功!");
    showPreviewImage(file);
    } catch (error) {
    alert(error);
    console.log("Catch Error: ", error);
    } finally {
    e.target.value = '';  
    setUploading(false);
    }
}

function showPreviewImage(fileObj) {
    const image = URL.createObjectURL(fileObj);
    imagePreview.src = image;
}

function getArrayBuffer(fileObj) {
return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
        resolve(reader.result);
    });

    reader.addEventListener("error", () => {
        reject("error occurred in getArrayBuffer");
    });

    reader.readAsArrayBuffer(fileObj);
});
}

function uploadFileAJAX(arrayBuffer) {
return fetch("https://jsonplaceholder.typicode.com/posts/", {
    headers: {
    version: 1,
    "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
    imageId: 1,
    icon: Array.from(new Uint8Array(arrayBuffer))
    })
})
    .then(res => {
        if (!res.ok) {
        throw res.statusText;
    }
        return res.json();
    })
        .then(data => data)
        .catch(err => console.log("err", err));
}
function beforeUpload(fileObject) {
    return new Promise(resolve => {
    const validFileTypes = ["image/jpeg", "image/png"];
    const isValidFileType = validFileTypes.includes(fileObject.type);
    let errorMessages = [];

    if (!isValidFileType) {
        errorMessages.push("只能上傳JPG or PNG檔!");
    }

    const isValidFileSize = fileObject.size / 1024 / 1024 < 2;
    if (!isValidFileSize) {
        errorMessages.push("圖片不能超過2MB!");
    }

    resolve({
        isValid: isValidFileType && isValidFileSize,
        errorMessages: errorMessages.join("\n")
    });
    });
}

function setUploading(isUploading) {
    if (isUploading === true) {
        spinner.classList.add("opacity-1");
    } else {
        spinner.classList.remove("opacity-1");
    }
}


var x = document.getElementById("last");
var y = document.getElementById("next");

function next(){
    x.style.left = "-110%";
    y.style.left = "10%";
}
function last(){
    x.style.left = "10%";
    y.style.left = "110%";
}

      // 燈箱
$(function(){
    $(".open").on("click", function(){
        $("div.ad-modal").addClass("-on");
    });
    $(".close").on("click", function(){
        $("div.ad-modal").removeClass("-on ");
    });
});

$(function(){
    $("button.adtab").on("click", function(e){
        e.preventDefault();
        $("div.adtab").removeClass("-adon");
        $("div.adtab." + $(this).attr("data-target")).addClass("-adon");
    });
});

    // 看詳細燈箱
var admodal = document.getElementById("myadModal");
var button = document.getElementById("myad");
button.onclick = function(){
    admodal.style.display = "block";
}

var span = document.getElementsByClassName("adclose")[0];
span.onclick = function() {
    admodal.style.display = "none";
}

new Vue({
    el: '#app',
    data: {
    picked: '500',
    },
    method: {

    },
    computed: {

    },
});
//========================================我的店面JS_詩珽========================================//
function addItem(){
    let menu = document.querySelector("#menu");
    let btnNewItem = document.getElementById("btnNewItem");
    let item =  document.querySelector("#item");
    let newItem = item.cloneNode(true);

    newItem.style.display="";
    newItem.getElementsByTagName("i")[0].onclick = removeItem;  

    menu.appendChild(newItem);
}
//設定點按垃圾桶就移除欄位的功能
function removeItem(e){
    let menu = document.querySelector("#menu");
    menu.removeChild(e.target.parentNode.parentNode);
}

window.addEventListener("load", function(){
    document.getElementById("btnNewItem").onclick = addItem;
    document.querySelector("#menu tr td i").onclick = removeItem;
})
//========================================攤商帳戶========================================//
$(function(){
    $("button.utvdtab").on("click", function(e){
        e.preventDefault();
        $(this).closest("div").find("button.utvdtab").removeClass("active");
        $(this).addClass("active");

        $("div.utvdtab").removeClass("active");
        $("div.utvdtab." + $(this).attr("data-target")).addClass("active");
    });
});