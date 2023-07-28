# ApnaBazaar
Low-Level Design (LLD) for Telegram Bot - A general store
---------------------------------------------------------

Telegram Bot Interaction Flow:
-----------------------------
User -> Telegram Bot -> Owner

Functional Components:
----------------------

a. User Actions:
   - Place an order
   - View inventory
   - Confirm order

b. Owner Actions:
   - View incoming orders
   - Accept or reject orders

Data Structures:
----------------

a. Order:
   - Order ID
   - User ID
   - Items (with quantity and price)

b. Inventory:
   - Item ID
   - Item Name
   - Quantity
   - Price

Telegram Bot Commands:
----------------------
a. User Commands:
   -/start: Start the bot
   - /order: Allows the user to place an order.
   - /viewInventory: Displays the available inventory to the user.
   - /confirm: Allows the user to confirm their order.

b. Owner Commands:
   - /yes: Allows the owner to accept a specific order.
   - /no: Allows the owner to reject a specific order.

Telegram Bot Functionality:
---------------------------
a. Handling User Actions:
   - The user can use the /viewInventory command to see the available items and their quantities.
   - When a user sends the /order command, the bot prompts the user to select items from the inventory and specify the quantity.
   - After placing the order the bot checks whether the items with specified quantities avalable in the inventory and notify about it to the user.
   - User can use /confirm to confirm the order. 

b. Handling Owner Actions:
   - Owner gets notified about the order with ORDER_ID and other order details.
   - The owner can use the /yes command to accept a specific order.
   - Similarly, the owner can use the /no command to reject a specific order.
   - Upon acceptance or rejection, the bot updates the Order Status accordingly and notifies the user about the decision.

Database:
---------

a. Inventory Table:
   -> Item_ID (Primary Key)
   -> Item_Name
   -> Quantity
   -> Price

