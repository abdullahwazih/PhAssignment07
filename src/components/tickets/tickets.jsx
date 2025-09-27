

import { useEffect } from "react";
import Ticket from "./ticket";

function Tickets({ tickets, setTickets, onSelect }) {

  // Fetch only once when component first mounts
  useEffect(() => {
    fetch("./tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error(err));
  }, [setTickets]); // remove "tickets" from dependency

  if (!tickets.length) return <p>No tickets found.</p>;

  return (
    <div className="tickets">
      {tickets.map((t) => (
        <Ticket key={t.id} ticket={t} onSelect={() => onSelect(t)} />
      ))}
    </div>
  );
}

export default Tickets;


