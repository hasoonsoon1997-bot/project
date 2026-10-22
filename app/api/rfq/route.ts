import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/;

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const required = ['name', 'whatsapp', 'vin', 'customerType', 'city', 'country', 'carModel', 'carYear', 'part'];
    const missing = required.filter((k) => !data?.[k] || String(data[k]).trim() === '');

    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: 'missing_fields', fields: missing },
        { status: 400 }
      );
    }

    const vin = String(data.vin).toUpperCase().trim();
    if (!VIN_REGEX.test(vin)) {
      return NextResponse.json(
        { ok: false, error: 'invalid_vin' },
        { status: 400 }
      );
    }

    const year = Number(data.carYear);
    if (!Number.isInteger(year) || year < 1900 || year > new Date().getFullYear() + 1) {
      return NextResponse.json(
        { ok: false, error: 'invalid_year' },
        { status: 400 }
      );
    }

    // Log the submission for now (no persistence layer connected yet).
    console.log('[RFQ] New submission:', {
      customerType: data.customerType,
      name: data.name,
      whatsapp: data.whatsapp,
      city: data.city,
      country: data.country,
      email: data.email || null,
      vin,
      carModel: data.carModel,
      carYear: year,
      part: data.part,
      notes: data.notes || null,
      receivedAt: new Date().toISOString(),
    });

    // ---------------------------------------------------------------
    // Future integrations (wire these up when ready):
    // ---------------------------------------------------------------
    // 1. Resend (email notifications):
    //    await fetch('https://api.resend.com/emails', { ... })
    //
    // 2. Google Sheets (append row via Apps Script or Sheets API):
    //    await fetch(process.env.SHEETS_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(row) })
    //
    // 3. Telegram bot (instant team alert):
    //    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, { ... })
    //
    // 4. Supabase persistence:
    //    await supabase.from('rfq_submissions').insert({ ...payload })
    // ---------------------------------------------------------------

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[RFQ] Error processing submission:', err);
    return NextResponse.json(
      { ok: false, error: 'server_error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: 'rfq', method: 'POST' });
}
