function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name );

  //Код выдаст ошибку поскольку "this" в данном случае будет равно "undefined"