//========================================動態消息勾選刪除功能1========================================//
var aaa = new Vue({
    el: "#mnDiv",
    data:{
        aList: [
            {
                user: "下港明鵬臭豆腐1",
                comment: "感謝遊客1給我們的評價，下次我們也會繼續努力",
            },
            {
                user: "下港明鵬臭豆腐2",
                comment: "感謝遊客2給我們的評價，下次我們也會繼續努力",
            },
            {
                user: "下港明鵬臭豆腐3",
                comment: "感謝遊客3給我們的評價，下次我們也會繼續努力",
            },
            {
                user: "下港明鵬臭豆腐4",
                comment: "感謝遊客4給我們的評價，下次我們也會繼續努力",
            },
            {
                user: "下港明鵬臭豆腐5",
                comment: "感謝遊客5給我們的評價，下次我們也會繼續努力",
            },
        ]
    },
    methods: {
        deleter(index){
            this.aList.splice(index,1)
        }
    } 
    
})
//========================================動態消息勾選刪除功能2========================================//
var input = document.querySelectorAll('.chk_read');
var btn = document.getElementById('del');
// var btn_sel = document.querySelectorAll('.del_button');
var allbtn = document.getElementById('check_all');
// var arr_mn = document.querySelectorAll('.mn_div_in');
// var new_btn_sel = [...btn_sel];
// var new_arr_mn = [...arr_mn];
allbtn.onclick = () => {
    input.forEach((e)=>{
        if(e.checked ==true){
            e.checked = false
        }
        else{
            e.checked = true
        }
    })
}
btn.onclick = () => {
    let result = confirm('你不要後悔就好');
    if(result){
        input.forEach((e,index) => {
            if(e.checked){
                e.parentNode.remove();
            }
        })
    }
}
// for(let i=0;i<=new_btn_sel.length;i++){
//     // console.log(new_btn_sel[i]);
//     let a
//     new_btn_sel[i].onclick = () => {
//         a = i
//         // new_arr_mn.find(item => item.remove());
//         console.log('i:',i)
//         console.log('new_btn_sel[i]:', new_btn_sel[i])
//         var el = document.getElementById('div-02');
//         el.remove();
//     }
//     new_arr_mn.splice(a, 1)
// }
// btn_sel.onclick = () => {
//     input.forEach((e,index) => {
//         e.parentNode.remove();
//     })
// }
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
//========================================攤商會員動態消息收合功能========================================//
$(document).ready(function(){
    $(document).on('click', '.re_msg .re_msg_btn', function(){
        if ($(this).parents('.re_msg').hasClass('message')) {
            $(this).parents('.re_msg').removeClass('message').find('.mn_text_re').slideUp();
        } else {
            $(this).parents('.re_msg').addClass('message').find('.mn_text_re').slideDown();
        }
    })
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

// new Vue({
//     el: '#app',
//     data: {
//     picked: '500',
//     },
//     method: {

//     },
//     computed: {

//     },
// });

//=======================================我的店面＿新增＆刪除品項功能========================//
function addItem(){
    let menu_all = document.querySelector(".menu_all");
    let btnNewItem = document.getElementById("btnNewItem");
    let item =  document.querySelector(".clone_item");
    let newItem = item.cloneNode(true);

    newItem.style.display="";
    menu_all.insertBefore(newItem, btnNewItem);

    newItem.getElementsByTagName("i")[1].onclick = removeItem;
    
}
//設定點按x就移除欄位的功能
function removeItem(e){
    e.target.parentNode.parentNode.remove();
}

window.addEventListener("load", function(){
    document.getElementById("btnNewItem").onclick = addItem;
    menu.getElementsByTagName("i")[1].onclick = removeItem; 
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
