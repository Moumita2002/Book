# Backend Project - Techstack used: Nodejs, Expressjs and MongoDB

# Data Models used:
- Availability
- Booking

# Set Availability API:
- Endpoint: `/api/availability`
- Method: POST
- Description: Allows the salon staff to set their availability for booking.
- Request Body:

![image](https://github.com/Moumita2002/Book/assets/102172188/34c06578-285c-4675-907e-d0450b3cc5e1)

# List Available Slots API:
- Endpoint: `/api/available-slots`
- Method: GET
- Description: Retrieves all available booking slots for a given date.


![image](https://github.com/Moumita2002/Book/assets/102172188/96633753-ba4f-4f6f-972c-61bef56c2709)

# Schedule Booking API:
Endpoint: `/api/bookings`
Method: POST
Description: Allows users to schedule a booking. 

![image](https://github.com/Moumita2002/Book/assets/102172188/c7485061-0093-47a7-9ca7-ac2466fc7763)

# List Booked Slots API:
Endpoint: `/api/bookings`
Method: GET
Description: Retrieves all booked slots.

![image](https://github.com/Moumita2002/Book/assets/102172188/68ac7b85-3be3-4c1d-befa-4229ef4d13b4)


How to run the application ?
- Clone the repo
- Install dependencies  by using command "npm install"
- Create a separate dotenv file to save your MongoDB url/password
- To run use the command "npm start"
