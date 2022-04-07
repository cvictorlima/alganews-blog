import { format } from "date-fns";

export default function formatPostDate(postCreationDate: string): string {
  const postDate = new Date(postCreationDate);
  const currentDate = new Date();
  const diff = currentDate.getTime() - postDate.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);
  if (diffDays > 3) {
    return format(postDate, "dd/MM/yyyy");
  } else if (diffDays > 0) {
    return `há ${diffDays} dias`;
  } else if (diffHours > 0) {
    return `há ${diffHours} horas`;
  } else if (diffMinutes > 0) {
    return `há ${diffMinutes} minutos`;
  } else if (diffSeconds > 0) {
    return `há ${diffSeconds} segundos`;
  } else {
    return "agora há pouco";
  }
}
