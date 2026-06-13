import { Resend } from 'resend';

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
        return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Instantiate per-request so the build doesn't require the key to be present.
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'dennis.ventrello@gmail.com',
            replyTo: email,
            subject: `Portfolio inquiry from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6d28d9;">New Portfolio Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return Response.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
