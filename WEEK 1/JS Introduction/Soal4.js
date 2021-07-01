let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
      street : "Kulas Light",
      suite : "Apt. 556",
      city : "Gwenborough",
      zipcode : "92998-2874",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org"
  }
  
  // menambah dan mengubah data baru
  const dataUbah = {
    ...data,
    name : "Canda Muammal",
    email : "candamuammal@outlook.com",
    hobby : "Travel",
    address: {...data.address, street : 'New Street'}
  }
  
  // menggabungkan data lama dan data baru
  // const data2 = {
  //   ...data,
  //   ...dataUbah
  // }
  
  console.log(dataUbah);
  
  
  
  // destructing street dan city
  const {street, city} = dataUbah.address;
  
  console.log(street);
  console.log(city);