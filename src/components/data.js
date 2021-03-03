import Image from 'react-bootstrap/Image';

//Import Img Pizzas
import Tropical from '../img/flavors/Tropical.png';
import Hawaina from '../img/flavors/hawaina.png';
import Champiñones from '../img/flavors/champiñones.png';
import Carnes from '../img/flavors/carnes.png';
import Napolitana from '../img/flavors/napolitana.png';
import Vegetariana from '../img/flavors/vegetariana.png';
import Chocolate from '../img/flavors/chocolate.png';
//import BBQ from '../img/flavors/bbq.png';
//import Maiz from '../../img/flavors/hawaina.png';
//import Criolla from '../img/flavors/hawaina.png';
import Mexicana from '../img/flavors/mexicana.png';
//Import Img Hamburger
import Hamburguer from '../img/flavors/hamburger.png';
//Import Img Hotdogs
import HotDog from '../img/flavors/hotdog.png';
//Import Img Others
import PapaFrancesa from '../img/flavors/papafrancesa.jpg';
import SalchiPapa from '../img/flavors/salchipapa.jpeg';
import Lasagna from '../img/flavors/lasaña.png';
import Panzerotti from '../img/flavors/panzerotti.jpeg';
//Import Img Drinks
import JugosLeche from '../img/flavors/jugoleche.jpeg';
import JugosAgua from '../img/flavors/jugoagua.jpg';
import Gaseosa from '../img/flavors/gaseosas-postobon.png';



const data = {
    products: [
        {
            id: '1',
            name: 'Tropical',
            ingredients: 'Piña, Cerezas, Uvas, Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Tropical} className='PImage'/>
        },
        {
            id: '2',
            name: 'Hawaiana',
            ingredients: 'Piña, Jamon, Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Hawaina} className='PImage'/>
        },
        {
            id: '3',
            name: 'Pollo Champiñones',
            ingredients: 'Champiñon, Pollo, Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Champiñones} className='PImage'/>
        },
        {
            id: '4',
            name: 'Carnes',
            ingredients: 'Jamon, Salami, Peperoni, QuesoT',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Carnes} className='PImage'/>
        },
        {
            id: '5',
            name: 'Napolitana',
            ingredients: 'Tomate, Oregano, Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Napolitana} className='PImage'/>
        },
        {
            id: '6',
            name: 'Vegetariana',
            ingredients: 'Tomate, Piemientos, Champiñon, Cebolla, Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Vegetariana} className='PImage'/>
        },
        {
            id: '7',
            name: 'Chocolate',
            ingredients: 'Chocolate, Queso Extra',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Chocolate} className='PImage'/>
        },
        {
            id: '8',
            name: 'BBQ',
            ingredients: 'Pollo, Tocineta, SalsaBBQ Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Hawaina} className='PImage'/>
        },
        {
            id: '11',
            name: 'Mexicana',
            ingredients: 'Carne Molida, Tomate, Jalapeño, Maizitos, Pimenton, Queso',
            pricesmall: 7000,
            pricemedium: 28000,
            pricebig: 30000,
            amount: 0,
            category: 'Pizza',
            Image: <Image src={Mexicana} className='PImage'/>
        },
        {
            id: '12',
            name: 'Hamburguesa Sencilla',
            ingredients: 'Carne Koller, Queso, Pan Comapan, Cebolla, Tomate, Lechugas, Salsas',
            pricesmall: 5000,
            amount: 0,
            category: 'Hamburguer',
            Image: <Image src={Hamburguer} className='PImage'/>
        },
        {
            id: '13',
            name: 'Hamburguesa Especial',
            ingredients: 'Carne Koller, Queso, Pan Comapan, Cebolla, Tomate, Lechugas, Champiñon, Pollo, Salsas',
            pricesmall: 6000,
            amount: 0,
            category: 'Hamburguer',
            Image: <Image src={Hamburguer} className='PImage'/>
        },
        {
            id: '14',
            name: 'HotDog Sencillo',
            ingredients: 'Salchica Americana, Pan perro, Huevo de codorniz, Queso',
            pricesmall: 5000,
            amount: 0,
            category: 'HotDog',
            Image: <Image src={HotDog} className='PImage'/>
        },
        {
            id: '15',
            name: 'HotDog Especial',
            ingredients: 'Salchica Americana, Pan perro, Huevo de codorniz, Pollo, Queso',
            pricesmall: 6000,
            amount: 0,
            category: 'HotDog',
            Image: <Image src={HotDog} className='PImage'/>
        },
        {
            id: '16',
            name: 'Papas a la Francesa',
            ingredients: 'papas fritas, sal',
            pricesmall: 2500,
            amount: 0,
            category: 'Other',
            Image: <Image src={PapaFrancesa} className='PImage'/>
        },
        {
            id: '17',
            name: 'SalchiPapa',
            ingredients: 'Salchica Americana, Papa a la Francesa, Huevos de Codorniz, Salsas',
            pricesmall: 5000,
            amount: 0,
            category: 'Other',
            Image: <Image src={SalchiPapa} className='PImage'/>
        },
        {
            id: '18',
            name: 'Lasagna',
            ingredients: 'Pasta, Queso, Jamon, Champiñon, Pollo, Carne Bolognesa, Pan',
            pricesmall: 9000,
            amount: 0,
            category: 'Other',
            Image: <Image src={Lasagna} className='PImage'/>
        },
        {
            id: '19',
            name: 'Panzerotti',
            ingredients: 'Queso, Jamon, Champiñon, Pollo, Carne Bolognesa',
            pricesmall: 9000,
            amount: 0,
            category: 'Other',
            Image: <Image src={Panzerotti} className='PImage'/>
        },
        {
            id: '20',
            name: 'Cremas y Jugos Naturales en leche ',
            flavor: 'Lulo, Mango, Uva, Fresa, Mora, Maracuya, Freijoa',
            pricesmall: 3000,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={JugosLeche} className='PImage'/>
        },
        {
            id: '21',
            name: 'Cremas y Jugos Naturales en agua',
            flavor: 'Lulo, Mango, Uva, Fresa, Mora, Maracuya, Freijoa',
            pricesmall: 2000,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={JugosAgua} className='PImage'/>
        },
        {
            id: '22',
            name: 'Gaseosas',
            flavor: 'Cocacola, Productos Postobon',
            pricesmall: 3000,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Gaseosa} className='PImage'/>
        },

        
    ]
}

export default data;