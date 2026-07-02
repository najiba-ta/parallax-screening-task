export async function POST(req) {
  try {
    const items = await req.json();

    // Validate request body
    if (!Array.isArray(items) || items.length === 0) {
      return Response.json(
        { error: "Please provide a non-empty array of items." },
        { status: 400 }
      );
    }

    for (const item of items) {
      if (
        !item.name ||
        typeof item.name !== "string" ||
        item.name.trim() === ""
      ) {
        return Response.json(
          { error: "Each item must have a valid name." },
          { status: 400 }
        );
      }

      if (
        item.price === undefined ||
        item.price === null ||
        isNaN(Number(item.price)) ||
        Number(item.price) < 0
      ) {
        return Response.json(
          { error: `Invalid price for "${item.name}".` },
          { status: 400 }
        );
      }
    }

    // Calculate total
    const total = items.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );

    // Find most expensive item
    const mostExpensive = items.reduce((max, item) =>
      Number(item.price) > Number(max.price) ? item : max
    );

    return Response.json(
      {
        success: true,
        total,
        mostExpensive,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Invalid JSON payload.",
      },
      { status: 500 }
    );
  }
}