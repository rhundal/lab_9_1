import "./App.css";
import AlertBox from "./components/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay";

import { useState } from "react";

function App() {
  const [alertStates, setAlertStates] = useState({
    success: true,
    error: true,
    warning: true,
    info: true,
  });

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

  function editFunction(userId: string) {
    alert(`Editing user ${userId}`);
  }

  function handleAddToCard(passedProductId: string) {
    alert(`Added product ${passedProductId} to cart`);
  }

  return (
    <>
      <div className="p-4">
        {allTypes.map(
          (typeVal) =>
            alertStates[typeVal] && (
              <AlertBox
                key={typeVal} // help sidentifying each alerbox individually
                type={typeVal} // typeVal is a prop which is declared in index.ts and can be of value held in array allTypes
                message="Your profile has been updated successfully!" // prop declared in the index.ts again which is unpacked in AlertBox.tsx and value is passed here
                // another prop which handles the behavior of closng the box
                onClose={() =>
                  // i customized this function to handle closing of separate alert boxes individually
                  setAlertStates((prev) => ({
                    ...prev,
                    [typeVal]: false,
                  }))
                }
              >
                <p className="text-sm">
                  You can now continue using the application.
                </p>
              </AlertBox>
            ),
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* In this Component, user, showEmail and showRole are props declared in the index.ts */}
          <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={() => editFunction(user.id)} // passing onEdit Prop here
          />
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </div>

        <div className="w-[50%]">
          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={() => handleAddToCard(product.id)}
          >
            <div className="text-sm text-gray-500">
              Free shipping available
            </div>{" "}
          </ProductDisplay>
        </div>
      </div>
    </>
  );
}

export default App;
