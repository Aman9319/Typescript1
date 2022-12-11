
  class ShoppingCart {
     productName:string[]=[];
     productPrice:number[]=[];
     productId:string[]= [];
     cartItem:string[]=[];

     addProductName(name:string){
        this.productName.push(name);

     }
     addProductPrice(price:number){
        this.productPrice.push(price)

     }

     addProductId(id:string){
        this.productId.push(id)

     }
    addItemToList(Name:string, Price:number,Id:string){
        this.addProductName(Name),
        this.addProductPrice(Price),
        this.addProductId(Id);

    }

    addIteamToCartByName(name:string) {
        const product=this.productName.indexOf(name);
            if(product!=-1){
                this.cartItem.push(name);
            } else {
                console.log('did not match');
            }
        
    }

    printLIstOfItem() {
        for(var index of this.productName) {
    console.log(index);  
}
        
        
    }

    showCart() {
        for(var index in this.cartItem) {
            console.log(this.cartItem[index]);
    }
}

    showFinalPrice() {
        return this.productPrice.reduce((a, b) => a + b,0);
    }
  }

  const a= new ShoppingCart();
  a.addItemToList('a',1,'b')
//   a.addItemToList('c',2,'d')
//   a.addItemToList('e',2,'f')
  a.printLIstOfItem();
  a.addIteamToCartByName('a')
  a.addIteamToCartByName('a')
  a.addIteamToCartByName('a')
  console.log('===',a.cartItem)
  console.log(a.showFinalPrice());
  
  
  console.log(a.showFinalPrice());
  
