import { $ } from "babel-plugin-reactivars-solid"
import { Component } from "solid-js"


const CounterContainer = () => {
  let $count = 0
  let $doubleCount = $([() => $count * 2, x => $count = x / 2])
  const increment = () => { $doubleCount = $doubleCount + 2 }

  return <Counter {...{ $count, $doubleCount, increment }} />
}

const Counter: Component<{ $count: number, $doubleCount: number, increment: () => void }> =
  ({ $count, $doubleCount, increment }) =>
    <button type="button" onClick={increment}>
      {$count}|{$doubleCount}
    </button>

export default CounterContainer
