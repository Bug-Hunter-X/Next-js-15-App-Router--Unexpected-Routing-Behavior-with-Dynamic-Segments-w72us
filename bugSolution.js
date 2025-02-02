```javascript
// app/page.js

export default function Home({ params }) {
  // Access dynamic segment parameters here
  console.log(params);
  return (
    <div>Hello {params.id}</div>
  );
}

// app/route.js

export default function Home() {
  return (
    <div>Hello World!</div>
  );
}

// app/api/route.js 

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the API route!' });
}
```