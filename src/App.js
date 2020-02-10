import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        avatar={"https://i.postimg.cc/mZ7hJTqg/francoise.jpg"}
        name={"Bernadette Martin"}
        online={false}
      />
      <Contact
        avatar={"https://i.postimg.cc/sggXM72M/JM-poirret.jpg"}
        name={"Olivier Grand"}
        online={true}
      />
      <Contact
        avatar={"https://i.postimg.cc/G2S6p40P/integration-gandalf.png"}
        name={"Gandalf"}
        online={true}
      />
    </div>
  );
}

export default App;
