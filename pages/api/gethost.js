export default (req, res) => {
  res.status(200).json({ text: 'Hello', req: req.headers.host })
}