import { useState } from "react";
import "./styles.css";

const frenchCuisine = {
  "🍜 Soupe à l’oignon":
    "This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top",
  "🍖 Coq au vin":
    "This dish sees chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic and sometimes even a drop of brand",
  "🍲 Bœuf bourguignon":
    "A stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms.",
  "🍩 Chocolate soufflé":
    " The crispy chocolatey crust is perfect for letting the creamy chocolate ooze out for a rich surprise",
};

const indianCuisine = {
  "🌮 Samosas":
    "Samosas or Deep-Fried Potato/Veggie Dumpling are a tasty, fried, or baked pastry with savory fillings",
  "🥙 Naan":
    "Naan or Flat bread is the perfect combination of chewy and crispy, buttery and garlicky",
  "🍝 Masala dosa":
    "A sort of Indian pancake, dosas are made from a thin batter consisting of rice, flour and lentils",
  "🍗 Butter Chicken":
    "Chunks of chicken marinated overnight in yogurt and a beautiful mix of spices, served with a dollop of melting cream or butter on top",
};

const chineseCuisine = {
  "🍱 Hot Pot":
    "The concocted soup is boiled, people put slices of meat and various vegetables into the wok and wait for them to be cooked through",
  "🥟 Dumplings":
    "Made with minced meat with chopped vegetables to make the filling, and then wrap it into a thin piece of dumpling skin",
  "🍮 Ma Po Tofu":
    "To enrich the flavor, red and hot broth, ground beef and diced green onion will be drizzled over the tender tofu",
  "🥪 Spring Rolls":
    "It is filled with minced meat, vegetables or sweetened bean paste into a dough wrapper and fold it into a cylinder and then fry it",
};

const cuisineList = {
  "French cuisine": frenchCuisine,
  "Indian cuisine": indianCuisine,
  "Chinese cuisine": chineseCuisine,
};

export default function App() {
  let [cuisine, setCuisine] = useState({});
  function clickHandler(cuisine) {
    let cuisineSelect = cuisineList[cuisine];
    setCuisine(cuisineSelect);
  }

  function changeBg(index) {
    if (index % 2 !== 0) {
      return "#606c38a6";
    }
  }
  return (
    <div className="App">
      <h1 style={{ padding: "0.1rem 1rem 2rem" }}>
        🥣 <span style={{ textDecoration: "underline" }}>Recommend-nation</span>
      </h1>

      <div
        style={{
          fontSize: "1.1rem",
          padding: "0 1rem 1rem",
        }}
      >
        Check out some famous cuisine from other countries. Select anyone to get
        started
      </div>
      <div>
        <button
          className="cuiButton"
          onClick={() => clickHandler("French cuisine")}
        >
          French cuisine
        </button>
        <button
          className="cuiButton"
          onClick={() => clickHandler("Indian cuisine")}
        >
          Indian cuisine
        </button>
        <button
          className="cuiButton"
          onClick={() => clickHandler("Chinese cuisine")}
        >
          Chinese cuisine
        </button>
        <hr
          style={{
            display: "inline-block",
            width: "43rem",
            marginBottom: "1rem",
          }}
        />
      </div>

      {Object.keys(cuisine).length !== 0 &&
        Object.entries(cuisine).map((x, index) => {
          return (
            <div
              key={index}
              className="cuiBox"
              style={{ backgroundColor: changeBg(index) }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  paddingBottom: "0.5rem",
                }}
              >
                <em>{x[0]}</em>
              </span>
              <br />
              <span
                style={{
                  lineHeight: "1rem",
                  fontSize: "0.9rem",
                }}
              >
                {x[1]}
              </span>
            </div>
          );
        })}
    </div>
  );
}
