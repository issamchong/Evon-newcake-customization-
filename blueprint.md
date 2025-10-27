# Blueprint

## Overview

A simple Next.js application with a two-section layout. The top section features an image slideshow, and the bottom section includes an interactive icon display controlled by a side menu.

## Design and Features

### Layout

*   **Two-section vertical layout:** The application is divided into two main vertical sections.
*   **Top section:** Contains an image slideshow component.
*   **Bottom section:** Features a side menu with icon buttons and a corresponding icon display area.

### Styling

*   **Theme:** Dark theme using a gray color palette (`bg-gray-900`, `bg-gray-800`, `bg-gray-700`).
*   **Highlighting:** The currently selected item in the side menu is highlighted with a blue background (`bg-blue-500`).

### Components

*   **`Slideshow.tsx`:** A component for displaying a slideshow of images. (Currently a placeholder).
*   **`IconDisplay.tsx`:** A component that displays a grid of icons based on a selected category.
*   **`page.tsx`:** The main page component that integrates the `Slideshow` and `IconDisplay` components.

### Interactivity

*   **Side Menu:** The side menu in `page.tsx` contains three icon buttons.
*   **State Management:** Clicking a button on the side menu updates the `category` state, which determines the icons shown in the `IconDisplay`.
*   **Dynamic Content:** The `IconDisplay` component dynamically renders icons from predefined categories ("energy", "files", "layouts").

### Icons

*   **Library:** The project uses the `lucide-react` library for all icons.

## Current Request

### Goal

Implement a two-section layout based on the provided image, featuring an image slideshow and an interactive icon display with a side menu.

### Steps

1.  **Create `IconDisplay.tsx`:** A new component was created to display a grid of icons based on a given category.
2.  **Update `page.tsx`:** The main page was modified to incorporate the two-section layout, including the `Slideshow` and the new `IconDisplay` component.
3.  **Install Dependencies:** The `lucide-react` library was installed to provide the necessary icons.
4.  **Add State Management:** State was added to `page.tsx` to manage the currently selected icon category from the side menu.
5.  **Implement Dynamic Updates:** The `IconDisplay` component was made to dynamically update its content based on the state passed from `page.tsx`.
6.  **Apply Styling:** The components were styled with a dark theme, and the active side menu button was given a distinct highlight color for better user feedback.
