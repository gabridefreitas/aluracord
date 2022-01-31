export function messageFactory(object) {
  const { id, created_at, username, message, isOwner } = object ?? {};

  const date = new Date(created_at);

  return {
    id: id ?? "",
    createdAt: date.toLocaleTimeString() ?? "",
    user: username ?? "",
    message: message ?? "",
    isOwner: Boolean(username === "gabridefreitas"),
  };
}