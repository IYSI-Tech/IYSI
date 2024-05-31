# NextEd API

## Setup

To set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2. **Install dependencies:**
    ```bash
    composer install
3. **Set up environment variables:**
    
    Copy the .env.example file to .env and configure your database and other environment variables.
    ```bash
    cp .env.example .env
4. **Generate an application key:**
    ```bash
    php artisan key:generate
5. **Run database migrations:**
    ```bash
    php artisan migrate
6. **Start the development server:**
    ```bash
    php artisan serve
# Registration Endpoint
**Body**

    curl -X POST http://localhost:8000/register \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{
        "name": "John Doe",
        "email": "john.doe@example.com",
        "gender": "male",
        "occupation": "developer",
        "institution": "University of Abuja"
    }'

**Success Response**
    
Code: 201 Created

    {
        "status": true,
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "gender": "male",
            "occupation": "developer",
            "institution": "University of Abuja",
            "updated_at": "2024-05-31T04:24:08.000000Z",
            "created_at": "2024-05-31T04:24:08.000000Z",
            "id": 1
        },
        "message": "Registered successfully"
    }

**Validation Response**

Code: 422 Unprocessable Entity

    {
        "message": "The name field is required. (and 4 more errors)",
        "errors": {
            "name": [
                "The name field is required."
            ],
            "email": [
                "The email field is required."
            ],
            "gender": [
                "The gender field is required."
            ],
            "occupation": [
                "The occupation field is required."
            ],
            "institution": [
                "The institution field is required."
            ]
        }
    }
