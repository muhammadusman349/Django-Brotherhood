# Brotherhood Sports

A full-stack sports manufacturing website built with Django REST Framework (backend) and React with Vite (frontend).

## Features

- **Products Management**: Browse, add, and delete sports products with filtering by category and search
- **Categories Management**: Create, edit, and delete product categories
- **Contact Form**: Submit contact inquiries with validation
- **Responsive Design**: Modern UI built with Tailwind CSS
- **REST API**: Full CRUD operations for products, categories, and contact submissions

## Tech Stack

### Backend
- Django 5.2
- Django REST Framework 3.15.2
- django-cors-headers 4.6.0
- django-filter 24.3
- SQLite database

### Frontend
- React 18.3.1
- Vite 5.3.1
- React Router DOM 6.23.1
- Tailwind CSS 3.4.4
- Axios 1.7.2
- Lucide React 0.400.0

## Project Structure

```
Brotherhood Sports/
├── backend/
│   ├── categories/          # Category app
│   ├── products/           # Product app
│   ├── contact/            # Contact app
│   ├── conf/               # Django project settings
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── services/       # API service layer
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd c:\Users\Public\Documents\Doc
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser (optional, for admin access):
```bash
python manage.py createsuperuser
```

6. Start the Django development server:
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Vite development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### Categories
- `GET /api/categories/` - List all categories
- `POST /api/categories/` - Create a new category
- `GET /api/categories/{id}/` - Get a specific category
- `PUT /api/categories/{id}/` - Update a category
- `DELETE /api/categories/{id}/` - Delete a category

### Products
- `GET /api/products/` - List all products (supports filtering by category and search)
- `POST /api/products/` - Create a new product
- `GET /api/products/{id}/` - Get a specific product
- `PUT /api/products/{id}/` - Update a product
- `DELETE /api/products/{id}/` - Delete a product

### Contact
- `GET /api/contact/` - List all contact submissions
- `POST /api/contact/` - Submit a contact form
- `DELETE /api/contact/{id}/` - Delete a contact submission

## Usage

1. Start both the backend and frontend servers
2. Open your browser to `http://localhost:5173`
3. Navigate through the application:
   - **Home**: Landing page with company information
   - **Products**: Browse and manage sports products
   - **Categories**: Manage product categories
   - **Contact**: Submit contact inquiries

## Development

### Adding Sample Data

You can use the Django admin panel or the API to add sample data:

1. Access admin at `http://localhost:8000/admin`
2. Login with your superuser credentials
3. Add categories first, then products

### Customization

- **Colors**: Modify `frontend/tailwind.config.js` to change the color scheme
- **API URL**: Update `API_BASE_URL` in `frontend/src/services/api.js` if your backend runs on a different port
- **Styling**: Modify Tailwind classes in React components

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure the backend settings in `conf/settings.py` includes your frontend URL in `CORS_ALLOWED_ORIGINS`.

### Database Issues
If you encounter database errors, try:
```bash
python manage.py migrate --run-syncdb
```

### Frontend Build Issues
If the frontend fails to build, try:
```bash
rm -rf node_modules
npm install
npm run dev
```

## License

This project is for educational purposes.


i have idea for i work in factory football manufaturing factory where i work as counting the footballs phase one is Matcing where one person match the printing pieces 1st sorting then 2nd sorting 
second phase is go these match piecs for stitiching  i count stitch footballs for example Shahid is the incharge od stitching under shahid there boys work with and stitch balls 
football article name 
stitcher name : total ball stitch 

third phase is final knot where the one person incharge under this person people work for exp
in final knot the person stitch with hand of football short piece 