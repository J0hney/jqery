# DPS ChatBot

A modern React chat application built with Vite, featuring a clean two-column layout with sidebar navigation and chat interface.

## Features

- **Two-column layout**: Sidebar for navigation and main chat area
- **Recent chats**: List of previous conversations with date stamps
- **Message bubbles**: User and bot messages with different styling
- **Interactive features**: Edit, copy, and rating functionality for messages
- **Modern UI**: Clean, responsive design with CSS modules

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left sidebar with chat list
│   ├── Sidebar.module.css
│   ├── ChatArea.jsx         # Main chat display area
│   ├── ChatArea.module.css
│   ├── Message.jsx          # Individual message bubble
│   └── Message.module.css
├── data/
│   └── mockData.js          # Mock data for chats and messages
├── App.jsx                   # Main application component
├── App.module.css
├── main.jsx                  # React entry point
└── index.css                 # Global styles
```

## Technologies

- React 18
- Vite
- CSS Modules

## License

MIT

