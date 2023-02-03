import gameImg from '../assets/images/categories/games.jpg'
import eletronicsImg from '../assets/images/categories/tech.jpg'
import carImg from '../assets/images/categories/car.jpg'
import officeImg from '../assets/images/categories/office.jpg'
import soundImg from '../assets/images/categories/sound.jpg'

export default [
    {
        id: 1,
        path: 'eletronics',
        category: 'eletronics',
        title: 'Eletrônicos',
        src: eletronicsImg,
        description:
            'Os melhores e mais atuais dispositivos eletrônicos estão aqui!',
    },
    {
        id: 2,
        path: 'car',
        category: 'car',
        title: 'Automotivo',
        src: carImg,
        description:
            'Encontre aqui equipamentos para deixar seu carro com a sua cara!',
    },
    {
        id: 3,
        path: 'games',
        category: 'games',
        title: 'Jogos',
        src: gameImg,
        description: 'Adquira os consoles e jogos mais atuais do mercado !',
    },
    {
        id: 4,
        path: 'office',
        category: 'office',
        title: 'Escritório',
        src: officeImg,
        description: 'Tudo para o que escritório ficar incrível!',
    },
    {
        id: 5,
        path: 'sound',
        category: 'sound',
        title: 'Som e imagem',
        src: soundImg,
        description: 'Curta suas músicas e seus filmes com a melhor qualidade!',
    },
]
