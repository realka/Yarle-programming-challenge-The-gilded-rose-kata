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
      }

      if (isNormalItem){
        if (item.quality > 0)
        {
          item.quality --;
          if (item.sellIn < 0){
            item.quality --;
          }
        }
      }else if (isBackstage){
        item.quality ++;
        if(item.sellIn <= 10){
          item.quality ++;
        }
        if(item.sellIn <= 5){
          item.quality ++;
        }
        if(item.sellIn < 0){
          item.quality = 0;
        }
      }else if(isAgedBrie && item.quality < 50){
        item.quality ++;
      }
    });

    return this.items;
  }
}
