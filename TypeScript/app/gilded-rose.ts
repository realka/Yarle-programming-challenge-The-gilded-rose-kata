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
      const isSulfuras = item.name == 'Sulfuras, Hand of Ragnaros'
      const isAgedBrie = item.name == 'Aged Brie'
      const isBackstage = item.name == 'Backstage passes to a TAFKAL80ETC concert'
      const isNormalItem = !isAgedBrie && !isBackstage && !isSulfuras

      if (!isSulfuras) {
        item.sellIn --;
      }

      if (isNormalItem && item.quality > 0) {
            item.quality --;
      } else {
        if (item.quality < 50) {
          item.quality ++;
          if (isBackstage) {
            if (item.sellIn <= 10 && item.quality < 50) { //changed
                item.quality ++;
            }
            if (item.sellIn <= 5 && item.quality < 50) {
                item.quality ++;
            }
          }
        }
      }
      
      if (item.sellIn < 0 ) {
          if (isNormalItem) {
            if (item.quality > 0 ) {
                item.quality --;
            }
          } else {
            //item.quality = item.quality - item.quality
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality ++;
          }
        }

      
    });

    return this.items;
  }
}
