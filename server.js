app.use(express.static("src"));
app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});         