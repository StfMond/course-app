import express from 'express';
import path from 'path';

const port: number = 3000;
const root = process.cwd();
const resolve = (p: string) => path.resolve(root, p);

const app = express();
const assetPath = resolve('./dist');
const indexPath = resolve('./dist/index.html');

// app.use('*', async (req, res) => {
// 	// serve index.html - we will tackle this next
// });


const router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/public', 'index.html'));
});
app.use('/', router);
app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log('Server started at http://localhost:3000');
});
