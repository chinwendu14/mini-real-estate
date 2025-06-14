This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mini real estate project

This is a simplified real estate frontend prototype built with Next.js and Tailwind CSS. The app allows users to explore different towers, select a floor, and view apartment layouts along with relevant metadata.

## Features

Tower Overview Page

- Users can select from 3 towers (Tower A, B, or C).

Floor Selection View

- Each tower leads to a floor selector showing 10–15 floor options.

Apartment Layouts

- Each floor displays 3–4 apartment layouts showing:

A thumbnail image (placeholder)

Area (e.g., “65 sqm”)

Unit type (e.g., Studio, 1BHK)

Room count

Apartment Detail Page

- Shows a larger image of the layout and full metadata.

Bonus Hover Interaction

- When hovering over an apartment thumbnail, the background subtly darkens and the image scales up with a smooth animation (also works on mobile).

## Tech Stack

Framework: Next.js 15

Styling: Tailwind CSS v4

Images: next/image for optimized images

Routing: Client-side navigation using Next.js hooks

Deployment: Vercel or Netlify

## Folder Structure

- pages
  index
  Floor
  tower
  apartment

## constants

Route constants

## sharables

Dummy data (floors, towers, apartments)

## Limitations

No backend or dynamic API — all data is hardcoded using dummy arrays.

Navigation is done via query parameters instead of dynamic routes.

Images are placeholders and may appear slightly blurred due to scaling.

Basic styling — can be extended with better UI/UX polish and accessibility.
