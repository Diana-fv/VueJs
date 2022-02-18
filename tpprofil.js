Vue.createApp({
    data() {
        return {
            unImage: "https://picsum.photos/200/300",
            unNom: 'Mario',
            unAge: 45
            
        }
    },
    methods: {
        randomNumber(){
            const nombreRandom = Math.random()*10;
            return nombreRandom;
        },
        age10(){
            const age10 = this.unAge + 10;
            return age10;
                
        }
    }
    
}).mount('#profileUser');


/*Vue.createApp({

    data() {
        return {
            unImage: 'https://picsum.photos/200',
            unNom: 'Mario',
            unAge: 45
        };
    },
    
    methods: {
        randomNumber() {
            return Math.random()*10;
        },
        age10(){
            return this.unAge + 10;
            }
    }

}).mount('#ProfileUser');*/
