export const formatText = (text) => text.length > 30 ? text.substring(0, 30).concat('...') : text;
export const formatDate = (date) => new Date(date).toLocaleDateString();