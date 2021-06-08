import express from 'express';

const { PORT = 3000 } = process.env;
const app = express();

// Serve app production bundle
app.use(express.static('dist/app'));

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`boilerplate app listening at http://localhost:${PORT}`);
});
