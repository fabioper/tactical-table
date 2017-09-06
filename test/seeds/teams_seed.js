const mongoose = require('mongoose')

module.exports = [
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'Clube de Regatas do Flamengo',
        city: 'Rio de Janeiro, RJ',
        country: 'Brazil',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Flamengo_logo.svg/200px-Flamengo_logo.svg.png'
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'Cruzeiro Esporte Clube',
        city: 'Belo Horizonte, MG',
        country: 'Brazil',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Escudo_Cruzeiro_Esporte_Clube_2016.png'
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'Sociedade Esportiva Palmeiras',
        city: 'São Paulo, SP',
        country: 'Brazil',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/200px-Palmeiras_logo.svg.png'
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'Sport Club Internacional',
        city: 'Porto Alegre, RS',
        country: 'Brazil',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sport_Club_Internacional_2009.svg/200px-Sport_Club_Internacional_2009.svg.png'
    }
]
