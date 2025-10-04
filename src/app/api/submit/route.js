export async function POST(req) {
  const data = await req.json();

  const response = await fetch("https://script.google.com/macros/s/AKfycbxESQkzYj1voymO_SJlYomztd-Lj4f0C25qizP43XTvofUKWsCLEiIzvqkWZiaelGv4/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.text();
  return new Response(result, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
