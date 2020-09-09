//========================================攤商頁籤切換功能========================================//
function openClass(evt, className) {
    let i, x, tablinks;
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
let mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();
//========================================更換頭貼功能功能========================================//
var chM = new Vue({
    el: '#chM',
    data: {
        userInfo: {
            avatar: './img/general_member/貓_頭貼.png' //原始圖片
        },
    },
    methods: {
        uploadHeadImg: function () {                //打開圖片上傳
            this.$el.querySelector('.hiddenInput').click()
        },
        handleFile: function (e) {                  //顯示圖片
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
                this.userInfo.avatar = res.result
            }
            reader.readAsDataURL(file)
        },
    }
})