import './App.css';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Nav dogs={App.defaultProps.dogs} />
      <Routes dogs={App.defaultProps.dogs} />
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'https://doggiedesigner.com/wp-content/uploads/2020/09/beagle-with-a-bowl-of-popcorn_Pixel-Shot_Shutterstock-1024x683.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg',
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'https://i.dailymail.co.uk/1s/2020/02/11/10/24594164-7990561-image-m-9_1581415592388.jpg',
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
};

export default App;
