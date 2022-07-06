import { QueryClient, QueryClientProvider } from "react-query";

import RouterConfig from "./RouterConfig";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterConfig />
    </QueryClientProvider>
  );
}

export default App;
