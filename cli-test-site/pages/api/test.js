export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { command } = req.body ?? {};
    if (typeof command !== 'string' || !command.trim()) {
        return res.status(400).json({ error: 'Missing or empty "command" field' });
    }
    // Simple echo logic – replace with real CLI interaction as needed.
    const result = `Received command: "${command}"\nTimestamp: ${new Date().toISOString()}`;
    return res.status(200).json({ result });
}
