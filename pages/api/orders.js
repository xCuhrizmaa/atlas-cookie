
export default async function handler(req, res) {

  if (req.method === 'POST') {

    const order = req.body

    console.log("New order:", order)

    res.status(200).json({ success: true })

  } else {

    res.status(405).json({ error: 'Method not allowed' })

  }
}
