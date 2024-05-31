# NextEd API

## Setup

To set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone -b nexted-api https://github.com/NextEdArchi/NextEd.git
   cd nexted-api
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

    curl -X POST http://localhost:8000/api/register \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{
        "name": "John Doe",
        "email": "john.doe@example.com",
        "gender": "male",
        "occupation": "Student",
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
            "occupation": "Student",
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

# Newsletter Endpoint
**Body**

    curl -X POST http://localhost:8000/api/newsletter \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{
        "name": "John Doe",
        "email": "john.doe@example.com",
        "gender": "male",
        "occupation": "Student",
        "institution": "University of Abuja",
        "area_interest": "Architectural Software Training",
        "frequency": "Monthly"
    }'

**Success Response**
    
Code: 201 Created

    {
        "status": true,
        "newsletter": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "gender": "male",
            "occupation": "Student",
            "institution": "University of Abuja",
            "area_interest": "Architectural Software Training",
            "frequency": "Monthly",
            "updated_at": "2024-05-31T04:53:58.000000Z",
            "created_at": "2024-05-31T04:53:58.000000Z",
            "id": 1
        },
        "message": "Newsletter Added successfully"
    }


**Validation Response**

Code: 422 Unprocessable Entity

    {
        "message": "The name field is required. (and 6 more errors)",
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
            ],
            "area_interest": [
                "The area interest field is required."
            ],
            "frequency": [
                "The frequency field is required."
            ]
        }
    }

# Community Endpoint
**Body**

    curl -X POST http://localhost:8000/api/community \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{
        "name": "John Doe",
        "email": "john.doe@example.com",
        "mobile": "09099009900",
        "gender": "male",
        "occupation": "Student",
        "institution": "University of Abuja",
        "join_reason": "To learn",
        "area_interest": "Architectural Software Training",
        "software_interest": "AutoCAD",
        "referral_source": "Social Media"
    }'

**Success Response**
    
Code: 201 Created

    {
        "status": true,
        "community": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "gender": "male",
            "mobile": "09099009900",
            "occupation": "Student",
            "institution": "OAU",
            "join_reason": "To learn",
            "area_interest": "Architectural Software Training",
            "software_interest": "Architectural Software Training",
            "referral_source": "Social Media",
            "updated_at": "2024-05-31T05:31:10.000000Z",
            "created_at": "2024-05-31T05:31:10.000000Z",
            "id": 1
        },
        "message": "community Added successfully"
    }


**Validation Response**

Code: 422 Unprocessable Entity

    {
        "message": "The name field is required. (and 9 more errors)",
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
            "mobile": [
                "The mobile field is required."
            ],
            "occupation": [
                "The occupation field is required."
            ],
            "institution": [
                "The institution field is required."
            ],
            "join_reason": [
                "The join reason field is required."
            ],
            "area_interest": [
                "The area interest field is required."
            ],
            "software_interest": [
                "The software interest field is required."
            ],
            "referral_source": [
                "The referral source field is required."
            ]
        }
    }

# Contact Endpoint
**Body**

    curl -X POST http://localhost:8000/api/contact \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{
        "name": "John Doe",
        "email": "john.doe@example.com",
        "mobile": "09099009900",
        "organization": "Innovative Inc.",
        "institution": "OAU",
        "position": "HOD",
        "proposal": "Design an innovative architectural solution to optimize system performance and scalability while ensuring seamless integration with existing infrastructure.",
        "website": "nexted.com",
        "referral_source": "Social Media"
    }'

**Success Response**
    
Code: 201 Created

    {
        "status": true,
        "contact": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "mobile": "09099009900",
            "organization": "Innovative Inc.",
            "position": "HOD",
            "proposal": "Design an innovative architectural solution to optimize system performance and scalability while ensuring seamless integration with existing infrastructure.",
            "website": "nexted.com",
            "referral_source": "Social Media",
            "updated_at": "2024-05-31T05:46:46.000000Z",
            "created_at": "2024-05-31T05:46:46.000000Z",
            "id": 1
        },
        "message": "Contact Added successfully"
    }


**Validation Response**

Code: 422 Unprocessable Entity

    {
        "message": "The name field is required. (and 7 more errors)",
        "errors": {
            "name": [
                "The name field is required."
            ],
            "email": [
                "The email field is required."
            ],
            "mobile": [
                "The mobile field is required."
            ],
            "organization": [
                "The organization field is required."
            ],
            "position": [
                "The position field is required."
            ],
            "proposal": [
                "The proposal field is required."
            ],
            "website": [
                "The website field is required."
            ],
            "referral_source": [
                "The referral source field is required."
            ]
        }
    }