import { applyUriPrefix } from '../shared/functions/functions';
import { Products } from './products.metadata';

const uri = '/assets/pictures/'

export const defaultTitleClass: string =
  'font-three uppercase text-[23px] sm:text-[27px] text-black tracking-wider';

export const burgers: Products[] = [
  {
    title: 'CRAZY_DONKEY',
    description: 'BURGER_1',
    allergens: applyUriPrefix(['milk','soy','eggs','gluten']),
  },
  {
    title: 'PORK_BURGER',
    description: 'BURGER_2',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'CHICKEN_BURGER',
    description: 'BURGER_3',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'VEGGIE_BURGER',
    description: 'BURGER_4',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
];

export const wraps: Products[] = [
  {
    title: 'FARM_WRAP_TITLE',
    description: 'FARM_WRAP',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'PORK_WRAP_TITLE',
    description: 'PORK_WRAP',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'CHICKEN_WRAP_TITLE',
    description: 'CHICKEN_WRAP',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'FLAT_SAUSAGE_CHEESE_WRAP_TITLE',
    description: 'FLAT_SAUSAGE_CHEESE_WRAP',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'BACON_CHEESE_WRAP_TITLE',
    description: 'BACON_CHEESE_WRAP',
    allergens: applyUriPrefix(['milk','soy','eggs','gluten']),
  },
  {
    title: 'VEGAN_WRAP_TITLE',
    description: 'VEGAN_WRAP',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
];

export const hotProducts: Products[] = [
  {
    title: 'HOT_ITEMS.DOUBLE_DONKEY_BURGER',
    description: 'HOT_ITEMS.DOUBLE_DONKEY_BURGER_DESC',
    allergens: [''],
    img: './assets/pictures/burger.png',
    stars: Array(6).fill(0)
  },
  {
    title: 'HOT_ITEMS.PITA_FLAMBE',
    description: 'HOT_ITEMS.POTATO_BALLS_DESC',
    allergens: [''],
    img: './assets/pictures/pita.png',
    stars: Array(6).fill(0)
  },
  {
    title: 'HOT_ITEMS.GYROS_WRAP',
    description: 'HOT_ITEMS.GYROS_WRAP_DESC',
    allergens: [''],
    img: './assets/pictures/gyrosWrap.png',
    stars: Array(5).fill(0)
  },
  {
    title: 'HOT_ITEMS.CHICKEN-WINGS',
    description: 'HOT_ITEMS.CHICKEN-WINGS',
    allergens: [''],
    img: './assets/pictures/chicken-wings.png',
    stars: Array(5).fill(0)
  },
  {
    title: 'HOT_ITEMS.POTATO_ROSTI',
    description: 'HOT_ITEMS.POTATO_ROSTI_DESC',
    allergens: [''],
    img: './assets/pictures/potato-rosti.png',
    stars: Array(5).fill(0),
  },
];

export const portions: Products[] = [
  {
    title: 'CRISPY_CHICKEN_TITLE',
    description: 'CRISPY_CHICKEN',
    allergens: applyUriPrefix(['milk','eggs',]),
  },
  {
    title: 'FRIED_MEAT_TITLE',
    description: 'FRIED_MEAT',
    allergens: applyUriPrefix(['milk','eggs']),
  },
  {
    title: 'CHICKEN_WINGS_TITLE',
    description: 'CHICKEN_WINGS',
    allergens: applyUriPrefix(['milk','eggs']),
  },
  {
    title: 'FALAFEL_SALAD_TITLE',
    description: 'FALAFEL_SALAD',
    allergens: applyUriPrefix(['milk','soy','gluten']),
  },
  {
    title: 'FRENCH_FRIES_TITLE',
    description: 'FRENCH_FRIES',
    allergens: applyUriPrefix(['milk','eggs']),
  },
  {
    title: 'FRENCH_FRIES_I_TITLE',
    description: 'FRENCH_FRIES_I',
    allergens: [],
  },
  {
    title: 'CHIPS_TITLE',
    description: 'CHIPS',
    allergens: [],
  },
  {
    title: 'SANDWICH_TITLE',
    description: 'SANDWICH',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
  {
    title: 'TOAST_TITLE',
    description: 'TOAST',
    allergens: applyUriPrefix(['milk','eggs','gluten',]),
  },
  {
    title: 'GYROS_TITLE',
    description: 'GYROS',
    allergens: applyUriPrefix(['milk','eggs','gluten']),
  },
];
