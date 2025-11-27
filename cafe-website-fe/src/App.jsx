import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="sticky top-0 min-w-[100vw] min-h-15 bg-red-200">
        HEADER
      </div>
      <Outlet />
    </>
  );
}
