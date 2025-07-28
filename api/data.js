export default async function handler(req, res) {
  const secretKey = 'raju123'; // Change to your custom key
  const key = req.query.key;

  // (Optional) Check if the request came from your domain
  const referer = req.headers.referer || "";
  if (!referer.includes("yourdomain.com")) {
    return res.status(403).json({ error: "Access Denied: Invalid Domain" });
  }

  if (key !== secretKey) {
    return res.status(403).json({ error: "Unauthorized access" });
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/mahbuburrahmanraju/store/refs/heads/main/video.json');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch JSON" });
  }
}
