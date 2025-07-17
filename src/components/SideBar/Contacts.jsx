export default function Contacts() {
  const contacts = [
    {
      name: "Natali Craig",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Drew Cano",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Orlando Diggs",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      name: "Andi Lane",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Kate Morrison",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Koray Okumus",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ];

  return (
    <div className="w-64">
      <h2 className="mb-4 text-sm font-semibold text-gray-500 dark:text-white">
        Contacts
      </h2>
      <div className="space-y-4">
        {contacts.map((contact, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-800 dark:text-white">
              {contact.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
