import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import OrderTable from "./components/OrderTable/OrderTable";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Hero />} />
          <Route path="default" element={<OrderTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
