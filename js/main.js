'use script';
const propsList = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const ads = document.querySelector('.ads');
const item = document.querySelectorAll('.item');
const itemTitle = document.querySelectorAll('.item__title');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemFour = document.querySelectorAll('.props__item_four');
const itemImage = document.querySelectorAll('.item__image');
console.log('propsItemFour: ', itemImage);


const clone2 = propsList[3].cloneNode(true);
const clone = propsList[4].cloneNode(true);

item[3].after(item[0]);
item[1].after(item[2]);

propsList[3].remove();
propsList[4].remove();
content[4].append(clone2);
content[3].append(clone);

propsItemFour[2].after(propsItemFour[5]);
propsItemTwo[7].after(propsItemTwo[8]);
propsItemTwo[8].after(propsItemTwo[9]);

itemTitle[1].after(itemTitle[3]);
itemTitle[4].after(itemTitle[1]);
itemTitle[2].after(itemTitle[4]);
itemImage[4].after(itemTitle[4]);

ads.remove();