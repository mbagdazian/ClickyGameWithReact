import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    highestScore: 0,
    score: 0,
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  updateScore = () => {
    this.setState({score: this.state.score + 1});
    //when clicked for the first instance, score + 1 and pictures randomize.
    //second instance, game resets
    //this.setState(freinds: newFreindsarray)
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <nav className = 'navbar'>
        <Title 
         highestScore = {this.state.highestScore}
         score = {this.state.score}
        />


        </nav>
       

        {this.state.friends.map(friend => (
          <FriendCard
            updateScore={this.updateScore}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
