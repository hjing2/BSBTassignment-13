# Haodan Jing Coding Assignment 12 - Component Library

This project is a React application that demonstrates the usage of various reusable UI components. The components included are Button, Card, Dropdown, HeroImage, Img, Table, and RadioButton. Each component is tested to ensure visibility and correct behavior when in a disabled state.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Card](#card)
  - [Dropdown](#dropdown)
  - [HeroImage](#heroimage)
  - [Img](#img)
  - [Table](#table)
  - [RadioButton](#radiobutton)
- [Testing](#testing)
- [Storybook](#storybook)
- [Docker](#docker)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hjing2/BSBTassignment12.git
   cd your-repo-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:8083`.

## Usage

The main application file is `App.tsx`, which includes examples of each component. You can modify `App.tsx` to add more examples or use the components in different ways.

## Components

## Button

A simple button component.

## Card

A card component with a title and content.

## Dropdown

A dropdown component with a list of options.

## HeroImage

A hero image component that displays a large image.

## Img

An image component that displays a regular image.

## Table

A table component that displays headers and rows of data.

## RadioButton

A radio button component that allows for selecting an option.

## Testing

To run tests for the components, use the following command:

```bash
npm test
```

## Docker

To build a Docker image for the application, use the following command:

```bash
docker build -t haodan_jing_coding_assignment13 .
```

Run the Docker image using the following command:

```bash
docker run -p 8018:8018 -d --name haodan_jing_coding_assignment13
```

The application will be available at `http://localhost:8018`.
