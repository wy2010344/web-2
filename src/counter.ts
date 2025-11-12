import { fn } from 'share-lib'
import { add } from 'share-ts-lib'
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `web2 from dev is ${counter} ${fn(counter)}---${add(counter)}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
