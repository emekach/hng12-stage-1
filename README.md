# Number Classification API

This is a simple API that takes a number as input and returns various mathematical properties about it, such as whether it's prime, perfect, Armstrong, and its digit sum. Additionally, it fetches a fun fact about the number.

## Features

- **Prime Check:** Determines if the number is prime.
- **Perfect Number Check:** Determines if the number is a perfect number.
- **Armstrong Number Check:** Determines if the number is an Armstrong number.
- **Properties:** Provides relevant properties like odd, even, Armstrong, etc.
- **Digit Sum:** Calculates the sum of the digits of the number.
- **Fun Fact:** Fetches a fun fact from the Numbers API.

## Technologies Used

- **Node.js** - Backend JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **CORS** - To handle cross-origin resource sharing
- **Numbers API** - To fetch fun facts about the number

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A modern code editor (e.g., VSCode).

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/emekach/hng12-stage-1.git
cd hng12-stage-1.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
npm start
```

4. **Open the API in your browser or API client** (Postman):

   ```
   http://localhost:3000/api/classify-number?number=<your-number>
   ```

## API Endpoints

### `GET /api/classify-number?number=<number>`

#### Parameters

- **number**: (Required) The number to classify. The input must be a valid integer.

#### Example Request

```bash
GET http://localhost:3000/api/classify-number?number=371
```

#### Example Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Example Response (400 Bad Request)

```json
{
  "number": "alphabet",
  "error": true
}
```
