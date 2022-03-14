const app = new Vue({
    el: '#root',
    data: {
        interVar: null,
        indice: 0,
        arrayObj :[
            {
                title: 'Svezia',
                item: 'img/01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Svizzera',
                item: 'img/02.jpg',
                text: 'Lorem ipsum',

            },
            {
                title: 'Gran Bretagna',
                item: 'img/03.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Germania',
                item: 'img/04.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                title: 'Paradise',
                item: 'img/05.jpg',
                text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ],
        
    },
    methods: {
        setIndice(index){
            this.indice = index;
        },

        slideRev(){
            if (this.indice != this.arrayObj.length - 1){
                this.indice++;
            } else{
                this.indice = 0;
            }
            
        },
        slide() {
            if (this.indice != 0){
                this.indice--;
            } else {
                this.indice = this.arrayObj.length - 1;
            }
        },
        stopSlider(){
            clearInterval(this.interVar)
        },
        startSlider(){
            this.interVar = setInterval(this.slideRev, 3000)
        }
    },
    mounted(){
        this.startSlider()
    }
})