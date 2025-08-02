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

📝 Keep updating your notes with real project examples and usage. This will make your README even stronger 💪

🔍 1. searchParams (Server Component)
✅ Used in: Server Components (like app/products/page.js)
searchParams is automatically passed as a prop by Next.js to your server component.

It works on the server and must be used with await (in route groups or advanced usage).

✅ Syntax:
js
Copy
Edit
export async function ProductsPage({ searchParams }) {
  const { category, color } = await searchParams;
  // ...
}

⚛️ 2. useSearchParams() (Client Component)
✅ Used in: Client Components (with 'use client' at the top)
useSearchParams is a React hook from next/navigation

Only works on the client side

Returns a URLSearchParams object (synchronous)

✅ Syntax:
js
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
      <h1>Client-side Products</h1>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
    </div>
  );
}

🧩 What is a Catch-All Route?
👉 It is used when:
You want your page to match many different URLs, even if you don’t know how many parts the URL will have.

✅ Example:
Let’s say you have this file:

bash
Copy
Edit
app/blog/[...slug]/page.js
This will match all these URLs:

css
Copy
Edit
/blog/a
/blog/a/b
/blog/a/b/c/d
So it "catches all" paths after /blog/

📦 How do you get the data?
In page.js, you get the URL parts like this:

js
Copy
Edit
export default function Page({ params }) {
  const slug = params.slug;

  return (
    <div>
      <h1>Slug: {slug.join(' / ')}</h1>
    </div>
  );
}
If you go to /blog/hello/world, it will show:

makefile
Copy
Edit
Slug: hello / world
🟨 What is Optional Catch-All?
If you use:

lua
Copy
Edit
app/blog/[[...slug]]/page.js
Then it also matches /blog — even if there's nothing after it.

✅ Example:
This matches:

/blog

/blog/a

/blog/a/b

And in your code:

js
Copy
Edit
const slug = params.slug || []; // might be undefined
✨ Simple Summary:
Route File Name	What It Matches
[...slug]	/a, /a/b, /a/b/c (at least 1 part)
[[...slug]]	also / (can match empty URL parts)

📘 Real Use Case Example:
Folder:
lua
Copy
Edit
app/docs/[[...slug]]/page.js
Code:
js
Copy
Edit
export default function DocsPage({ params }) {
  const slug = params.slug || [];

  return (
    <div>
      <h1>{slug.length ? `You opened: ${slug.join(' > ')}` : 'Welcome to Docs Home'}</h1>
    </div>
  );
}
Example URLs:
/docs → shows: Welcome to Docs Home

/docs/getting-started → shows: You opened: getting-started

/docs/api/auth/login → shows: You opened: api > auth > login

✅ When to Use
You’re building docs, blogs, categories, help centers, etc.

You want to handle many different nested routes with one page file.