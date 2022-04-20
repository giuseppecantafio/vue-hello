const app = new Vue({
    el: '#root',
    data: {
        titolo: '',
        nome: '',
        immagine: 'https://i.picsum.photos/id/266/200/300.jpg?hmac=nAZYC6vsnq4fuOzfge00Ylvi9ALRMbMA8wxBxIPTjs0',
        isHidden: true,
        isNoActive: false,

    },
    methods: {
        bottoneCliccato(nome) {
            this.titolo = nome;
            this.isHidden = false;
            this.isNoActive = true;
            return nome;

        }
    }, 
})