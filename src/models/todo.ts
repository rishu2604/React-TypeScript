export default class Todo {
  // In vanilla JavaScript, we would basically not have these two property descriptions and we would just have the constructor code, which would work in vanilla JavaScript, but not in TypeScript.
  // When using TypeScript, you also have to define those properties ahead of time to make it clear which types of values will be stored in there.
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
