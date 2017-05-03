export default function randomFromArray(array) {
    return array[~~(Math.random() * array.length)];
}