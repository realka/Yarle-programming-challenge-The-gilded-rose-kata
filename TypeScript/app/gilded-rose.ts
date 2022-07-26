export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /*
  changed for loop to -> foreach 
  created constant to readable code
  
  ---- Future works:
  functions can be written for calculations
  conditions can be expressed with constants

  Note: I chose not doing the futureworks part because I read the expressions more comfortably this way.
  */
  
  
  updateQuality() {
    this.items.forEach (item => {
      const isSulfuras = item.name == 'Sulfuras, Hand of Ragnaros';
      const isAgedBrie = item.name == 'Aged Brie';
      const isBackstage = item.name == 'Backstage passes to a TAFKAL80ETC concert';
      const isConjuredItem = item.name.includes('Conjured');
      const isNormalItem = !isAgedBrie && !isBackstage && !isSulfuras && !isConjuredItem;
      
      if (!isSulfuras) {
        item.sellIn --;
      }else if(item.quality < 80){//critical
        item.quality = 80;
      }
      
      if (isNormalItem){
        if (item.quality > 0){
          item.quality --;
          if (item.sellIn < 0 && item.quality > 0){
            item.quality --;
          }
        }
      }else if (isBackstage){
        if (item.sellIn < 0){
          item.quality = item.quality * (-1);
        }else if (item.sellIn < 5){
          item.quality = item.quality +3;
        }else if (item.sellIn < 10){
          item.quality = item.quality +2;
        }else{
          item.quality ++;
        }
        if(item.sellIn < 0){
          item.quality = 0;
        }
      }else if(isAgedBrie && item.quality < 50){
        item.quality ++;
        if(item.sellIn < 0){
          item.quality ++;
        }
      }else if (isConjuredItem){
        if (item.quality > 0){
          item.quality = item.quality-2;
          if (item.sellIn < 0){
            item.quality = item.quality-2;
          }
        }else{
          item.quality = 0;
        }
        if(item.sellIn < 0){
          item.quality = 0;
        }
      }
    });

    return this.items;
  }
}
