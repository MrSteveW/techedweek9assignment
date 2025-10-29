async function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

export default async function SlowComponent() {
  // the p tag cant display until my delay has finished
  await delay();
  return <p>I am very slow, but here I am at last 🚶</p>;
}
