// import mongoose from "mongoose";
// import express from "express";
// import dotenv from "dotenv";
// import { MongoClient } from "mongodb";
// import telegram from "node-telegram-bot-api";
// dotenv.config();
// const url = process.env.MONGO;
// const client = new MongoClient(url);
// const app = express();

// //mongodb connection
// const connect = () => {
//   mongoose
//     .connect(process.env.MONGO)
//     .then(() => {
//       console.log("Connected to DB");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// //defining schema
// const InventorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     weight: {
//       type: Number,
//     },
//     type: {
//       type: String,
//     },
//     brand: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// //defining model
// const Item = new mongoose.model("Inventory", InventorySchema);

// //create or insert of documents in inventory list

// const createDocument = async () => {
//   try {
//     const Item1 = new Item({
//       name: "Milk",
//       price: 2.99,
//       quantity: 10,
//       weight: 1,
//       type: "Dairy",
//       brand: "Farm Fresh",
//     });

//     const Item2 = new Item({
//       name: "Bread",
//       price: 1.99,
//       quantity: 5,
//       weight: 0.5,
//       type: "Bakery",
//       brand: "Wonder Bread",
//     });

//     const Item3 = new Item({
//       name: "Eggs",
//       price: 3.99,
//       quantity: 20,
//       weight: 1,
//       type: "Dairy",
//       brand: "Organic Valley",
//     });

//     const Item4 = new Item({
//       name: "Apples",
//       price: 0.99,
//       quantity: 15,
//       weight: 0.5,
//       type: "Fruit",
//       brand: "Gala",
//     });

//     const Item5 = new Item({
//       name: "Bananas",
//       price: 0.79,
//       quantity: 20,
//       weight: 0.5,
//       type: "Fruit",
//       brand: "Cavendish",
//     });

//     const Item6 = new Item({
//       name: "Chicken",
//       price: 5.99,
//       quantity: 8,
//       weight: 1,
//       type: "Meat",
//       brand: "Perdue",
//     });

//     const Item7 = new Item({
//       name: "Beef",
//       price: 10.99,
//       quantity: 5,
//       weight: 1,
//       type: "Meat",
//       brand: "Angus",
//     });

//     const Item8 = new Item({
//       name: "Pasta",
//       price: 2.49,
//       quantity: 10,
//       weight: 0.5,
//       type: "Pantry",
//       brand: "Barilla",
//     });

//     const Item9 = new Item({
//       name: "Rice",
//       price: 3.99,
//       quantity: 10,
//       weight: 1,
//       type: "Pantry",
//       brand: "Uncle Bens",
//     });

//     const Item10 = new Item({
//       name: "Coffee",
//       price: 7.99,
//       quantity: 5,
//       weight: 0.25,
//       type: "Beverage",
//       brand: "Starbucks",
//     });

//     const result = await Item.insertMany([
//       Item1,
//       Item2,
//       Item3,
//       Item4,
//       Item5,
//       Item6,
//       Item7,
//       Item8,
//       Item9,
//       Item10,
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// // createDocument();
// var Array1 = [];
// const token = process.env.TOKEN;
// const bot = new telegram(token, { polling: true });

// bot.onText(/\/start/, async (msg) => {
//   const chatId = msg.chat.id;
//   if (msg.text === "/start") {
//     bot.sendMessage(
//       chatId,
//       "Welcome to the ApnaBazaar!\n Your go-to destination for everyday essentials"
//     );
//     bot.sendMessage(chatId, "Type /viewInventory to view the inventory list");
//     bot.sendMessage(chatId, "Type /order to start ordering items");
//   }
// });

// bot.onText(/\/viewInventory/, async (msg) => {
//   const chatId = msg.chat.id;
//   const inventory = await Item.find({});
//   inventory.forEach((item) => {
//     const message = `name:${item.name}\nprice:${item.price}\nquantity:${item.quantity} in stock\nweight:${item.weight} kg \ntype:${item.type}\nbrand:${item.brand}\n`;
//     bot.sendMessage(chatId, message);
//   });
// });
// var total = 0;
// bot.onText(/\/order/, (msg) => {
//   if(msg.text === "/order"){
//     const chatId = msg.chat.id;
//   bot.sendMessage(
//     chatId,
//     "Please specify the items you want to order in the following format:<name> <quantity>"
//   );

//   bot.on('message', async (msg) => {
//     if(msg.text !== "/order" && msg.text !== "/confirm" && msg.text !== "/yes" && msg.text !== "/start" &&  msg.text !== "/viewInventory" && msg.text !== "/no"){
//       const order = msg.text.split(" ");
//     const name = order[0];
//     const quantity = parseInt(order[1]);

