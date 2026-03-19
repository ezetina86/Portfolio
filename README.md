# My Personal Portfolio

![Deploy Status](https://github.com/ezetina86/Portfolio/actions/workflows/deploy.yml/badge.svg)

This is a personal portfolio website built with Astro, designed to showcase my projects, skills, experience, and certifications.

## Features

*   **Modern Stack:** Built with Astro for fast performance and a great developer experience.
*   **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
*   **Tailwind CSS:** Styled with Tailwind CSS for utility-first styling and easy customization.
*   **Modular Components:** Organized into reusable Astro components for maintainability.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (which includes npm) installed on your machine.

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone git@github.com:ezetina86/Portfolio.git
    ```
2.  Navigate to the project directory
    ```sh
    cd Portfolio
    ```
3.  Install dependencies
    ```sh
    make install
    ```

### Available Commands

All common tasks are wrapped by the `Makefile`. Run `make help` to list them at any time.

| Command | Description |
|---|---|
| `make dev` | Start dev server at `http://localhost:4321` |
| `make build` | Build static site to `dist/` |
| `make preview` | Build then serve `dist/` locally |
| `make test` | Run tests once |
| `make test-watch` | Run tests in watch mode |
| `make test-ui` | Run tests with browser UI |
| `make install` | Install dependencies |
| `make clean` | Remove `dist/` build output |

### Development

To start the development server:

```sh
make dev
```

This will start a local development server at `http://localhost:4321`.

### Build

To build the project for production:

```sh
make build
```

This generates a `dist/` directory with all the static assets.

### Preview

To preview the production build locally:

```sh
make preview
```

## Project Structure

```
.astro/
public/
src/
├── components/ # Reusable Astro components (e.g., Header, Footer, Hero)
├── data/       # Data files for content (e.g., certifications, experience)
├── layouts/    # Astro layouts for consistent page structure
├── pages/      # Astro pages (e.g., index.astro)
├── scripts/    # JavaScript files for interactivity
└── styles/     # Global styles and animations
```

## Page Architecture

The main `index.astro` page composes various components to form the complete portfolio layout.

```mermaid
graph TD
    A[index.astro] --> B(Header.astro)
    A --> C(Hero.astro)
    A --> D(About.astro)
    A --> E(Skills.astro)
    A --> F(Experience.astro)
    A --> G(Education.astro)
    A --> H(Projects.astro)
    A --> I(Certifications.astro)
    A --> J(Contact.astro)
    A --> K(Footer.astro)
```

## Deployment

After running `make build`, the `dist/` directory contains the static files ready for deployment. You can deploy this directory to any static site hosting service (e.g., Netlify, Vercel, GitHub Pages).

## License

Distributed under the MIT License. See `LICENSE` for more information. (Note: You might need to create a LICENSE file if you don't have one.)

## Contact

Enrique Zetina - [jenzetin@gmail.com](mailto:jenzetin@gmail.com)
Project Link: [https://github.com/ezetina86/Portfolio](https://github.com/ezetina86/Portfolio)
