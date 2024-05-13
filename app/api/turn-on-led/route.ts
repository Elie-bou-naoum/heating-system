import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest, res: NextResponse) {
  const esp2Url = "http://esp2.local"; // Get DNS of esp2 from environment variable

  try {
    const response = await axios.get(`${esp2Url}/turn-on-led`); 
    if (response.status === 200) {
 
      return NextResponse.json(
        { message: "LED turned on on esp2" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to turn on LED on esp2" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to communicate with ESP2" },
      { status: 500 }
    );
  }
}
