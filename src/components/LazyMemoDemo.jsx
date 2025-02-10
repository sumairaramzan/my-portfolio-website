import React, { lazy, Suspense, useState, useMemo, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy Loading a Heavy Component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

const LazyMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo: Expensive Calculation Optimization
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation");
    return count * 2;
  }, [count]);

  // useCallback: Function Memoization
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center text-primary">React Lazy Loading & Memoization</h1>
        <div className="text-center my-3">
          <p className="fw-bold">Count: <span className="text-success">{count}</span></p>
          <p className="fw-bold">Expensive Calculation Result: <span className="text-danger">{expensiveCalculation}</span></p>
        </div>
        <div className="text-center">
          <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>Increment</button>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            className="form-control d-inline w-50 mx-2" 
            placeholder="Type something..." 
          />
          <button className="btn btn-warning" onClick={handleClick}>Click Me</button>
        </div>
        
        {/* Lazy Loaded Component */}
        <div className="mt-4 text-center">
          <Suspense fallback={<p className="text-muted">Loading Component...</p>}>
            <HeavyComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LazyMemoDemo);
