import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { GlobalStyles } from './assets/global';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
          <Header />
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
  )
}

export default App
