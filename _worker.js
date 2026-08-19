export default {
  async fetch() {
    return new Response("ZIONFLOW WORKER IS WORKING", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
