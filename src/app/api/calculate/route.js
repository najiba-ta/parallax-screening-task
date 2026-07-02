export async function POST(req) {
  try {
    const items = await req.json();

    // Validate: must be array and not empty
    if (!Array.isArray(items) || items.length === 0) {
      return Response.json(
        { success: false, error: "Please provide a non-empty array of items." },
        { status: 400 }
      );
    }

    // Validate each item
    for (const item of items) {
      const name = item?.name?.trim();
      const price = Number(item?.price);

      if (!name) {
        return Response.json(
          { success: false, error: "Each item must have a valid name." },
          { status: 400 }
        );
      }

      if (isNaN(price) || price < 0) {
        return Response.json(
          { success: false, error: `Invalid price for "${name}".` },
          { status: 400 }
        );
      }
    }

    // Calculate total
    const total = items.reduce((sum, item) => {
      return sum + Number(item.price);
    }, 0);

    // Find most expensive item safely
    const mostExpensive = items.reduce((max, item) => {
      return Number(item.price) > Number(max.price) ? item : max;
    }, items[0]);

    // Success response
    return Response.json({
      success: true,
      total,
      mostExpensive,
    });

  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Invalid request payload or server error.",
      },
      { status: 500 }
    );
  }
}