//     const item = await Item.findOne({ name });
//     // console.log(item)
//     if (!item) {
//       bot.sendMessage(chatId, `Sorry, we don't have ${name} in stock.`);
//     } else if (item.quantity < quantity) {
//       bot.sendMessage(
//         chatId,
//         `Sorry, we only have ${item.quantity} ${name}(s) in stock.`
//       );
//     } else {
//       Array1[0] = name;
//       Array1[1] = quantity;
//       const newQuantity = item.quantity - quantity;
//       await Item.updateOne({ name }, { quantity: newQuantity });
//       total = quantity * item.price;
//       Array[2] = total;
//       bot.sendMessage(
//         chatId,
//         `Thank you for your order! Your total is Rs.${total}.`
//       );

//       console.log(Array);
//       bot.sendMessage(
//         chatId,
//         "Please confirm your order. Type /confirm to proceed."
//       );
//     }

//     }
//   });
//   }
// });
//tanu
// bot.onText(/\/confirm/, async (msg) => {
//   const chatId = msg.chat.id;
//   const orderId = new Date().getTime().toString();
//   const user = `${msg.from.first_name} ${msg.from.last_name}`;
//   const items = `${Array1[1]} ${Array1[0]}(s)`;
//   const status = "Pending";
//   const total = Array1[2];
//   const order = {
//     orderId,
//     user,
//     items,
//     total,
//     status,
//   };

//   const ownerChatId = 6016970672;
//   bot.sendMessage(
//     ownerChatId,
//     `New order received:\nOrder ID: ${order.orderId}\nUser: ${order.user}\nItems: ${order.items}\nTotal: Rs.${order.total}\nAccept order?\nType /yes to proceed or /no to stop`
//   );

//   bot.onText(/\/yes/, async (msg) => {
//     if (msg.text === "/yes") {
//       bot.sendMessage(
//         chatId,
//         `Your order has been placed!\nOur delivery agent(+91789203478)\nwill bring your order with Order ID: ${order.orderId}.\nPay Rs.${order.total} at the time of delivery.\nApna Bazaar`
//       );
//     }
//   });
//   bot.onText(/\/no/, async (msg) => {
//     if(msg.text === "/no"){
//       bot.sendMessage(
//         chatId,
//         `We are very sorry,order can't be placed now.\nOrder ID: ${orderId}\n`
//       );
//     }
//   });
// });

// app.listen(8800, () => {
//   connect();
//   console.log("Listening on port 8800");
// });

import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import telegram from "node-telegram-bot-api";
dotenv.config();
const url = process.env.MONGO;
const client = new MongoClient(url);
const app = express();

//mongodb connection
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

//defining schema
const InventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
    },
    type: {
      type: String,
    },
    brand: {
      type: String,
    },
  },
  { timestamps: true }
);

//defining model
const Item = new mongoose.model("Inventory", InventorySchema);

//create or insert of documents in inventory list

