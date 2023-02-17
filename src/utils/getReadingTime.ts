import getReadingTime from "reading-time";

export default function $getReadingTime(textonPage: string) {
    const readingTime = getReadingTime(textonPage);
    return readingTime.text
}