import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "./components/Layout/Dashboard";

function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>
          This content is public. Only signed out users can see the SignInButton
          above this text.
        </p>
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
}

export default App;
