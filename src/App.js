import { Outlet } from 'react-router-dom';
import SearchHeader from './components/search_header';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { YoutubeApiProvider } from './context/youtubeApiContext';
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader/>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
