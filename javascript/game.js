let game = {
    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react',
    ],
    cards: null,

    createCardsFromTechs: function () {
        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        });

        this.cards = this.cards.flatMap((pair) => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairFromTech: function (tech) {
        return [
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },
        ];
    },

    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },
    shuffleCards: function (cards) {
        let curruntIndex = this.cards.length;
        let randomIndex = 0;

        while (curruntIndex !== 0) {
            randomIndex = Math.floor(Math.random() * curruntIndex);
            curruntIndex--;

            [this.cards[randomIndex], this.cards[curruntIndex]] = [
                this.cards[curruntIndex],
                this.cards[randomIndex],
            ];
        }
    },
};
