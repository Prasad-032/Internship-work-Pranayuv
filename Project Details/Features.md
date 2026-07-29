# Features in website

1. Request Quote
2. Login
3. Signup
4. Product
5. Admin
6. Payment
7. Dashboard


## 1. Request Quote 


**Feature Name**: Request Quote

**Input**:
- Product ID
- Quantity
- User details (name, email, phone)
- Company Name/Details
- Optional message

**Process**:
- Validate inputs (no empty fields)
- Save request in database
- Assign status = "Pending"

**Output**:
- Show success message
- Send confirmation email
- Show request in user dashboard

## 2. User Registration (Signup)

**Input**:
- Name
- Email
- Password

**Process**:
- Check if email already exists
- Hash password
- Save user data

**Output**:
- Account created
- Redirect to login/dashboard

## 3. Login

**Input**:
- Email
- Password

**Process**:
- Verify credentials
- Generate session/token

**Output**:
- Login success → go to dashboard
- If wrong → show error

## 4. Product Browsing

**Input**:
- User selects category/search

**Process**:
- Fetch products from database

**Output**:
- Display product list

## 5. Product Details Page

**Input**:
- Product ID

**Process**:
- Fetch product info

**Output**:
- Show:
 - Images
 - Specs
 - Features
 - “Request Quote” button

## 6. Admin – Handle Requests

**Input**:
- Admin selects a quote request

**Process**:
- View request details
- Enter price + message
- Update status = "Quoted"

**Output**:
- Notify user
- Update dashboard

## 7. Payment (After Approval)

**Input**:
- User accepts quote

**Process**:
- Choose payment method
- Process payment / generate invoice

**Output**:
- Payment confirmation

## 8. Dashboard (User)

**Input**:
- Logged-in user

**Process**:
- Fetch user requests/orders

**Output**:
- Show:
 - Request status
 - Orders
 - Messages
