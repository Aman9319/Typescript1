
interface Item {
    productName: string,
    productPrice: number,
    productId: string
  }

  class generalStores {
    storeItemsList: Array<Item> = [];
     cartItem:Array<string>=[];
     cartPrice:Array<number>=[];

   addItemToStoreList(item: Item){
    this.storeItemsList.push(item)
   }

   addIteamToCartByName(name:string) {
           for(var index of this.storeItemsList) {
            const product =index.productName.indexOf(name)
            if(product!=-1){
               this.cartItem.push(name);
               this.cartPrice.push(index.productPrice);   
            }
       }
   }

   printListOfItem() {
       for(let itemList of this.storeItemsList) {
           console.log('Item in store:',itemList.productName);
   }
}

   showCart() {
    console.log('Item in cart:',this.cartItem);
}

   showFinalPrice() {
       const finaliPrice = this.cartPrice.reduce((a, b) => a + b,0);
       console.log('Totalprice:',finaliPrice);
     }
 }

 const store= new generalStores();

let info = {productName: 'Cooler',productPrice: 12000 ,productId: 'Usha'}
store.addItemToStoreList(info);
store.printListOfItem();
store.addIteamToCartByName('Cooler');
store.addIteamToCartByName('Cooler');
store.showCart();
store.showFinalPrice();





 
