# 🧱 Stack Data Structure in JavaScript

This project implements a basic **Stack (LIFO)** data structure using plain JavaScript.

## 📦 Features

- `push(element)` – Adds an element to the top of the stack.
- `pop()` – Removes and returns the top element.
- `peek()` – Returns the top element without removing it.
- `isEmpty()` – Checks if the stack is empty.
- `size()` – Returns the number of elements in the stack.
- `clear()` – Clears the stack.
- `print()` – Displays the contents of the stack.

## 🔧 Usage

```js
import { Stack } from './Stack.js'

const stack = new Stack()

stack.push(1)
stack.push(2)
console.log(stack.pop()) // 2
console.log(stack.peek()) // 1
