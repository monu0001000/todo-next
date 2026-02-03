let tasks: string[] = [];

export async function GET() {
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTask = body.task;
  
  tasks.push(newTask);
  
  return Response.json({ success: true, tasks });
}