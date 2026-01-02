import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'guestbook.json');

export async function GET() {
    try {
        if (!fs.existsSync(dataFilePath)) {
            return NextResponse.json([]);
        }
        const fileContents = fs.readFileSync(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, message } = body;

        if (!name || !message) {
            return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
        }

        const newMessage = {
            id: Date.now().toString(),
            name,
            message,
            date: new Date().toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        };

        let messages = [];
        if (fs.existsSync(dataFilePath)) {
            const fileContents = fs.readFileSync(dataFilePath, 'utf8');
            try {
                messages = JSON.parse(fileContents);
            } catch (e) {
                messages = [];
            }
        }

        // 최신 메시지가 앞에 오도록 추가
        messages.unshift(newMessage);

        fs.writeFileSync(dataFilePath, JSON.stringify(messages, null, 2));

        return NextResponse.json(messages); // 전체 리스트 반환
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
