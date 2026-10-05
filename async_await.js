async function loadPosts() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    const posts = await res.json();

    console.log("Latest Posts:", posts);
  } catch (err) {
    console.error("Error:", err);
  }
}

loadPosts();