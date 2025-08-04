# 📘 Next.js Notes for README

## 📦 Global CSS – Key Points

* ✅ Imported only in `pages/_app.js` or `_app.tsx`.
* 🌍 Applies globally to the entire application.
* 🚫 Does not support scoping — styles affect all components/pages.
* ⚠️ High chance of style conflicts if class names are reused.

### 📂 Useful For:

* Reset styles (`normalize.css`)
* Base layout styles
* Fonts, colors, or themes

---

## 📙 CSS Modules – Key Points

* ✅ File must end with `.module.css` (e.g., `Button.module.css`).
* 📦 Supports scoped styling — styles apply only to the importing component.
* 💥 Prevents class name collisions.
* 👨‍🔧 You can use them in any component or page.

### 🎯 Useful For:

* Component-specific styles
* Reusable UI elements (buttons, cards, etc.)
* Cleaner and safer styling in team projects

---

## 🖼️ next/image Component – Important Points

### ✅ What is it?

`next/image` is an optimized replacement for the `<img>` tag. It provides automatic image optimization and performance benefits.

### 📥 Import:

```jsx
import Image from 'next/image';
```

### 🧾 Basic Usage:

```jsx
<Image
  src="/images/profile.jpg"
  alt="Profile Picture"
  width={200}
  height={200}
/>
```

### 🔑 Key Features:

| Feature                   | Description                                                           |
| ------------------------- | --------------------------------------------------------------------- |
| 🧠 Automatic Optimization | Resizes, compresses, and serves images in modern formats (WebP, AVIF) |
| ⚡ Lazy Loading            | Images load only when in view                                         |
| 📏 Responsive             | Support for `fill`, `sizes`, etc.                                     |
| 📍 CDN Support            | Works with Next.js Image CDN or custom loaders                        |
| 🔒 Prevents Layout Shift  | Requires width/height to avoid Cumulative Layout Shift                |

### 📐 Responsive Example:

```jsx
<div style={{ position: 'relative', width: '100%', height: '300px' }}>
  <Image
    src="/banner.jpg"
    alt="Banner"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
```

### ⚙️ External Images:

Add domain to `next.config.js`:

```js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
  },
};
```

---

## 🧠 Metadata in Next.js – Important Points

### ✅ What is metadata?

Built-in support for SEO tags like `<title>`, `<meta>`, Open Graph, Twitter cards, etc.

### 📍 Where to use it?

Use `export const metadata = {}` inside `page.tsx` or `layout.tsx` in the `/app` directory.

### 🧾 Example:

```tsx
export const metadata = {
  title: 'Home | My Portfolio',
  description: 'Welcome to my personal portfolio website.',
};
```

### 🔑 Common Properties:

| Property     | Description                     | Example                               |
| ------------ | ------------------------------- | ------------------------------------- |
| title        | Page title                      | `'About'`                             |
| description  | SEO-friendly summary            | `'Learn more about me'`               |
| keywords     | Array of keywords               | `['nextjs', 'portfolio']`             |
| authors      | Author info                     | `[{ name: 'Vikash' }]`                |
| openGraph    | Social preview                  | `{ title, description, images, url }` |
| twitter      | Twitter card info               | `{ card, title, description }`        |
| metadataBase | Base URL for relative OG images | `new URL('https://yourdomain.com')`   |

---

## 🔀 Server vs Client Components

### 🔵 Server Components (Default):

* Rendered on server only
* Cannot use `useEffect`, `window`, or event handlers
* Lighter and more performant

### 🟠 Client Components:

* Must add `'use client';` at the top
* Required for `useState`, `useEffect`, DOM events

### ⚖️ Comparison:

| Feature           | Server     | Client           |
| ----------------- | ---------- | ---------------- |
| Runs in browser   | ❌          | ✅                |
| useEffect allowed | ❌          | ✅                |
| Event handlers    | ❌          | ✅                |
| Data fetching     | ✅ (direct) | ⚠️ (needs hooks) |

### ✅ Best Practice:

Use Server Components by default. Use Client Components only for interactivity.

---

## 📌 Dynamic Routes & Nested Dynamic Routes

### ✅ Basic Dynamic Route

```
app/product/[id]/page.tsx
```

URL Example: `/product/123`

```tsx
export default function ProductPage({ params }) {
  return <h1>Product ID: {params.id}</h1>;
}
```

### ✅ Nested Dynamic Route

