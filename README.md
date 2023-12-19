# My App

This is a Progressive Web Application (PWA) built with Vite. It uses the `vite-plugin-pwa` for PWA capabilities.

## Features

- The application has a manifest for PWA with a short name, description, theme color, and icons.
- It uses Workbox for runtime caching. It caches API responses from `https://api.example.com` with a NetworkFirst strategy. The cache has a maximum of 200 entries and expires after 24 hours.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

1. Run `npm run dev` to start the development server.
2. Open your browser and navigate to `http://localhost:5000`.
3. To build the application for production, run `npm run build`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
