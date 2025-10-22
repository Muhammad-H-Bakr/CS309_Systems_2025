const featureRequests = [
  { ticket: "FEAT-002", description: "Enable dark mode", priority: 2 },
  { ticket: "FEAT-001", description: "Add cart persistence", priority: 1 },
  { ticket: "FEAT-004", description: "Improve search speed", priority: 4 },
  { ticket: "FEAT-003", description: "Fix checkout bug", priority: 3 },
];

featureRequests.sort((a, b) => a.priority - b.priority);

for (const { ticket, description } of featureRequests) {
  console.log(`Ticket: ${ticket} - Description: ${description}`);
}

const sortedTickets = featureRequests.map(({ ticket, description }) => ({ ticket, description }));
console.log(sortedTickets);