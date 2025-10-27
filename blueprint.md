# Blueprint

## Overview

A simple Next.js application with a two-section layout. The top section features an image slideshow, and the bottom section includes an interactive item display controlled by a side menu.

## Design and Features

### Layout

*   **Two-section vertical layout:** The application is divided into two main vertical sections.
*   **Top section:** Contains an image slideshow component.
*   **Bottom section:** Features a side menu with icon buttons and a corresponding item display area.

### Styling

*   **Theme:** Light theme with a white background (`bg-white`) and dark text (`text-gray-800`).
*   **Side Menu:** The side navigation menu has a light gray background (`bg-gray-100`) and rounded corners. The icons inside fit the menu exactly with no extra padding.
*   **Highlighting:** The currently selected item in the side menu is highlighted with a light gray background (`bg-gray-300`).
*   **Cards:** The items in the selected items section are displayed in a card format with a modern design.
    *   **Background:** Cards have a white background (`bg-white`) by default, which changes to light pink (`bg-pink-200`) when selected.
    *   **Border:** Cards have a light gray border (`border-gray-200`).
    *   **Image:** Each card features a placeholder image on a light gray background (`bg-gray-100`).
    *   **Effects:** The cards have hover effects, rounded corners, and a pointer cursor.

### Components

*   **`Slideshow.tsx`:** A component for displaying a slideshow of images. (Currently a placeholder).
*   **`IconDisplay.tsx`:** A component that displays a grid of cards. Each card has a specific layout including an image placeholder, name, description, details, and price.
*   **`page.tsx`:** The main page component that integrates the `Slideshow` and `IconDisplay` components.

### Interactivity

*   **Side Menu:** The side menu in `page.tsx` contains six icon buttons: Shapes, Flavor, Color, Energy, Files, and Layouts. The "Shapes", "Flavor", and "Color" icons are custom images loaded from a URL.
*   **Card Selection:** Users can click on a card to select it, changing its background color. Only one card can be selected at a time. The selection is reset when the category changes.
*   **State Management:** 
    *   `category` state in `page.tsx` controls which set of items is displayed. The default category is "shapes".
    *   `selectedIndex` state in `IconDisplay.tsx` tracks the selected card.
*   **Dynamic Content:** The `IconDisplay` component dynamically renders cards from predefined categories ("shapes", "flavor", "color", "energy", "files", "layouts").

### Icons

*   **Library:** The project uses the `lucide-react` library for some of the side menu icons.
*   **Custom Icons:** The "Shapes", "Flavor", and "Color" icons are loaded from external URLs.
*   **Size:** The icons in the sidebar have a size of `w-8 h-8`.

## Current Request

### Goal

Adjust the sidebar so that the icons fit the menu exactly with no extra padding.

### Steps

1.  **Update `page.tsx`:**
    *   Removed the padding (`p-4`) and vertical spacing (`space-y-4`) from the sidebar container.
    *   Removed the `rounded-md` class from the individual buttons.
    *   Added `overflow-hidden` to the sidebar container to ensure the button backgrounds do not clip the container's rounded corners.
    *   Centered the icons within each button using `mx-auto`.