const createDocument = async () => {
  try {
    const Item1 = new Item({
      name: "Milk",
      price: 2.99,
      quantity: 10,
      weight: 1,
      type: "Dairy",
      brand: "Farm Fresh",
    });

    const Item2 = new Item({
      name: "Bread",
      price: 1.99,
      quantity: 5,
      weight: 0.5,
      type: "Bakery",
      brand: "Wonder Bread",
    });

    const Item3 = new Item({
      name: "Eggs",
      price: 3.99,
      quantity: 20,
      weight: 1,
      type: "Dairy",
      brand: "Organic Valley",
    });

    const Item4 = new Item({
      name: "Apples",
      price: 0.99,
      quantity: 15,
      weight: 0.5,
      type: "Fruit",
      brand: "Gala",
    });

    const Item5 = new Item({
      name: "Bananas",
      price: 0.79,
      quantity: 20,
      weight: 0.5,
      type: "Fruit",
      brand: "Cavendish",
    });

    const Item6 = new Item({
      name: "Chicken",
      price: 5.99,
      quantity: 8,
      weight: 1,
      type: "Meat",
      brand: "Perdue",
    });

    const Item7 = new Item({
      name: "Beef",
      price: 10.99,
      quantity: 5,
      weight: 1,
      type: "Meat",
      brand: "Angus",
    });

    const Item8 = new Item({
      name: "Pasta",
      price: 2.49,
      quantity: 10,
      weight: 0.5,
      type: "Pantry",
      brand: "Barilla",
    });

    const Item9 = new Item({
      name: "Rice",
      price: 3.99,
      quantity: 10,
      weight: 1,
      type: "Pantry",
      brand: "Uncle Bens",
    });

    const Item10 = new Item({
      name: "Coffee",
      price: 7.99,
      quantity: 5,
      weight: 0.25,
      type: "Beverage",
      brand: "Starbucks",
    });

    const result = await Item.insertMany([
      Item1,
      Item2,
      Item3,
      Item4,
      Item5,
      Item6,
      Item7,
      Item8,
      Item9,
      Item10,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();
var Array1 = [];
const token = process.env.TOKEN;
const bot = new telegram(token, { polling: true });
let offset = 0;

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === "/start") {
    bot.sendMessage(
      chatId,
      "Welcome to the ApnaBazaar!\n Your go-to destination for everyday essentials"
    );
    bot.sendMessage(chatId, "Type /viewInventory to view the inventory list");
    bot.sendMessage(chatId, "Type /order to start ordering items");
  }
});

bot.onText(/\/viewInventory/, async (msg) => {
  const chatId = msg.chat.id;
  const inventory = await Item.find({});
  inventory.forEach((item) => {
    const message = `name:${item.name}\nprice:${item.price}\nquantity:${item.quantity} in stock\nweight:${item.weight} kg \ntype:${item.type}\nbrand:${item.brand}\n`;
    bot.sendMessage(chatId, message);
  });
});
var total = 0;
let currentOrder = {}
bot.onText(/\/order/, (msg) => {
  let confirmOrder = false
  if(msg.text === "/order"){
    const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Please specify the items you want to order in the following format:<name> <quantity>"
  );

  bot.on('message', async (msg) => {
    if(confirmOrder){
      return
    }
    if(msg.text !== "/order" && msg.text !== "/confirm" && msg.text !== "/yes" && msg.text !== "/start" &&  msg.text !== "/viewInventory" && msg.text !== "/no"){
        currentOrder = {}
      const order = msg.text.split(" ");
    const name = order[0];
    const quantity = parseInt(order[1]);

    const item = await Item.findOne({ name });
    // console.log(item)
    if (!item) {
      bot.sendMessage(chatId, `Sorry, we don't have ${name} in stock.`);
    } else if (item.quantity < quantity) {
      bot.sendMessage(
        chatId,
        `Sorry, we only have ${item.quantity} ${name}(s) in stock.`
      );
    } else {
    //   Array1[0] = name;
    //   Array1[1] = quantity;
      currentOrder.name = name;
      currentOrder.quantity = quantity;
      const newQuantity = item.quantity - quantity;
      await Item.updateOne({ name }, { quantity: newQuantity });
      total = quantity * item.price;
    //   Array[2] = total;
      currentOrder.total = total;
      bot.sendMessage(
        chatId,
        `Thank you for your order! Your total is Rs.${total}.`
      );
      
      console.log(Array);
      bot.sendMessage(
        chatId,
        "Please confirm your order. Type /confirm to proceed."
      );
      confirmOrder = true
    }

    }
  });
  }
});


bot.onText(/\/confirm/, async (msg) => {
  const chatId = msg.chat.id;
  const orderId = new Date().getTime().toString();
  const user = `${msg.from.first_name} ${msg.from.last_name}`;
  const items = `${currentOrder.quantity} ${currentOrder.name}(s)`;
  const status = "Pending";
  let total = currentOrder.total;
  const order = {
    orderId,
    user,
    items,
    total,
    status,
  };

  const ownerChatId = 6016970672;
  bot.sendMessage(
    ownerChatId,
    `New order received:\nOrder ID: ${order.orderId}\nUser: ${order.user}\nItems: ${order.items}\nTotal: Rs.${order.total}\nAccept order?\nType /yes to proceed or /no to stop`
  );

  bot.onText(/\/yes/, async (msg) => {

    offset = msg.update_id + 1;
    if (msg.text === "/yes") {
      bot.sendMessage(
        chatId,
        `Your order has been placed!\nOur delivery agent(+91789203478)\nwill bring your order with Order ID: ${order.orderId}.\nPay Rs.${order.total} at the time of delivery.\nApna Bazaar`
      );
      
      currentOrder = {}
      total = 0
    }
  });
  bot.onText(/\/no/, async (msg) => {
    offset = msg.update_id + 1;
    if(msg.text === "/no"){
      bot.sendMessage(
        chatId,
        `We are very sorry,order can't be placed now.\nOrder ID: ${orderId}\n`
      );
      currentOrder = {}
      total = 0
    }
  });
});

app.listen(8800, () => {
  connect();
  console.log("Listening on port 8800");
});