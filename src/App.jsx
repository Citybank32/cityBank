import Layout from "./components/Layout";

import { CustomerDataProvider, IsLoginProvider } from "./provider";
function App() {
  return (
    <IsLoginProvider>
      <CustomerDataProvider>
        <Layout />
      </CustomerDataProvider>
    </IsLoginProvider>
  );
}

export default App;
