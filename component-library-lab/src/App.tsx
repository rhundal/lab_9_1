import "./App.css";
import AlertBox from "./components/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard";

import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const allTypes = ["success", "error", "warning", "info"] as const;

  let user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "../public/images/user-default.jpg",
  };

  return (
    <>
      <div className="p-4">
        {allTypes.map(
          (typeVal) =>
            showAlert && (
              <AlertBox
                type={typeVal}
                message="Your profile has been updated successfully!"
                onClose={() => setShowAlert(false)}
              >
                <p className="text-sm">
                  You can now continue using the application.
                </p>
              </AlertBox>
            ),
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <UserProfileCard user={user} showEmail={true} showRole={true} />
        </div>
      </div>
    </>
  );
}

export default App;
