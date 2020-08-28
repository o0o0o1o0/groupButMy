let app = new Vue({
    el: '#app',
    data: { 
            priceAll: 0,
            itemList:[
                {
                    id:1,
                    itemName:'超級花枝丸',
                    imgUrl:'./img/cart/cart01.jpg',
                    price:80,
                    count:'0',
                },
                {
                    id:2,
                    itemName:'娘娘營養雞排',
                    imgUrl:'./img/cart/cart02.jpg',
                    price:70,
                    count:'0',
                },
                {
                    id:3,
                    itemName:'炸豆腐薯條',
                    imgUrl:'./img/cart/cart03.jpg',
                    price:100,
                    count:'0',
                },
                {
                    id:4,
                    itemName:'超級花枝丸',
                    imgUrl:'./img/cart/cart01.jpg',
                    price:80,
                    count:'0',
                },
                {
                    id:5,
                    itemName:'娘娘營養雞排',
                    imgUrl:'./img/cart/cart02.jpg',
                    price:70,
                    count:'0',
                }
            ],       
    },
    methods: { 
        addmin: function(item){
            if(item.count > 0){
                item.count--;
            }  
        },
        addplus: function(item){
            item.count++;
        },
        adddelete: function(index){
            this.itemList.splice(index,1);
        },
        deletecommodity: function(e){
            document.querySelector('.commodity').style.display ='none';
        },
        addtotalmoney(item){
            this.priceAll = this.priceAll - item.count * item.price;
            let add = item.count;
            add++;
            this.priceAll = this.priceAll + add * item.price;
        },
        mintotalmoney(item){
            this.priceAll = this.priceAll - item.count * item.price;
            let min = item.count;
            min--;
            this.priceAll = this.priceAll + min * item.price;
        }
        
    },
    computed: {  
        
    },
});