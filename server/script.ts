import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// eslint-disable-next-line consistent-return
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findFirst({ where: { username, password } });

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        res.json(user).statusMessage = 'Login successful';
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// eslint-disable-next-line consistent-return
app.post('/user', async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
        if (!password) {
            return res.status(400).send('No password provided!');
        }

        const user = await prisma.user.create({
            data: {
                username,
                password,
            },
        });

        // Don’t return the password (even if hashed):
        const { password: _, ...result } = user;
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 4445;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await prisma.$disconnect();
});
