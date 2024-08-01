import './App.css';
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      value: "What is Github and how does it work?",
      title: "What is Github and how does it work?",
      content:
        "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
    },
    {
      value: "GitHub's availability",
      title: "How do I see GitHub's availability?",
      content: "Check our real-time status report",
    },
    {
      value: "GitHub popularity",
      title: "Why is GitHub so popular?",
      content:
        "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
    },
  ];

  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
