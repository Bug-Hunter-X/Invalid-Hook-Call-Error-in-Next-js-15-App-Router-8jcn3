```javascript
// pages/index.js
export default function Home() {
  const router = useRouter(); // Correct placement within functional component
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects here
  }, [count]);

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```