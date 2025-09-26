import { useState, useEffect } from "react";
import Ticket from "./ticket";

function Tickets({ onSelect }) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading tickets...</p>;
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
