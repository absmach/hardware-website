# Abstract Machines Hardware Website

Official documentation and product showcase for Abstract Machines IoT gateway hardware. Built with [Next.js](https://nextjs.org/) and [Fumadocs](https://www.fumadocs.dev/).

## Products

### S0 IoT Gateway

Swiss knife for wireless IoT. Multi-protocol gateway with ESP32-C6 RISC-V, supporting Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Runs Zephyr RTOS.

### S0 Base Board

Modular expansion board with W5500 Ethernet, TSS721A M-Bus transceiver, SD card logging, and robust power management.

## Website Features

- Product showcase and specifications
- Comprehensive documentation with MDX support
- Use case examples and deployment guides
- Static site generation for optimal performance
- Search functionality powered by Orama
- Responsive design with dark mode support
- SEO-optimized with sitemap and robots.txt

## Getting Started

### Prerequisites

- [Bun](https://bun.com/) (recommended) or Node.js

### Installation

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

Open <http://localhost:3000> with your browser to see the result.

### Build

Build the static site:

```bash
bun run build
```

The output will be generated in the `out` directory.

### Preview Production Build

```bash
bun run start
```

### Linting

```bash
bun run lint
bun run lint:fix  # Auto-fix issues
```

## Deployment

The site is configured for static export and can be deployed to GitHub Pages (via [`.github/workflows/cd.yml`](.github/workflows/cd.yml)) or any other static hosting provider.

## License

See [LICENSE](LICENSE) file for details.
