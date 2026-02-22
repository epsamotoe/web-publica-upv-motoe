import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validar datos básicos
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER, // Sender address (must be the authenticated user)
            to: process.env.GMAIL_USER,   // Receive email in the same inbox
            replyTo: email,               // Reply to the user's email
            subject: `[WEB CONTACTO] ${subject}`,
            text: `Has recibido un nuevo mensaje de contacto.\n\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #00cc88;">Nuevo Mensaje de Contacto Web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3>Mensaje:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email enviado correctamente' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Error al enviar el email' },
            { status: 500 }
        );
    }
}
