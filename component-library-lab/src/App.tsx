import "./App.css";
import AlertBox from "./components/AlertBox";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="info"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      )}
    </div>
  );
}

export default App;
