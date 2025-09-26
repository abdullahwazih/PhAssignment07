function Ticket({ ticket, onSelect }) {
  const formattedDate = new Date(ticket.createdAt).toLocaleString();

  return (
    <div className="ticket" onClick={onSelect} style={{ cursor: "pointer" }}>
      <div className="ticket-row-1">
        <h3>{ticket.title}</h3>
        <div className="ticket-status">{ticket.status}</div>
      </div>

      <p className="ticket-description">{ticket.description}</p>

      <div className="ticket-row-2">
        <div className="ticket-row-2-left-side">
          <p>#{ticket.id}</p>
          <p className="text-gap">
            {ticket.priority} <span>Priority</span>
          </p>
        </div>

        <div className="ticket-row-2-right-side">
          <p>{ticket.customer}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
