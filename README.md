# AmazeZone
This project is a fully functional Amazon Clone built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app replicates key features of an e-commerce platform, such as user authentication, product management, and cart functionality.

Features

User Authentication

	Sign In/Sign Out: Users can securely log in and log out of their accounts.

	Token and Cookie Management:

	Upon login, a JSON Web Token (JWT) is dynamically created and stored in a secure HTTP-only 	cookie.

	Tokens are verified on each request to ensure user authentication and session validity.

Product Search

	Search Functionality: Users can search for products using a dynamic search bar, making it easy to 	find specific items in the database.

Cart Management

	Add to Cart: Users can add products to their cart dynamically.

	Retrieve Cart Items: Logged-in users can view all the items they have added to their cart.

	Cart Persistence: Cart data is retrieved from MongoDB, ensuring data consistency across 	sessions.

Data Management

	MongoDB Integration:

	Users Collection: Stores user details, hashed passwords, and session tokens.

	Products Collection: Stores product information such as name, price, description, and images.

CRUD Operations: 
Full support for Create, Read, Update, and Delete operations on user and product data.

Security

	Token Verification: Ensures that only authenticated users can access protected routes.

	Cookie Verification: Uses HTTP-only cookies to prevent XSS attacks and ensure secure 	communication between client and server.

Pending Features

	Payment Gateway Integration: Currently under development to handle secure payments for 	purchases.


Prerequisites

Ensure you have the following installed on your machine:

Node.js

MongoDB

npm or yarn

API Endpoints

Product APIs

Get all products
Endpoint: GET /getproducts
Description: Fetches all product data.

Get a single product by ID
Endpoint: GET /getproductsone/:id
Description: Retrieves details for a specific product by its ID.

User APIs

Register a new user
Endpoint: POST /register
Request Body:

{
    "fname": "string",
    "email": "string",
    "mobile": "string",
    "password": "string",
    "cpassword": "string"
}

User login
Endpoint: POST /login
Request Body:

{
    "email": "string",
    "password": "string"
}

User logout
Endpoint: GET /logout
Description: Logs out the user and clears session cookies.

Get valid user details
Endpoint: GET /validuser
Description: Fetches details of the currently logged-in user.

Cart APIs

Add a product to the cart
Endpoint: POST /addcart/:id
Description: Adds a specific product to the cart by ID.

Get cart details
Endpoint: GET /cartdetails
Description: Retrieves all items in the user's cart.

Remove a product from the cart
Endpoint: DELETE /remove/:id
Description: Removes a specific product from the user's cart.

Technologies Used

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token), Cookies

Middleware: Custom authentication middleware


Future Enhancements

Payment Gateway Integration

Improved UI/UX

Advanced product filtering and sorting

Wishlist functionality
