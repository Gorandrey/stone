new Vue({
    el: '#carusel',
    data:{
        slides: [
            './images/karusel/1.png',
            './images/karusel/2.png',
            './images/karusel/3.png',
            './images/karusel/4.png',
            './images/karusel/5.png'

        ],
        current: 0,
        width: 795,
        timer: 0
    },
    methods: {
        nextSlide: function () {
            this.current++;
            if (this.current >= this.slides.length)
                this.current = 0;
            this.resetPlay();
        },
        prevSlide: function () {
            this.current--;
            if (this.current < 0)
                this.current--;
            this.resetPlay();
        },
        selectSlide: function (i) {
            this.current = i;
            this.resetPlay();
        },
        resetPlay: function () {
            clearInterval(this.timer);
            this.play();
        },
        play: function () {
            let app = this;
            this.timer = setInterval(function () {
                app.nextSlide();
            }, 2000);
        }
    },
    created: function () {
        this.play();
    }
});