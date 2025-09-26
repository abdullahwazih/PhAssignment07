
import './App.css'
import './css/resolved_tickets.css';
import vectorImage from "./assets/vector1.png";
import { useEffect, useState } from "react";
import Tickets from './components/tickets/tickets';



function App() {


  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);


  const handleSelect = (ticket) => {
    setSelectedTickets((prev) => {
      if (prev.find((t) => t.id === ticket.id)) return prev;
      return [...prev, ticket];
    });
  };
  const handleComplete = (ticket) => {
    setResolvedTickets((prev) => [...prev, ticket]);

    setSelectedTickets((prev) => prev.filter((t) => t.id !== ticket.id));
  };


  return (
    <>

      {/* Navigation Bar */}
      <div className="Parent">

        <nav className="navBar">

          <h1 className="nav-title">CS-Ticket System</h1>


          <div className="navLinks">
            <a href="/">Home</a>
            <a href="/">FAQ</a>
            <a href="/">Changelog</a>
            <a href="/">Download</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>

            <button className="navBtn">
              <p>
                <span className="plus-icon">
                  +
                </span>
                New Ticket
              </p>
            </button>
          </div>

        </nav>

        {/* Banner */}

        <div className="banner">

          <div className="banner-left">
            <img src={vectorImage} alt="Vector" />

            <div className="banner-text">
              <p className="banner-inner-text">In progress</p>
              <span>{selectedTickets.length}</span>
            </div>

            <img src={vectorImage} alt="Vector flipped" className="flipped" />
          </div>

          <div className="banner-right">
            <img src={vectorImage} alt="Vector" />

            <div className="banner-text">
              <p className="banner-inner-text">Resolved</p>
              <span>{resolvedTickets.length}</span>
            </div>

            <img src={vectorImage} alt="Vector flipped" className="flipped" />
          </div>

        </div>

        {/* Main Content */}

        <div className="main-section">
          <div>
            <Tickets onSelect={handleSelect} />
          </div>

          <div className="selected-tickets">

            <h2>Task Status</h2>
            {selectedTickets.length === 0 ? (
              <p>Select a ticket to add to Task Status</p>
            ) : (
              selectedTickets.map((t) => (
                <div key={t.id} className="selected-ticket-card">
                  <div className="ticket-info">
                    <span className="ticket-title">{t.title}</span>
                  </div>
                  <button
                    className="complete-btn"
                    onClick={() => handleComplete(t)}
                  >
                    Complete
                  </button>
                </div>
              ))
            )}

            <h2>Resolved Tasks</h2>
            {resolvedTickets.length === 0 ? (
              <p>No tasks resolved yet.</p>
            ) : (
              resolvedTickets.map((t) => (
                <div key={t.id} className="resolved-ticket-card">
                  #{t.id} - {t.title}
                </div>
              ))
            )}
          </div>
        </div>





      </div>




    </>
  )
}

export default App
