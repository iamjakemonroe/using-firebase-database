import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SwipeButtons from "./SwipeButtons";

function TinderCards(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeopleFromFirebase() {
      const peopleCollection = collection(database, "people");
      const peopleSnapshot = await getDocs(peopleCollection);
      console.log({ people: peopleSnapshot.docs.map((doc) => doc.data()) });
      setPeople(peopleSnapshot.docs.map((doc) => doc.data()));
    }
    fetchPeopleFromFirebase();
  }, []);

  return (
    <div>
      <div className="cards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <div className="info__container">
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  {person.name}
                  <span
                    style={{
                      fontSize: 30,
                      fontFamily: "roboto",
                      paddingLeft: 6,
                      position: "relative",
                    }}
                  >
                    {person.age}
                  </span>
                </h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <SwipeButtons />
    </div>
  );
}

export default TinderCards;