```
app/user/[userId]/post/[postId]/page.tsx
```

URL: `/user/42/post/7`

```tsx
export default function PostPage({ params }) {
  return (
    <>
      <h1>User ID: {params.userId}</h1>
      <h2>Post ID: {params.postId}</h2>
    </>
  );
}
```

### 📎 Catch-All Routes:

```
app/docs/[...slug]/page.tsx
```

URL: `/docs/a/b/c`

```ts
params.slug = ['a', 'b', 'c']
```

### ❓ Optional Catch-All:

```
app/docs/[[...slug]]/page.tsx
```

Works with `/docs` or `/docs/a/b`

```ts
params.slug = undefined or ['a', 'b']
```

### 📑 Summary Table:

| Type               | Folder Name         | URL                  | Params                      |
| ------------------ | ------------------- | -------------------- | --------------------------- |
| Dynamic            | `[id]`              | `/product/123`       | `{ id: '123' }`             |
| Nested             | `[userId]/[postId]` | `/user/42/post/7`    | `{ userId, postId }`        |
| Catch-all          | `[...slug]`         | `/docs/a/b/c`        | `{ slug: ['a', 'b', 'c'] }` |
| Optional catch-all | `[[...slug]]`       | `/docs` or `/docs/a` | `undefined` or array        |

---
 searchParams, useSearchParams, and Catch-All Routes
A quick guide to understanding how to work with query parameters and dynamic routes in the latest Next.js App Router.

📌 searchParams (Server Component)
✅ Where to Use
Server Components (e.g., app/products/page.tsx)

Automatically passed as a prop by Next.js

⚠️ Notes
Only available in Server Components

In route groups (e.g., (users)), may need to await it

💡 Example
tsx
Copy
Edit
export default async function ProductsPage({ searchParams }) {
  const { category, color } = await searchParams;

  return (
    <div>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
    </div>
  );
}
⚛️ useSearchParams() (Client Component)
✅ Where to Use
Client Components only

Must include 'use client' at the top

🔧 How It Works
React hook from next/navigation

Returns a URLSearchParams object (no await needed)

💡 Example
tsx
Copy
Edit
'use client';

import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const color = searchParams.get('color');

  return (
    <div>
      <h3>Client-side Products</h3>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
    </div>
  );
}
🧩 Catch-All & Optional Catch-All Routes
🪝 What Is a Catch-All Route?
A route that captures any number of path segments.

📁 Example File
bash
Copy
Edit
app/blog/[...slug]/page.tsx
🔗 Matches
css
Copy
Edit
/blog/a
/blog/a/b
/blog/a/b/c
💡 Code Example
tsx
Copy
Edit
export default function Page({ params }) {
  const slug = params.slug;

  return <h3>Slug: {slug.join(' / ')}</h3>;
}
🟨 Optional Catch-All Route
📁 Example File
lua
Copy
Edit
app/blog/[[...slug]]/page.tsx
🔗 Matches
bash
Copy
Edit
/blog
/blog/a
/blog/a/b
💡 Code Example
tsx
Copy
Edit
export default function Page({ params }) {
  const slug = params.slug || [];

  return (
    <div>
      <h3>
        {slug.length
          ? `You opened: ${slug.join(' > ')}`
          : 'Welcome to Blog Home'}
      </h3>
    </div>
  );
}
📑 Summary Table
Route Type	File Name	Matches	Example Output
Catch-All	[...slug]	/a, /a/b/c	params.slug = ['a', 'b', 'c']
Optional Catch-All	[[...slug]]	/, /a, /a/b	params.slug = undefined or array

📘 Real-World Example: Docs Page
📁 Folder
lua
Copy
Edit
app/docs/[[...slug]]/page.tsx
💡 Code Example
tsx
Copy
Edit
export default function DocsPage({ params }) {
  const slug = params.slug || [];

  return (
    <div>
      <h3>
        {slug.length
          ? `You opened: ${slug.join(' > ')}`
          : 'Welcome to Docs Home'}
      </h3>
    </div>
  );
}
🔍 Example URLs & Outputs
URL	Output
/docs	Welcome to Docs Home
/docs/getting-started	You opened: getting-started
/docs/api/auth/login	You opened: api > auth > login

✅ When to Use Catch-All Routes
Use when building:

📝 Documentation systems

📰 Blogs with nested categories

📁 Deeply structured directories

🧩 Flexible and scalable content pages

