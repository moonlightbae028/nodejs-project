const main = {
    nom: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    services: (req, res) => {
        res.render('services');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    portfolio: (req, res) => {
        res.render('portfolio');
    }
};

module.exports = main;
