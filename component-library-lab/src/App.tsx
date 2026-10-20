import "./App.css";
import AlertBox from "./components/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay";

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

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "../public/images/headphones.avif",
    inStock: true,
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

        <div className="w-[50%]">
          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={(productId) =>
              alert(`Added product ${productId} to cart`)
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
