# Admin Dashboard - Folder Structure & Architecture

## 📁 Project Structure

```
admindashboard/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── Button.jsx    # Customizable button component
│   │   │   ├── Card.jsx      # Card container component
│   │   │   ├── Input.jsx     # Form input component
│   │   │   ├── Modal.jsx     # Modal dialog component
│   │   │   └── Table.jsx     # Data table component
│   │   │
│   │   └── layout/           # Layout components
│   │       ├── Header.jsx    # Top navigation header
│   │       ├── Layout.jsx    # Main layout wrapper
│   │       └── Sidebar.jsx   # Fixed sidebar navigation
│   │
│   ├── pages/               # Page components (routes)
│   │   ├── Contact.jsx      # Contact messages management
│   │   ├── Dashboard.jsx    # Dashboard overview
│   │   ├── Media.jsx        # Media gallery management
│   │   ├── News.jsx         # News articles management
│   │   └── Press.jsx        # Press releases management
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and custom CSS
│
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.cjs      # PostCSS configuration
```

## 🎯 Key Features

### 1. **Media Page** (`/media`)
- Upload multiple images
- View images in a grid layout
- Delete images with confirmation
- Preview images in modal
- Display upload dates
- Responsive grid (1-4 columns based on screen size)

### 2. **Press Releases Page** (`/press`)
- Add new press releases
- Edit existing releases
- Delete releases with confirmation
- Upload images for each release
- Card-based layout
- Full CRUD operations

### 3. **News & Articles Page** (`/news`)
- Add news article links
- Edit article information
- Delete articles
- Table view with sortable data
- Direct links to articles

### 4. **Contact Messages Page** (`/contact`)
- View all contact messages
- Mark messages as read/new
- View full message in modal
- Reply via email
- Delete messages
- Status badges (new/read)

### 5. **Dashboard Page** (`/`)
- Overview statistics
- Quick action buttons
- Recent activity feed
- Clickable stat cards linking to pages

## 🔧 Reusable Components

### Button Component
```jsx
<Button variant="primary|secondary|danger|outline|ghost|link" size="xs|sm|md|lg|xl">
  Click me
</Button>
```

### Card Component
```jsx
<Card className="custom-class">
  Content here
</Card>
```

### Input Component
```jsx
<Input 
  label="Name"
  value={value}
  onChange={handleChange}
  placeholder="Enter name"
/>
```

### Modal Component
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  size="sm|md|lg|xl"
  footer={<ButtonGroup />}
>
  Modal content
</Modal>
```

### Table Component
```jsx
<Table 
  columns={columns}
  data={data}
  actions={actions}
  onAction={handleAction}
/>
```

## 🎨 Design Features

- **Fixed Sidebar**: Always visible, doesn't hide on small screens
- **Gradient Backgrounds**: Modern gradient colors for stats and sidebar
- **Smooth Animations**: Fade-in, hover effects, and transitions
- **Responsive Design**: Works on all screen sizes
- **Icon Integration**: SVG icons throughout the interface
- **Custom Scrollbars**: Styled scrollbars for better aesthetics
- **Shadow Effects**: Elevation and depth with shadows
- **Hover States**: Interactive feedback on all clickable elements

## 🚀 How to Use

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Adding New Features

### To Add a New Page:
1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add menu item in `src/components/layout/Sidebar.jsx`
4. Update header title in `src/components/layout/Header.jsx`

### To Add a New Reusable Component:
1. Create component file in `src/components/common/`
2. Export the component
3. Import and use in your pages

## 🎨 Color Scheme

- **Primary Blue**: Blue gradients (#3b82f6 to #2563eb)
- **Purple**: Purple gradients (#a855f7 to #9333ea)
- **Green**: Green gradients (#10b981 to #059669)
- **Orange**: Orange gradients (#f59e0b to #d97706)
- **Gray**: Sidebar and UI elements (#1f2937 to #111827)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🔐 Best Practices

1. **Component Reusability**: All UI components are in `common/` folder
2. **Consistent Styling**: Use Tailwind classes for consistency
3. **State Management**: Local state with useState for each page
4. **Confirmation Dialogs**: Always confirm destructive actions
5. **Responsive Images**: Use object-fit and responsive grids
6. **Accessibility**: Semantic HTML and ARIA labels
7. **Code Organization**: Separate concerns (layout, pages, components)
