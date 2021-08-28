const btnDogs = document.querySelector('#dogs');
const btnHorses = document.querySelector('#horses');
const btnCats = document.querySelector('#cats');
const content = document.querySelector('.content');
const dogs = [
    {
        name: 'German Shepherd',
        description: 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany.',
        lifespan: 11,
        weight: 35,
        cover:'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
        id: 0
    },
    {
        name: 'Labrador Retriever',
        description: 'Labrador or Lab, is a breed of retriever-gun dog from the United Kingdom that was developed from imported Canadian fishing dogs. The Labrador is one of the most popular dog breeds in a number of countries in the world, particularly in the Western world.',
        lifespan: 11,
        weight: 30,
        cover:'https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg',
        id: 1
    },
    {
        name: 'Dachshund',
        description: 'The dachshund, also known as the wiener dog, badger dog, sausage dog, is a short-legged, long-bodied, hound-type dog breed. They may be smooth, wire, or long-haired.',
        lifespan: 15,
        weight: 10,
        cover:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3035-6334-4536-a366-653364373833__dog-4123618_1920.jpg',
        id: 2
    },
    {
        name: 'Shiba Inu',
        description: 'The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting.',
        lifespan: 13,
        weight: 9,
        cover:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/1200px-Taka_Shiba.jpg',
        id: 3

    },
    {
        name: 'Pug',
        description: 'The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often light brown or black, and a compact, square body with well-developed muscles',
        lifespan: 13,
        weight: 7,
        cover:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg',
        id: 4
    },
];

const horses = [
    {
        name: 'Arabian horse',
        description: 'The Arabian or Arab horse is a breed of horse that originated on the Arabian Peninsula. With a distinctive head shape and high tail carriage, the Arabian is one of the most easily recognizable horse breeds in the world.',
        height: 150,
        weight: 450,
        cover:'https://clubhorse.shop/wp-content/uploads/2021/03/Arabian-Horse-1.jpg?x13285',
        id: 0
    },
    {
        name: 'Clydesdale horse',
        description: 'The Clydesdale is a Scottish breed of draught horse. It is named for its area of origin, the Clydesdale or valley of the River Clyde, much of which is within the county of Lanarkshire.',
        height: 165,
        weight: 850,
        cover:'https://horse-canada.com/wp-content/uploads/2020/06/ClydesdaleAV4C0348BluffviewClydesdalesFriesiansFLSMALL.jpg',
        id: 1
    },
    {
        name: 'Shetland pony',
        description: 'The Shetland pony is a Scottish breed of pony originating in the Shetland Isles in the north of Scotland. It may stand up to 107 cm at the withers. It has a heavy coat and short legs, is strong for its size, and is used for riding, driving, and pack purposes.',
        height: 102,
        weight: 190,
        cover:'https://www.zooplus.de/magazin/wp-content/uploads/2021/04/AdobeStock_207391552.jpeg',
        id: 2
    },
];

const cats = [
    {
        name: 'Persian cat',
        description: 'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries. The first documented ancestors of the Persian were imported into Italy from Persia around 1620.',
        lifespan: 14,
        weight: 4.3,
        cover:'https://www.thesprucepets.com/thmb/19Da7Q1AhAPC7rlSxDpk-VSF6lc=/3436x2577/smart/filters:no_upscale()/brown-persian-cat-laying-on-edge-of-green-carpet-456750383-581211b53df78c2c7320b40b.jpg',
        id: 0
    },
    {
        name: 'Maine Coon',
        description: 'The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the US state of Maine, where it is the official state cat.',
        lifespan: 14,
        weight: 7.1,
        cover:'https://fera24.de/images/companies/1/BLOG/pd0YHCmc.jpeg?1571148307699',
        id: 1
    },
    {
        name: 'Abyssinian',
        description: 'The Abyssinian is a breed of domestic short-haired cat with a distinctive "ticked" tabby coat, in which individual hairs are banded with different colors. In nomenclature terms, they are also known as simply Abys. The breed is named for Abyssinia, where it is believed to have originated.',
        lifespan: 14,
        weight: 4.5,
        cover: 'https://thepedigreepaws.b-cdn.net/web/kitten_breed/2/1594151782-abyssinian-domestic-short-haired-cat.jpg',
        id: 2

    },
    {
        name: 'Siamese cat',
        description: 'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand, the original Siamese became one of the most popular breeds in Europe and North America in the 19th century.',
        lifespan: 14,
        weight: 5,
        cover:'https://nitrocdn.com/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/static/optimized/rev-5a4d1b8/image/siamese-cat-cover.jpg',
        id: 3
    },
    {
        name: 'Russian Blue',
        description: 'The Russian Blue Cat, commonly referred to as just Russian Blue, is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. Their short, dense coat, which stands out from the body, has been the hallmark of the Russian breed for more than a century.',
        lifespan: 14,
        weight: 5.2,
        cover:'https://www.omlet.de/images/cache/1200/800/russian-blue-cats-mishka-by-galina-baker-zavadskaya-438e2c0b_f078c6ff.jpg',
        id: 4
    },
    
];

const animals = {dogs, horses, cats};

// btnDogs.onclick = ()=>{
//     createCard(dogs);
// }
//
// btnHorses.onclick = () =>{
//     createCard(horses);
// }
//
// btnCats.onclick = () =>{
//     createCard(cats);
// }
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.onclick=(event)=>{
    content.innerHTML = ''
    createCard(event.target.id)}
);

function createCard(arr){
    for(let item of animals[arr]){
        const div = document.createElement('div');
        div.className = 'cards';
        div.innerHTML += `<div class='img-wrapper'><img src=${item.cover}></div><h3>${item.name}</h3>`;
        content.append(div);
    }
}
/* 
const breeds = content.getElementsByClassName('.cards');
const right = document.querySelector('#right');

for(breed of breeds){
    breed.onclick = (event)=>{
        right.innerHTML = '';
        const id = +event.currentTarget.id;
        for(let i; i < breed.length; i++){
            const element = animal[i].find((b)=> b.id === id);
            const detail = document.createElement('div');
            detail.className = "detail";
            detail.innerHTML = `${element.description}`;
            right.append(detail);
    }
}
} */