export default defineEventHandler((event) => {
  return {
    message: 'Hello',
    url: event.node.req.url
  }
})
