import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CinematicBackground from "./components/CinematicBackground";
import Cursor from "./components/Cursor";
import MouseLight from "./components/MouseLight";
import Loader from "./components/Loader";
import CinematicCursor from "./components/CinematicCursor";
import CinematicMenu from "./components/CinematicMenu";

import Home from "@/pages/Home";
import LinkInBio from "@/pages/LinkInBio";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/links" component={LinkInBio} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="film-grain">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CinematicBackground />
          <CinematicCursor />
          <Cursor />
          <MouseLight />
          <Loader />
          <CinematicMenu />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
