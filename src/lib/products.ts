import onion from '@/assets/products/onion.jpg';
import redOnion from '@/assets/products/red-onion.jpg';
import garlic from '@/assets/products/garlic.jpg';
import tomato from '@/assets/products/tomato.jpg';
import spinach from '@/assets/products/spinach.jpg';
import carrot from '@/assets/products/carrot.jpg';
import beetroot from '@/assets/products/beetroot.jpg';
import potato from '@/assets/products/potato.jpg';
import greenChilli from '@/assets/products/green-chilli.jpg';
import redChilli from '@/assets/products/red-chilli.jpg';
import ginger from '@/assets/products/ginger.jpg';
import mango from '@/assets/products/mango.jpg';
import banana from '@/assets/products/banana.jpg';
import papaya from '@/assets/products/papaya.jpg';
import pineapple from '@/assets/products/pineapple.jpg';
import lemon from '@/assets/products/lemon.jpg';
import amla from '@/assets/products/amla.jpg';
import moringa from '@/assets/products/moringa.jpg';
import turmeric from '@/assets/products/turmeric.jpg';
import wheatgrass from '@/assets/products/wheatgrass.jpg';
import curryLeaf from '@/assets/products/curry-leaf.jpg';
export const categories = ['All', 'Vegetable Powders', 'Fruit Powders', 'Herbal & Superfoods'] as const;
export type Product = {name:string; category:string; image:string; description:string; applications:string; colour:string; illustrative?:boolean};
const v='Vegetable Powders', f='Fruit Powders', h='Herbal & Superfoods';
export const products: Product[] = [
{name:'White Onion Powder',category:v,image:onion,description:'Pure, mellow flavour. A versatile kitchen essential.',applications:'Seasoning blends, soups, sauces and ready meals',colour:'Off-white'},
{name:'Red Onion Powder',category:v,image:redOnion,description:'Full-bodied onion flavour for savoury formulations.',applications:'Snacks, spice mixes and sauces',colour:'Light pink'},
{name:'Garlic Powder',category:v,image:garlic,description:'Rich aroma. Consistent flavour in every blend.',applications:'Marinades, dressings and savoury snacks',colour:'Cream'},
{name:'Tomato Powder',category:v,image:tomato,description:'Sun-ripened character, naturally concentrated.',applications:'Soups, sauces, pasta and seasoning',colour:'Red-orange'},
{name:'Spinach Powder',category:v,image:spinach,description:'Leafy goodness, finely milled for easy use.',applications:'Pasta, bakery, soups and nutrition blends',colour:'Green'},
{name:'Carrot Powder',category:v,image:carrot,description:'Gentle sweetness with a vibrant natural colour.',applications:'Bakery, soups and vegetable blends',colour:'Orange'},
{name:'Beetroot Powder',category:v,image:beetroot,description:'Earthy sweetness. A beautiful natural red.',applications:'Beverages, bakery and natural colour blends',colour:'Deep red'},
{name:'Potato Powder',category:v,image:potato,description:'A smooth, neutral base for savoury applications.',applications:'Soups, snacks and thickening blends',colour:'Cream'},
{name:'Green Chilli Powder',category:v,image:greenChilli,description:'Fresh chilli character for a sharper flavour.',applications:'Seasonings, sauces and snack coatings',colour:'Green'},
{name:'Red Chilli Powder',category:v,image:redChilli,description:'Warm colour and heat, tailored to your recipe.',applications:'Spice blends, sauces and marinades',colour:'Red'},
{name:'Ginger Powder',category:v,image:ginger,description:'Warm, aromatic notes for sweet and savoury use.',applications:'Tea blends, bakery and seasoning',colour:'Light beige'},
{name:'Mango Powder',category:f,image:mango,description:'The taste of tropical sunshine, in powder form.',applications:'Beverage mixes, desserts and confectionery',colour:'Yellow'},
{name:'Banana Powder',category:f,image:banana,description:'Naturally mellow flavour for everyday nutrition.',applications:'Bakery, smoothies and nutrition blends',colour:'Cream'},
{name:'Papaya Powder',category:f,image:papaya,description:'Delicate tropical flavour for creative formulations.',applications:'Beverages, desserts and fruit blends',colour:'Yellow-orange'},
{name:'Pineapple Powder',category:f,image:pineapple,description:'Bright tropical notes with a refreshing finish.',applications:'Drinks, confectionery and desserts',colour:'Pale yellow'},
{name:'Lemon Powder',category:f,image:lemon,description:'Clean citrus character, ready for your blend.',applications:'Beverages, seasoning and bakery',colour:'Pale yellow'},
{name:'Amla Powder',category:f,image:amla,description:'Traditional Indian fruit, thoughtfully processed.',applications:'Herbal blends and nutrition formulations',colour:'Tan'},
{name:'Moringa Leaf Powder',category:h,image:moringa,description:'Nature’s green goodness, carefully preserved.',applications:'Nutrition blends, smoothies and functional foods',colour:'Green'},
{name:'Turmeric Powder',category:h,image:turmeric,description:'Golden colour. Distinctive earthy character.',applications:'Spice blends, beverages and ready meals',colour:'Golden yellow'},
{name:'Wheatgrass Powder',category:h,image:wheatgrass,description:'Finely milled greens for modern formulations.',applications:'Green blends and nutrition products',colour:'Green'},
{name:'Curry Leaf Powder',category:h,image:curryLeaf,description:'Distinctive aromatic depth for savoury recipes.',applications:'Seasonings, chutneys and ready meals',colour:'Green'},
];
export function pageHead(title:string,description:string){return {meta:[{title:`${title} — Aurelian International`},{name:'description',content:description},{property:'og:title',content:`${title} — Aurelian International`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
