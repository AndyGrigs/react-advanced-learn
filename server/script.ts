import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

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
app.post('/user', async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        if (!password) {
            return res.status(400).send('No password provided!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
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

// app.post('/user', async (req, res) => {
//     try {
//         const { name, email } = req.body;
//         const user = await prisma.user.create({
//             data: { name, email },
//         });
//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

const PORT = process.env.PORT || 4445;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await prisma.$disconnect();
});
