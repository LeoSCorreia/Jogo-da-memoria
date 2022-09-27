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

    createCardsFromTechs: function (techs) {
        this.cards = [];

        techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        });

        return this.cards.flatMap((pair) => pair);
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
};
