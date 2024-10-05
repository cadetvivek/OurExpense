💸 OurExpense - Full Stack Expense Tracker Web Application
📌 About the Project
OurExpense is a feature-rich, full-stack expense tracker web application designed to simplify your expense management. The application includes a user-friendly Signup and Login system, along with a Forgot Password option for easy account recovery.

Once you log in, you can effortlessly add, edit, and delete your expenses. Additionally, the application offers a pagination feature to navigate through your expenses with ease.

We also provide an exclusive Premium Feature that unlocks advanced functionalities, such as:

📊 LeaderBoard: Compare your expenses with others and stay ahead in managing your finances.
📥 Download Expense: Download a comprehensive report of your expenses for personal records or future reference.
🔧 Technologies Used
Frontend:
React: For building the user interface.
JSX: To structure the UI components.
CSS: For styling and designing the application.
Backend:
Node.js and Express: For handling server-side logic.
MySQL Workbench: As the database management system.
AWS (Amazon Web Services): For storage and deployment.

Clone the Repository
git clone https://github.com/cadetvivek/OurExpense.git
cd OurExpense
Install Dependencies
npm install

Set Up the Database
Create a database in MySQL or MongoDB according to your preference.
Modify the database configuration in the .env file as needed.
Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:

plaint
DB_NAME=mydatabasename
DB_USERNAME=mydatabaseusername
DB_PASSWORD=mydatabasepassword
DB_HOST=localhost
PORT=3000
TOKEN_SECRET=mysecrettoken
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
SIB_API_KEY=your_sendinblue_api_key   # Required for Forgot Password functionality
BUCKET_NAME=your_aws_s3_bucket_name
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
Start the Server
Use the command below to start the server with nodemon:


npm run nodemon
http://localhost:3000

💡 Features at a Glance
User Authentication: Secure Signup and Login with JWT-based authentication.
Expense Management: Easily add, edit, and delete your expenses.
Pagination: Smooth navigation through paginated expense records.
Premium Access: Unlock advanced features like LeaderBoard and Expense Download.
Payment Integration: Seamless payment gateway for premium services using Razorpay.


![Screenshot (1310)](https://github.com/user-attachments/assets/3ac11e8b-2ba0-4f31-8130-bc22c4aaa56d)

![Screenshot (1311)](https://github.com/user-attachments/assets/1868d0ba-7ac9-43b2-a7e9-16c3f9d3e6bb)
![Screenshot (1312)](https://github.com/user-attachments/assets/0fd1c73b-9ab1-4a74-a4c5-667269c0aa94)
![Screenshot (1313)](https://github.com/user-attachments/assets/6e3694ea-2130-4fce-9251-1090fcb2e8bb)
![Screenshot (1314)](https://github.com/user-attachments/assets/cb8e9d10-0317-4022-a950-9192747e7fd6)
![Screenshot (1315)](https://github.com/user-attachments/assets/2b5c5403-392a-465b-88d9-de94cf94b494)
